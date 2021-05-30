import {
  GatewayCloseEventCodes,
  GatewayEvents,
  GatewayOpcodes,
  GatewayPayload,
  GuildRequestMembersPayloadData,
  PresenceUpdatePayloadData,
  ResumePayloadData,
  VoiceStateUpdatePayloadData,
} from "../../types/mod.ts";
import type { Snowflake } from "../../types/mod.ts";
import { DiscordSocket, PartialKeys } from "../../util/mod.ts";

/** Shard states */
export enum ShardStates {
  /** No active socket connections */
  Inactive,
}

/** Class representing a shard */
export class Shard extends DiscordSocket {
  /** Heartbeat ACK latency. Latency is `0` if this shard has not received a heartbeat ACK payload */
  latency = 0;
  /** The epoch time at when this shard became ready, or `0` if the shard is not ready */
  readyAt = 0;
  /** The state this shard is currently in */
  state = ShardStates.Inactive;

  #heartbeatInterval?: number;
  #lastHeartbeatSent = 0;
  #seq = 0;
  #sessionID?: string;
  #unavailableGuilds = new Set<Snowflake>();
  #token;

  constructor(token: string) {
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

    if (soft) {
      this.latency = 0;
      this.readyAt = 0;
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

    this.dispatch("close", resumable, reconnectable, event);
  }

  protected onSocketError(event: Event) {
    this.dispatch("error", event);
  }

  protected onSocketMessage(event: MessageEvent) {
    const payload: GatewayPayload = this.decodePayload(event.data);

    switch (payload.op) {
      case GatewayOpcodes.Dispatch: {
        this.#seq = payload.s;

        switch (payload.t) {
        }
        break;
      }
    }
  }

  #heartbeat = () => {
    this.#lastHeartbeatSent = Date.now();
    this.sendPayload(GatewayOpcodes.Heartbeat, this.#seq);
  };

  #identify = () => {
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

  /**
   * Request members from a guild
   */
  async requestGuildMembers(
    data: PartialKeys<GuildRequestMembersPayloadData, "limit">,
  ) {
    const nonce = data.nonce ?? `${Date.now()}`.padStart(16, "0");
    const payload: GuildRequestMembersPayloadData = {
      limit: 0,
      nonce,
      query: "",
      ...data,
    };
    this.sendPayload(GatewayOpcodes.RequestGuildMembers, payload);
    return this.receive(GatewayEvents.GuildMembersChunk, {
      terminator: (d) => d.chunk_count + 1 === d.chunk_index,
    });
  }
}
