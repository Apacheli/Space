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
  s: number | null;
  /** the event name for this payload */
  t: string | null;
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

/** https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events */
export enum GatewayEvents {
  /** defines the heartbeat interval */
  Hello = "HELLO",
  /** contains the initial state information */
  Ready = "READY",
  /** response to [Resume](https://discord.com/developers/docs/topics/gateway#resume) */
  Resumed = "RESUMED",
  /** new [Slash Command](https://discord.com/developers/docs/interactions/slash-commands) was created */
  ApplicationCommandCreate = "APPLICATION_COMMAND_CREATE",
  /** [Slash Command](https://discord.com/developers/docs/interactions/slash-commands) was updated */
  ApplicationCommandUpdate = "APPLICATION_COMMAND_UPDATE",
  /** [Slash Command](https://discord.com/developers/docs/interactions/slash-commands) was deleted */
  ApplicationCommandDelete = "APPLICATION_COMMAND_DELETE",
  /** new guild channel created */
  ChannelCreate = "CHANNEL_CREATE",
  /** channel was updated */
  ChannelUpdate = "CHANNEL_UPDATE",
  /** channel was deleted */
  ChannelDelete = "CHANNEL_DELETE",
  /** message was pinned or unpinned */
  ChannelPinsUpdate = "CHANNEL_PINS_UPDATE",
  /** thread created, also sent when being added to a private thread */
  ThreadCreate = "THREAD_CREATE",
  /** thread was updated */
  ThreadUpdate = "THREAD_UPDATE",
  /** thread was deleted */
  ThreadDelete = "THREAD_DELETE",
  /** sent when gaining access to a channel, contains all active threads in that channel */
  ThreadListSync = "THREAD_LIST_SYNC",
  /** [thread member](https://discord.com/developers/docs/resources/channel#thread-member-object) for the current user was updated */
  ThreadMemberUpdate = "THREAD_MEMBER_UPDATE",
  /** some user(s) were added to or removed from a thread */
  ThreadMembersUpdate = "THREAD_MEMBERS_UPDATE",
  /** lazy-load for unavailable guild, guild became available, or user joined a new guild */
  GuildCreate = "GUILD_CREATE",
  /** guild was updated */
  GuildUpdate = "GUILD_UPDATE",
  /** guild became unavailable, or user left/was removed from a guild */
  GuildDelete = "GUILD_DELETE",
  /** user was banned from a guild */
  GuildBanAdd = "GUILD_BAN_ADD",
  /** user was unbanned from a guild */
  GuildBanRemove = "GUILD_BAN_REMOVE",
  /** guild emojis were updated */
  GuildEmojisUpdate = "GUILD_EMOJIS_UPDATE",
  /** guild integration was updated */
  GuildIntegrationsUpdate = "GUILD_INTEGRATIONS_UPDATE",
  /** new user joined a guild */
  GuildMemberAdd = "GUILD_MEMBER_ADD",
  /** user was removed from a guild */
  GuildMemberRemove = "GUILD_MEMBER_REMOVE",
  /** guild member was updated */
  GuildMemberUpdate = "GUILD_MEMBER_UPDATE",
  /** response to [Request Guild Members](https://discord.com/developers/docs/topics/gateway#request-guild-members) */
  GuildMembersChunk = "GUILD_MEMBERS_CHUNK",
  /** guild role was created */
  GuildRoleCreate = "GUILD_ROLE_CREATE",
  /** guild role was updated */
  GuildRoleUpdate = "GUILD_ROLE_UPDATE",
  /** guild role was deleted */
  GuildRoleDelete = "GUILD_ROLE_DELETE",
  /** guild integration was created */
  IntegrationCreate = "INTEGRATION_CREATE",
  /** guild integration was updated */
  IntegrationUpdate = "INTEGRATION_UPDATE",
  /** guild integration was deleted */
  IntegrationDelete = "INTEGRATION_DELETE",
  /** user used an interaction, such as a [Slash Command](https://discord.com/developers/docs/interactions/slash-commands) */
  InteractionCreate = "INTERACTION_CREATE",
  /** invite to a channel was created */
  InviteCreate = "INVITE_CREATE",
  /** invite to a channel was deleted */
  InviteDelete = "INVITE_DELETE",
  /** message was created */
  MessageCreate = "MESSAGE_CREATE",
  /** message was edited */
  MessageUpdate = "MESSAGE_UPDATE",
  /** message was deleted */
  MessageDelete = "MESSAGE_DELETE",
  /** multiple messages were deleted at once */
  MessageDeleteBulk = "MESSAGE_DELETE_BULK",
  /** user reacted to a message */
  MessageReactionAdd = "MESSAGE_REACTION_ADD",
  /** user removed a reaction from a message */
  MessageReactionRemove = "MESSAGE_REACTION_REMOVE",
  /** all reactions were explicitly removed from a message */
  MessageReactionRemoveAll = "MESSAGE_REACTION_REMOVE_ALL",
  /** all reactions for a given emoji were explicitly removed from a message */
  MessageReactionRemoveEmoji = "MESSAGE_REACTION_REMOVE_EMOJI",
  /** user was updated */
  PresenceUpdate = "PRESENCE_UPDATE",
  /** user started typing in a channel */
  TypingStart = "TYPING_START",
  /** properties about the user changed */
  UserUpdate = "USER_UPDATE",
  /** someone joined, left, or moved a voice channel */
  VoiceStateUpdate = "VOICE_STATE_UPDATE",
  /** guild's voice server was updated */
  VoiceServerUpdate = "VOICE_SERVER_UPDATE",
  /** guild channel webhook was created, update, or deleted */
  WebhooksUpdate = "WEBHOOKS_UPDATE",
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

export interface DispatchPayload<t extends string, d>
  extends GatewayPayload<GatewayOpcodes.Dispatch, d> {
  t: t;
}
