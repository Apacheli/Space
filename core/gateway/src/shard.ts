import {
  GatewayCloseEventCodes,
  GatewayOpcodes,
} from "../../types/src/topics/opcodes_and_status_codes.ts";
import type {
  DispatchPayloadGuildMembersChunkData,
  GatewayPayload,
  GuildRequestMembersPayloadData,
  IdentifyPayloadData,
  PresenceUpdatePayloadData,
  ResumePayloadData,
  VoiceStateUpdatePayloadData,
} from "../../types/src/topics/gateway.ts";
import { GatewayEvents } from "../../types/src/topics/gateway.ts";
import { DiscordSocket } from "../../util/src/discord_socket.ts";
import type { PartialKeys } from "../../util/src/types.ts";
import { hexDecode, hexEncode } from "../../util/src/hex_codec.ts";
import { utf8Decode, utf8Encode } from "../../util/src/utf8_codec.ts";

/** Shard events */
export enum ShardEvents {
  /** The shard disconnected */
  Close = "Close",
  /** The shard encountered an error */
  Error = "Error",
}

/** Class representing a shard */
export class Shard extends DiscordSocket {
  /** `Heartbeat` send and `heartbeat ACK` receive latency */
  latency = -1;

  #heartbeatInterval?: number;
  #seq = 0;
  #sessionId?: string;
  #lastHeartbeatSentAt = -1;

  /**
   * @param token Bot authentication token
   */
  constructor(public token: string) {
    super();
  }

  /**
   * Reset the shard
   * @param soft Soft reset if the shard is able to resume
   */
  reset(soft: boolean) {
    this.socket = undefined;
    clearInterval(this.#heartbeatInterval);
    this.#heartbeatInterval = undefined;

    if (!soft) {
      this.deafen(GatewayEvents.GuildMembersChunk);
      this.latency = -1;
      this.#seq = 0;
      this.#sessionId = undefined;
    }
  }

  onSocketClose(event: CloseEvent) {
    let reconnectable = false;
    let resumable = false;

    switch (event.code) {
      case 0:
      case 1001: // "Discord WebSocket requesting client reconnect."
      case GatewayCloseEventCodes.UnknownError: {
        resumable = true;
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

    this.dispatch(ShardEvents.Close, reconnectable, resumable, event);
  }

  onSocketError(event: Event) {
    this.dispatch(ShardEvents.Error, event);
  }

  onSocketMessage(message: MessageEvent) {
    const payload: GatewayPayload = JSON.parse(message.data);

    switch (payload.op) {
      case GatewayOpcodes.Dispatch: {
        this.#seq = payload.s;

        switch (payload.t) {
          case GatewayEvents.Ready: {
            this.#sessionId = utf8Decode(hexDecode(payload.d.session_id));
            break;
          }
        }
        break;
      }

      case GatewayOpcodes.HeartbeatACK: {
        this.latency = Date.now() - this.#lastHeartbeatSentAt;
        break;
      }

      case GatewayOpcodes.Hello: {
        this.#heartbeatInterval = setInterval(
          () => this.heartbeat(),
          payload.d.heartbeat_interval,
        );
        break;
      }
    }

    this.dispatch(GatewayOpcodes[payload.op], payload.d, payload.t);
  }

  /** Send a heartbeat */
  heartbeat() {
    this.#lastHeartbeatSentAt = Date.now();
    this.sendPayload(GatewayOpcodes.Heartbeat, this.#seq);
  }

  /** Identify */
  identify(data: PartialKeys<IdentifyPayloadData, "token" | "properties">) {
    const payload: IdentifyPayloadData = {
      properties: {
        $browser: "space",
        $device: "space",
        $os: Deno.build.os,
      },
      token: this.token,
      ...data,
    };
    this.sendPayload(GatewayOpcodes.Identify, payload);
  }

  /**
   * Update this shard's presence
   *
   *     Shard.presenceUpdate({
   *       activities: [
   *         {
   *           name: "Bloons TD 6",
   *           type: ActivityTypes.Game,
   *         },
   *       ],
   *       afk: false,
   *       since: null,
   *       status: StatusTypes.Online,
   *     });
   */
  presenceUpdate(data: PresenceUpdatePayloadData) {
    this.sendPayload(GatewayOpcodes.PresenceUpdate, data);
  }

  /**
   * Update this shard's voice state for a guild
   *
   *     Shard.voiceStateUpdate({
   *       channel_id: "836841935976923146",
   *       guild_id: "812458966357377067",
   *       self_deaf: false,
   *       self_mute: false,
   *     });
   */
  voiceStateUpdate(data: VoiceStateUpdatePayloadData) {
    this.sendPayload(GatewayOpcodes.VoiceStateUpdate, data);
  }

  /** Resume the current gateway session */
  resume() {
    if (!this.#sessionId) {
      throw new Error("Unable to resume.");
    }
    const payload: ResumePayloadData = {
      seq: this.#seq,
      "session_id": hexEncode(utf8Encode(this.#sessionId)),
      token: this.token,
    };
    this.sendPayload(GatewayOpcodes.Resume, payload);
  }

  /**
   * Request a guild's members
   *
   *     const members = await Shard.requestGuildMembers({
   *       guild_id: "812458966357377067",
   *       limit: 0,
   *     });
   */
  requestGuildMembers(
    data: GuildRequestMembersPayloadData,
    delay?: number,
  ): Promise<DispatchPayloadGuildMembersChunkData[][]> {
    const payload: GuildRequestMembersPayloadData = {
      nonce: data.nonce ?? `${Date.now()}`,
      query: "",
      ...data,
    };
    this.sendPayload(GatewayOpcodes.RequestGuildMembers, payload);
    return this.receive(GatewayEvents.GuildMembersChunk, {
      delay,
      filter: (chunk) => chunk.nonce === payload.nonce,
      terminate: (chunk) => chunk.chunk_index + 1 === chunk.chunk_count,
    });
  }
}
