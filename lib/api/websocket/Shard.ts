import {
  GatewayCloseCodes,
  GatewayDispatchEvents,
  GatewayGuildMembersChunkDispatchData,
  GatewayIdentifyData,
  GatewayOPCodes,
  GatewayPresenceUpdateData,
  GatewayReceivePayload,
  GatewayRequestGuildMembersData,
  GatewayResumeData,
  GatewayVoiceStateUpdateData,
} from "https://deno.land/x/discord_api_types/v8/mod.ts";
import EventManager from "../../util/EventPipeline.ts";
import * as logger from "../../util/logger.ts";
import { PartialExcept, PartialKeys } from "../../util/util.ts";

export interface GuildMembersChunkEntry {
  chunks: GatewayGuildMembersChunkDispatchData[];
  resolve: (value: GatewayGuildMembersChunkDispatchData[]) => void;
}

export type GatewayIdentifyDataPartial = PartialExcept<
  GatewayIdentifyData & { shardCount: number },
  "intents"
>;

export default class Shard extends EventManager {
  guildMembersChunkMap = new Map<string, GuildMembersChunkEntry>();
  heartbeatInterval?: number;
  latency = 0;
  readyAt = 0;
  resumedAt = 0;
  seq = 0;
  sessionID?: string;
  socket?: WebSocket;
  unavailableGuilds = new Set<string>();

  private lastHeartbeatSent = 0;
  private identifyData?: GatewayIdentifyDataPartial;
  private url?: string;

  constructor(public token: string, public id?: number) {
    super();
  }

  connect(url: string) {
    this.url = url;

    logger.debug?.(
      this.id === undefined ? "An unknown shard" : `Shard ${this.id}`,
      "is connecting.",
    );

    const socket = new WebSocket(url);
    socket.addEventListener("close", (event) => this.onSocketClose(event));
    socket.addEventListener("error", (event) => this.onSocketError(event));
    socket.addEventListener("message", (event) => this.onSocketMessage(event));
    this.socket = socket;

    return new Promise((resolve) => socket.addEventListener("open", resolve));
  }

  disconnect(code?: number, reason?: string) {
    if (!this.socket) {
      throw new Error("Cannot disconnect if there was no socket connected.");
    }
    this.socket.close(code, reason);
  }

  reset(soft?: boolean) {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = undefined;
    }
    this.socket = undefined;

    if (!soft) {
      for (const entry of this.guildMembersChunkMap.values()) {
        entry.resolve(entry.chunks);
      }
      this.latency = 0;
      this.guildMembersChunkMap.clear();
      this.unavailableGuilds.clear();
      this.seq = 0;
      this.sessionID = undefined;
    }
  }

  async onSocketClose(event: CloseEvent) {
    let reconnectable = false;
    let resumable = false;

    switch (event.code) {
      case 0: // Cloudflare(?)
      case 1001: // "Discord WebSocket requesting client reconnect."
      case GatewayCloseCodes.UnknownError: {
        resumable = true;
      } /* falls through */

      case GatewayCloseCodes.UnknownOpCode:
      case GatewayCloseCodes.DecodeError:
      case GatewayCloseCodes.InvalidSeq:
      case GatewayCloseCodes.RateLimited:
      case GatewayCloseCodes.SessionTimedOut: {
        reconnectable = true;
        break;
      }
    }

    logger.warn?.(`Shard ${this.id} disconnected.`);
    this.dispatch("DISCONNECT", {
      code: event.code,
      reason: event.reason,
      reconnectable,
      resumable,
    });
    this.reset(resumable);

    // TODO: Make reconnecting and resuming work in a queue with other shards.
    if (reconnectable && this.url) {
      logger.debug?.(`Shard ${this.id} is reconnecting.`);
      this.dispatch("RECONNECT");
      await this.connect(this.url);
      this.resumeOrIdentify(resumable, this.identifyData);
    }
  }

  onSocketError(event: Event) {
    this.dispatch("ERROR", event);
  }

  onSocketMessage(event: MessageEvent<string>) {
    const payload: GatewayReceivePayload = JSON.parse(event.data);

    switch (payload.op) {
      case GatewayOPCodes.Dispatch: {
        this.seq = payload.s;
        switch (payload.t) {
          case GatewayDispatchEvents.GuildCreate: {
            const guild = payload.d;
            if (this.unavailableGuilds.has(guild.id)) {
              this.unavailableGuilds.delete(guild.id);
              return this.dispatch("GUILD_AVAILABLE", guild);
            }
            break;
          }

          case GatewayDispatchEvents.GuildDelete: {
            const guild = payload.d;
            if (guild.unavailable) {
              this.unavailableGuilds.add(guild.id);
              return this.dispatch("GUILD_UNAVAILABLE", guild);
            }
            break;
          }

          case GatewayDispatchEvents.GuildMembersChunk: {
            if (
              !(payload.d.nonce && payload.d.chunk_count) ||
              payload.d.chunk_index === undefined
            ) {
              break;
            }
            const entry = this.guildMembersChunkMap.get(payload.d.nonce);
            if (
              entry?.chunks.push(payload.d) !== undefined &&
              payload.d.chunk_index + 1 === payload.d.chunk_count
            ) {
              this.guildMembersChunkMap.delete(payload.d.nonce);
              entry.resolve(entry.chunks);
            }
            break;
          }

          case GatewayDispatchEvents.Ready: {
            this.id ??= payload.d.shard?.[0];
            logger.info?.(`Shard ${this.id} is ready.`);
            this.readyAt = Date.now();
            this.sessionID = payload.d.session_id;
            for (const unavailableGuild of payload.d.guilds) {
              this.unavailableGuilds.add(unavailableGuild.id);
            }
            break;
          }

          case GatewayDispatchEvents.Resumed: {
            logger.info?.(`Shard ${this.id} resumed.`);
            this.resumedAt = Date.now();
            break;
          }
        }

        this.dispatch(payload.t, payload.d);
        break;
      }

      case GatewayOPCodes.InvalidSession: {
        this.resumeOrIdentify(payload.d, this.identifyData);
        break;
      }

      case GatewayOPCodes.Hello: {
        const delay = payload.d.heartbeat_interval;
        this.heartbeatInterval = setInterval(() => this.heartbeat(), delay);
        break;
      }

      case GatewayOPCodes.HeartbeatAck: {
        this.latency = Date.now() - this.lastHeartbeatSent;
        break;
      }
    }
  }

  sendPayload(opcode: number, data: unknown) {
    if (!this.socket) {
      throw new Error("Cannot send payload if no socket exists.");
    }
    const payload = {
      d: data,
      op: opcode,
    };
    const json = JSON.stringify(payload);
    this.socket.send(json);
  }

  heartbeat() {
    this.lastHeartbeatSent = Date.now();
    this.sendPayload(GatewayOPCodes.Heartbeat, this.seq);
  }

  identify(data: GatewayIdentifyDataPartial) {
    this.identifyData = data;
    const payload: GatewayIdentifyData = {
      properties: {
        $browser: "Space",
        $device: "Space",
        $os: Deno.build.os,
      },
      shard: data.shard ?? (
        this.id !== undefined && data.shardCount !== undefined
          ? [this.id, data.shardCount]
          : undefined
      ),
      token: this.token,
      ...data,
    };
    this.sendPayload(GatewayOPCodes.Identify, payload);
  }

  updatePresence(
    data: PartialKeys<GatewayPresenceUpdateData, "afk" | "since">,
  ) {
    const payload: GatewayPresenceUpdateData = {
      afk: false,
      since: null,
      ...data,
    };
    this.sendPayload(GatewayOPCodes.PresenceUpdate, payload);
  }

  updateVoiceState(
    data: PartialKeys<GatewayVoiceStateUpdateData, "self_deaf" | "self_mute">,
  ) {
    const payload: GatewayVoiceStateUpdateData = {
      "self_deaf": false,
      "self_mute": false,
      ...data,
    };
    this.sendPayload(GatewayOPCodes.VoiceStateUpdate, payload);
  }

  resume() {
    if (!this.sessionID) {
      throw new Error("No session ID is available to resume.");
    }
    const payload: GatewayResumeData = {
      seq: this.seq,
      "session_id": this.sessionID,
      token: this.token,
    };
    this.sendPayload(GatewayOPCodes.Resume, payload);
  }

  requestGuildMembers(
    data: PartialKeys<GatewayRequestGuildMembersData, "limit">,
  ) {
    const nonce = data.nonce ?? `${Date.now()}`.padStart(16, "0");
    const payload: GatewayRequestGuildMembersData = {
      limit: 0,
      nonce,
      query: "",
      ...data,
    };
    this.sendPayload(GatewayOPCodes.RequestGuildMembers, payload);
    return new Promise((resolve) => {
      this.guildMembersChunkMap.set(nonce, {
        chunks: [],
        resolve,
      });
    });
  }

  resumeOrIdentify(
    resumable?: boolean,
    identifyData?: GatewayIdentifyDataPartial,
  ) {
    if (resumable && this.sessionID) {
      this.resume();
    } else if (identifyData) {
      this.identify(identifyData);
    } else {
      throw new Error("Failed to resume or identify.");
    }
  }
}
