import type { Snowflake } from "../reference";
import type { GatewayOpcodes } from "./opcodes_and_status_codes.ts";

/** https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions */
export type GatewayVersions = 8 | 9;

/** https://discord.com/developers/docs/topics/gateway#payloads */
export interface GatewayPayload {
  /** [opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-opcodes) for the payload */
  op: GatewayOpcodes;
  /** event data */
  d: unknown;
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
export interface IdentifyPayloadData {
  token: `Bot ${string}`;
  properties: IdentifyConnectionProperties;
  compress?: boolean;
  large_threshold?: number;
  shard?: [shard_id: number, num_shards: number];
  presence?: PresenceUpdate;
  intents: number;
}

/** https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties */
export interface IdentifyConnectionProperties {
  $os: string;
  $browser: string;
  $device: string;
}

/** https://discord.com/developers/docs/topics/gateway#resume */
export interface ResumePayloadData {
  token: `Bot ${string}`;
  session_id: string;
  seq: number;
}

/** https://discord.com/developers/docs/topics/gateway#request-guild-members */
export interface GuildRequestMembersPayloadData {
  guild_id: Snowflake;
  query?: string;
  limit: number;
  presences?: boolean;
  user_ids?: Snowflake | Snowflake[];
  nonce?: string;
}

/** https://discord.com/developers/docs/topics/gateway#update-voice-state */
export interface VoiceStateUpdatePayloadData {
  guild_id: Snowflake;
  channel_id: Snowflake | null;
  self_mute: boolean;
  self_deaf: boolean;
}

// deno-lint-ignore no-empty-interface
export interface PresenceUpdatePayloadData {
  since: number | null;
  activities: Activity[];
  status: StatusTypes;
  afk: boolean;
}

export enum StatusTypes {
  Online = "online",
  DoNotDisturb = "dnd",
  Idle = "idle",
  Invisible = "invisible",
  Offline = "offline",
}

export interface HelloPayloadData {
  heartbeat_interval: number;
}
