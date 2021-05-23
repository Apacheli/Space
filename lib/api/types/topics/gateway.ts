// deno-lint-ignore-file camelcase

// https://discord.com/developers/docs/topics/gateway

import type { Snowflake } from "../reference";
import type { GatewayOpcodes } from "./opcodes_and_status_codes.ts";

/** https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions */
export type GatewayVersions = 8 | 9;

/** https://discord.com/developers/docs/topics/gateway#payloads */
export interface GatewayPayload<op extends GatewayOpcodes, d extends unknown> {
  /** [opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-opcodes) for the payload */
  op: op;
  /** event data */
  d: d;
  /** sequence number, used for resuming sessions and heartbeats */
  s?: number;
  /** the event name for this payload */
  t?: string;
}

/** https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params */
export interface GatewayURLQuery {
  /** Gateway Version to use */
  v: GatewayVersions;
  /** The encoding of received gateway packets */
  encoding: "etf" | "json";
  /** The (optional) compression of gateway packets */
  compress?: "zlib-stream";
}

/** https://discord.com/developers/docs/topics/gateway#identify */
export type IdentifyPayload = GatewayPayload<
  GatewayOpcodes.Identify,
  IdentifyPayloadData
>;

/** https://discord.com/developers/docs/topics/gateway#identify-identify-structure */
export interface IdentifyPayloadData {
  /** authentication token */
  token: `Bot ${string}`;
  /** [connection properties](https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties) */
  properties: IdentifyConnectionProperties;
  /** whether this connection supports compression of packets */
  compress?: boolean;
  /** value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list */
  large_threshold?: number;
  /** used for [Guild Sharding](https://discord.com/developers/docs/topics/gateway#sharding) */
  shard?: [shard_id: number, num_shards: number];
  /** presence structure for initial presence information */
  presence?: PresenceUpdatePayloadData;
  /** the [Gateway Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents) you wish to receive */
  intents: number;
}

/** https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties */
export interface IdentifyConnectionProperties {
  /** your operating system */
  $os: string;
  /** your library name */
  $browser: string;
  /** your library name */
  $device: string;
}

/** https://discord.com/developers/docs/topics/gateway#resume */
export type ResumePayload = GatewayPayload<
  GatewayOpcodes.Resume,
  ResumePayloadData
>;

/** https://discord.com/developers/docs/topics/gateway#resume-resume-structure */
export interface ResumePayloadData {
  /** session token */
  token: `Bot ${string}`;
  /** session id */
  session_id: string;
  /** last sequence number received */
  seq: number;
}

/** https://discord.com/developers/docs/topics/gateway#request-guild-members */
export type GuildRequestMembersPayload = GatewayPayload<
  GatewayOpcodes.RequestGuildMembers,
  GuildRequestMembersPayloadData
>;

/** https://discord.com/developers/docs/topics/gateway#request-guild-members-guild-request-members-structure */
export interface GuildRequestMembersPayloadData {
  /** id of the guild to get members for */
  guild_id: Snowflake;
  /** string that username starts with, or an empty string to return all members */
  query?: string;
  /** maximum number of members to send matching the `query`; a limit of `0` can be used with an empty string `query` to return all members */
  limit: number;
  /** used to specify if we want the presences of the matched members */
  presences?: boolean;
  /** used to specify which users you wish to fetch */
  user_ids?: Snowflake | Snowflake[];
  /** nonce to identify the [Guild Members Chunk](https://discord.com/developers/docs/topics/gateway#guild-members-chunk) response */
  nonce?: string;
}

/** https://discord.com/developers/docs/topics/gateway#update-voice-state */
export type VoiceStateUpdatePayload = GatewayPayload<
  GatewayOpcodes.VoiceStateUpdate,
  VoiceStateUpdatePayloadData
>;

/** https://discord.com/developers/docs/topics/gateway#update-voice-state-gateway-voice-state-update-structure */
export interface VoiceStateUpdatePayloadData {
  /** id of the guild */
  guild_id: Snowflake;
  /** id of the voice channel client wants to join (null if disconnecting) */
  channel_id: Snowflake | null;
  /** is the client muted */
  self_mute: boolean;
  /** 	is the client deafened */
  self_deaf: boolean;
}

/** https://discord.com/developers/docs/topics/gateway#update-presence */
export type PresenceUpdatePayload = GatewayPayload<
  GatewayOpcodes.PresenceUpdate,
  PresenceUpdatePayloadData
>;

/** https://discord.com/developers/docs/topics/gateway#update-presence-gateway-presence-update-structure */
export interface PresenceUpdatePayloadData {
  /** unix time (in milliseconds) of when the client went idle, or null if the client is not idle */
  since: number | null;
  /** the user's activities */
  activities: Activity[];
  /** the user's new status */
  status: StatusTypes;
  /** whether or not the client is afk */
  afk: boolean;
}

/** https://discord.com/developers/docs/topics/gateway#update-presence-status-types */
export enum StatusTypes {
  /** Online */
  Online = "online",
  /** Do Not Disturb */
  DoNotDisturb = "dnd",
  /** AFK */
  Idle = "idle",
  /** Invisible and shown as offline */
  Invisible = "invisible",
  /** Offline */
  Offline = "offline",
}

/** https://discord.com/developers/docs/topics/gateway#hello */
export type HelloPayload = GatewayPayload<
  GatewayOpcodes.Hello,
  HelloPayloadData
>;

/** https://discord.com/developers/docs/topics/gateway#hello-hello-structure */
export interface HelloPayloadData {
  /** the interval (in milliseconds) the client should heartbeat with */
  heartbeat_interval: number;
}
