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
} from "./deps.ts";
import { logger, PartialExcept, PartialKeys } from "../../util/mod.ts";
import { DiscordSocket, DiscordSocketOptions } from "../discord_socket.ts";

export interface GuildMembersChunkEntry {
  chunks: GatewayGuildMembersChunkDispatchData[];
  resolve: (value: GatewayGuildMembersChunkDispatchData[]) => void;
}

export type GatewayIdentifyDataPartial = PartialExcept<
  GatewayIdentifyData & {
    shards: number;
    displayMobileStatus?: boolean;
    version?: number;
  },
  "intents"
>;

export interface ShardOptions extends DiscordSocketOptions {
  id?: number;
}

const ShardDispatchEvents = new Set(Object.values(GatewayDispatchEvents));

export class Shard extends DiscordSocket {
  guildMembersChunkMap = new Map<string, GuildMembersChunkEntry>();
  heartbeatInterval?: number;
  id?: number;
  latency = 0;
  readyAt = 0;
  resumedAt = 0;
  seq = 0;
  sessionID?: string;
  unavailableGuilds = new Set<string>();

  private lastHeartbeatSent = 0;
  private identifyData?: GatewayIdentifyDataPartial;

  constructor(public token: string, url: string, options?: ShardOptions) {
    super(url, options);

    this.id = options?.id;
  }

  async connect(re?: boolean) {
    await super.connect();
    logger.debug?.(`Shard ${this.id ?? "unknown"} ${re ? "re" : ""}connected`);
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

    logger.warn?.(
      `Shard ${this.id} disconnected with code ${event.code} and`,
      `with${event.reason ? ` reason "${event.reason}"` : "out a reason"}`,
    );
    this.dispatch("DISCONNECT", resumable, reconnectable, event);
    this.reset(resumable);

    // TODO: Make reconnecting and resuming work in a queue with other shards.
    if (reconnectable && this.url) {
      await this.connect();
      this.resumeOrIdentify(resumable, this.identifyData);
    }
  }

  onSocketError(event: Event) {
    this.dispatch("ERROR", event);
  }

  async onSocketMessage(event: MessageEvent<string>) {
    const payload = await this.decodePayload<GatewayReceivePayload>(event.data);

    switch (payload.op) {
      case GatewayOPCodes.Dispatch: {
        this.seq = payload.s;
        switch (payload.t) {
          case GatewayDispatchEvents.GuildCreate: {
            if (this.unavailableGuilds.has(payload.d.id)) {
              this.unavailableGuilds.delete(payload.d.id);
            }
            break;
          }

          case GatewayDispatchEvents.GuildDelete: {
            if (payload.d.unavailable) {
              this.unavailableGuilds.add(payload.d.id);
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
            logger.info?.(`Shard ${this.id} is ready`);
            this.readyAt = Date.now();
            this.sessionID = payload.d.session_id;
            for (const unavailableGuild of payload.d.guilds) {
              this.unavailableGuilds.add(unavailableGuild.id);
            }
            break;
          }

          case GatewayDispatchEvents.Resumed: {
            logger.info?.(`Shard ${this.id} resumed`);
            this.resumedAt = Date.now();
            break;
          }
        }

        if (!ShardDispatchEvents.has(payload.t)) {
          logger.warn?.(
            `Shard ${this.id} received an unknown event "${payload.t}"`,
          );
        }
        this.dispatch("DISPATCH", payload);
        break;
      }

      case GatewayOPCodes.InvalidSession: {
        logger.trace?.(
          `Shard ${this.id} encountered an invalid session. Attempting to`,
          payload.d ? "resume" : "identify",
        );
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

  heartbeat() {
    this.lastHeartbeatSent = Date.now();
    this.sendPayload(GatewayOPCodes.Heartbeat, this.seq);
  }

  identify(data: GatewayIdentifyDataPartial) {
    this.identifyData = data;
    const payload: GatewayIdentifyData = {
      properties: {
        $browser: data.displayMobileStatus ? "Discord Android" : "Space",
        $device: "Space",
        $os: Deno.build.os,
      },
      shard: data.shard ?? (
        this.id !== undefined && data.shards !== undefined
          ? [this.id, data.shards]
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
