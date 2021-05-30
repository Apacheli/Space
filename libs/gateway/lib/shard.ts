import {
  GatewayCloseEventCodes,
  GatewayEvents,
  GatewayOpcodes,
} from "../../types/mod.ts";
import type {
  GatewayPayload,
  GetGatewayBotBody,
  GuildRequestMembersPayloadData,
  IdentifyPayloadData,
  PresenceUpdatePayloadData,
  ResumePayloadData,
  Snowflake,
  VoiceStateUpdatePayloadData,
} from "../../types/mod.ts";
import { DiscordSocket, PartialKeys } from "../../util/mod.ts";

/** Shard events */
export enum ShardEvents {
  /** The shard has disconnected */
  Close = "close",
  /** The shard received a dispatch payload */
  Dispatch = "dispatch",
  /** The shard encountered an error */
  Error = "error",
}

/** Shard identify data */
export type ShardIdentifyData = Omit<
  IdentifyPayloadData & GetGatewayBotBody,
  "properties" | "session_start_limit" | "shard" | "token"
>;

/** Class representing a shard */
export class Shard extends DiscordSocket {
  /** Heatbeat send and heartbeat ACK receive latency */
  latency = 0;

  #heartbeatInterval?: number;
  #lastHeartbeatSent = 0;
  #seq = 0;
  #sessionID?: string;
  #unavailableGuilds = new Set<Snowflake>();
  #token;

  /**
   * @param token Authentication token used for identifying and resuming
   * @param id Zero-based integer used for dispersing guilds
   */
  constructor(token: string, public id?: number) {
    super();

    this.#token = token;
  }

  /**
   * Reset this shard's properties
   * @param soft Don't reset properties that are used for resuming sessions
   */
  reset(soft?: boolean) {
    clearInterval(this.#heartbeatInterval);
    this.#heartbeatInterval = undefined;
    this.socket = undefined;

    if (!soft) {
      this.deafen(GatewayEvents.GuildMembersChunk);
      this.latency = 0;
      this.#seq = 0;
      this.#sessionID = undefined;
      this.#unavailableGuilds.clear();
    }
  }

  protected onSocketClose(event: CloseEvent) {
    let reconnectable = false;
    let resumable = true;

    switch (event.code) {
      case 0:
      case 1001: // "Discord WebSocket requesting client reconnect."
      case GatewayCloseEventCodes.UnknownError: {
        resumable = false;
      } /* falls through */

      case GatewayCloseEventCodes.UnknownOpcode:
      case GatewayCloseEventCodes.DecodeError:
      case GatewayCloseEventCodes.InvalidSeq:
      case GatewayCloseEventCodes.RateLimited:
      case GatewayCloseEventCodes.SessionTimedOut: {
        reconnectable = true;
        break;
      }
    }

    this.reset(resumable);

    this.dispatch(ShardEvents.Close, resumable, reconnectable, event);
  }

  protected onSocketError(event: Event) {
    this.dispatch(ShardEvents.Error, event);
  }

  protected onSocketMessage(event: MessageEvent) {
    const payload: GatewayPayload = this.decodePayload(event.data);

    switch (payload.op) {
      case GatewayOpcodes.Dispatch: {
        this.#seq = payload.s;

        switch (payload.t) {
          case GatewayEvents.GuildCreate: {
            const guildId = BigInt(payload.d.id);
            if (this.#unavailableGuilds.has(guildId)) {
              this.#unavailableGuilds.delete(guildId);
            }
            break;
          }

          case GatewayEvents.GuildDelete: {
            if (payload.d.unavailable) {
              this.#unavailableGuilds.add(BigInt(payload.d.id));
            }
            break;
          }

          case GatewayEvents.Ready: {
            this.id ??= payload.d.shard?.[0];
            this.#sessionID = payload.d.session_id;
            for (const unavailableGuild of payload.d.guilds) {
              this.#unavailableGuilds.add(BigInt(unavailableGuild.id));
            }
            break;
          }
        }

        this.dispatch(ShardEvents.Dispatch, payload.t, payload.d);
        break;
      }

      case GatewayOpcodes.Hello: {
        const delay = payload.d.heartbeat_interval;
        this.#heartbeatInterval = setInterval(() => this.#heartbeat(), delay);
        break;
      }

      case GatewayOpcodes.HeartbeatACK: {
        this.latency = Date.now() - this.#lastHeartbeatSent;
        break;
      }
    }
  }

  #heartbeat = () => {
    this.#lastHeartbeatSent = Date.now();
    this.sendPayload(GatewayOpcodes.Heartbeat, this.#seq);
  };

  #identify = (data: ShardIdentifyData) => {
    const payload: IdentifyPayloadData = {
      properties: {
        $browser: "Space",
        $device: "Space",
        $os: Deno.build.target,
      },
      shard: this.id === undefined ? undefined : [this.id, data.shards ?? 1],
      token: this.#token,
      ...data,
    };
    this.sendPayload(GatewayOpcodes.Identify, payload);
  };

  /**
   * Update this shard's presence
   *
   *     Shard.updatePresence({
   *       activities: [
   *         {
   *           name: "Bloons TD 6",
   *           type: 0,
   *         },
   *       ],
   *       status: "online",
   *     });
   */
  updatePresence(
    data: PartialKeys<PresenceUpdatePayloadData, "afk" | "since">,
  ) {
    const payload: PresenceUpdatePayloadData = {
      afk: false,
      since: null,
      ...data,
    };
    this.sendPayload(GatewayOpcodes.PresenceUpdate, payload);
  }

  /**
   * Update this shard's voice state for a guild
   *
   *     Shard.updateVoiceState({
   *       channel_id: "836841935976923146",
   *       guild_id: "812458966357377067",
   *     });
   */
  updateVoiceState(
    data: PartialKeys<VoiceStateUpdatePayloadData, "self_deaf" | "self_mute">,
  ) {
    if (this.#unavailableGuilds.has(BigInt(data.guild_id))) {
      throw new Error("Guild is unavailable.");
    }
    const payload: VoiceStateUpdatePayloadData = {
      "self_deaf": false,
      "self_mute": false,
      ...data,
    };
    this.sendPayload(GatewayOpcodes.VoiceStateUpdate, payload);
  }

  #resume = () => {
    if (!this.#sessionID) {
      throw new Error("No session to resume.");
    }
    const payload: ResumePayloadData = {
      seq: this.#seq,
      "session_id": this.#sessionID,
      token: this.#token,
    };
    this.sendPayload(GatewayOpcodes.Resume, payload);
  };

  /** Request members from a guild */
  async requestGuildMembers(data: GuildRequestMembersPayloadData) {
    if (this.#unavailableGuilds.has(BigInt(data.guild_id))) {
      throw new Error("Guild is unavailable.");
    }
    const payload: GuildRequestMembersPayloadData = {
      nonce: data.nonce ?? `${Date.now()}`.padStart(16, "0"),
      query: "",
      ...data,
    };
    this.sendPayload(GatewayOpcodes.RequestGuildMembers, payload);
    return this.receive(GatewayEvents.GuildMembersChunk, {
      abort: (data) => data.chunk_index + 1 === data.chunk_count,
    });
  }

  identifyOrResume(identifyData?: ShardIdentifyData, resumable?: boolean) {
    if (resumable && this.#sessionID) {
      this.#resume();
    } else if (identifyData) {
      this.#identify(identifyData);
    } else {
      throw new Error("Failed to identify or resume.");
    }
  }
}
