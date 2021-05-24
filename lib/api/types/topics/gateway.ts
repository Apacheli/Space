// deno-lint-ignore-file camelcase

// https://discord.com/developers/docs/topics/gateway

import type {
  ApplicationCommand,
  Interaction,
} from "../interactions/slash_commands.ts";
import type { Snowflake } from "../reference.ts";
import type { Application } from "../resources/application.ts";
import type { Channel, Message, ThreadMember } from "../resources/channel.ts";
import type { Emoji } from "../resources/emoji.ts";
import type {
  Guild,
  GuildMember,
  Integration,
  UnavailableGuild,
} from "../resources/guild.ts";
import type { Invite, InviteMetadata } from "../resources/invite.ts";
import type { User } from "../resources/user.ts";
import type { VoiceState } from "../resources/voice.ts";
import type { GatewayOpcodes } from "./opcodes_and_status_codes.ts.ts";
import type { Role } from "./permissions.ts";

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
  token: string;
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
  token: string;
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

/** https://discord.com/developers/docs/topics/gateway#ready */
export type DispatchPayloadReady = DispatchPayload<
  GatewayEvents.Ready,
  DispatchPayloadReadyData
>;

/** https://discord.com/developers/docs/topics/gateway#ready-ready-event-fields */
export interface DispatchPayloadReadyData {
  /** [gateway version](https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions) */
  v: GatewayVersions;
  /** information about the user including email */
  user: User;
  /** the guilds the user is in */
  guilds: UnavailableGuild[];
  /** used for resuming connections */
  session_id: string;
  /** the [shard information](https://discord.com/developers/docs/topics/gateway#sharding) associated with this session, if sent when identifying */
  shard?: [shard_id: number, num_shards: number];
  /** 	contains `id` and `flags` */
  application: Pick<Application, "id" | "flags">;
}

/** https://discord.com/developers/docs/topics/gateway#resumed */
export type DispatchPayloadResumed = DispatchPayload<
  GatewayEvents.Resumed,
  DispatchPayloadResumedData
>;

/** https://discord.com/developers/docs/topics/gateway#resumed */
export type DispatchPayloadResumedData = void;

/** https://discord.com/developers/docs/topics/gateway#commands */
export type DispatchPayloadApplicationCommandCreate = DispatchPayload<
  GatewayEvents.ApplicationCommandCreate,
  DispatchPayloadApplicationCommandCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#commands */
export interface DispatchPayloadApplicationCommandCreateData
  extends ApplicationCommand {
  guild_id?: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#application-command-update */
export type DispatchPayloadApplicationCommandUpdate = DispatchPayload<
  GatewayEvents.ApplicationCommandUpdate,
  DispatchPayloadApplicationCommandUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#application-command-update */
export type DispatchPayloadApplicationCommandUpdateData =
  DispatchPayloadApplicationCommandCreateData;

/** https://discord.com/developers/docs/topics/gateway#application-command-delete */
export type DispatchPayloadApplicationCommandDelete = DispatchPayload<
  GatewayEvents.ApplicationCommandDelete,
  DispatchPayloadApplicationCommandDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#application-command-delete */
export type DispatchPayloadApplicationCommandDeleteData =
  DispatchPayloadApplicationCommandCreateData;

/** https://discord.com/developers/docs/topics/gateway#channel-create */
export type DispatchPayloadChannelCreate = DispatchPayload<
  GatewayEvents.ChannelCreate,
  DispatchPayloadChannelCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#channel-create */
export type DispatchPayloadChannelCreateData = Channel;

/** https://discord.com/developers/docs/topics/gateway#channel-update */
export type DispatchPayloadChannelUpdate = DispatchPayload<
  GatewayEvents.ChannelUpdate,
  DispatchPayloadChannelUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#channel-update */
export type DispatchPayloadChannelUpdateData = Channel;

/** https://discord.com/developers/docs/topics/gateway#channel-delete */
export type DispatchPayloadChannelDelete = DispatchPayload<
  GatewayEvents.ChannelDelete,
  DispatchPayloadChannelDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#channel-delete */
export type DispatchPayloadChannelDeleteData = Channel;

/** https://discord.com/developers/docs/topics/gateway#channel-pins-update */
export type DispatchPayloadChannelPinsUpdate = DispatchPayload<
  GatewayEvents.ChannelPinsUpdate,
  DispatchPayloadChannelPinsUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#channel-pins-update-channel-pins-update-event-fields */
export interface DispatchPayloadChannelPinsUpdateData {
  /** the id of the guild */
  guild_id?: Snowflake;
  /** the id of the channel */
  channel_id: Snowflake;
  /** the time at which the most recent pinned message was pinned */
  last_pin_timestamp?: string | null;
}

/** https://discord.com/developers/docs/topics/gateway#thread-create */
export type DispatchPayloadThreadCreate = DispatchPayload<
  GatewayEvents.ThreadCreate,
  DispatchPayloadThreadCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#thread-create */
export type DispatchPayloadThreadCreateData = Channel;

/** https://discord.com/developers/docs/topics/gateway#thread-update */
export type DispatchPayloadThreadUpdate = DispatchPayload<
  GatewayEvents.ThreadUpdate,
  DispatchPayloadThreadUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#thread-update */
export type DispatchPayloadThreadUpdateData = Channel;

/** https://discord.com/developers/docs/topics/gateway#thread-delete */
export type DispatchPayloadThreadDelete = DispatchPayload<
  GatewayEvents.ThreadDelete,
  DispatchPayloadThreadDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#thread-delete */
export type DispatchPayloadThreadDeleteData = Pick<
  Channel,
  "id" | "guild_id" | "parent_id" | "type"
>;

/** https://discord.com/developers/docs/topics/gateway#thread-list-sync */
export type DispatchPayloadThreadListSync = DispatchPayload<
  GatewayEvents.ThreadListSync,
  DispatchPayloadThreadListSyncData
>;

/** https://discord.com/developers/docs/topics/gateway#thread-list-sync-thread-list-sync-event-fields */
export interface DispatchPayloadThreadListSyncData {
  /** the id of the guild */
  guild_id: Snowflake;
  /** the parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data. */
  channel_ids?: Snowflake[];
  /** all active threads in the given channels that the current user can access */
  threads: Channel[];
  /** all thread member objects from the synced threads for the current user, indicating which threads the current user has been added to */
  members: ThreadMember[];
}

/** https://discord.com/developers/docs/topics/gateway#thread-member-update */
export type DispatchPayloadThreadMemberUpdate = DispatchPayload<
  GatewayEvents.ThreadMemberUpdate,
  DispatchPayloadThreadMemberUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#thread-member-update */
export type DispatchPayloadThreadMemberUpdateData = ThreadMember;

/** https://discord.com/developers/docs/topics/gateway#thread-members-update */
export type DispatchPayloadThreadMembersUpdate = DispatchPayload<
  GatewayEvents.ThreadMembersUpdate,
  DispatchPayloadThreadMembersUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#thread-members-update-thread-members-update-event-fields */
export interface DispatchPayloadThreadMembersUpdateData {
  /** the id of the thread */
  id: Snowflake;
  /** the id of the guild */
  guild_id: Snowflake;
  /** the approximate number of members in the thread, capped at 50 */
  member_count: number;
  /** the users who were added to the thread */
  added_members?: ThreadMember[];
  /** the id of the users who were removed from the thread */
  removed_member_ids?: Snowflake[];
}

/** https://discord.com/developers/docs/topics/gateway#guild-create */
export type DispatchPayloadGuildCreate = DispatchPayload<
  GatewayEvents.GuildCreate,
  DispatchPayloadGuildCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-create */
export type DispatchPayloadGuildCreateData = Guild;

/** https://discord.com/developers/docs/topics/gateway#guild-update */
export type DispatchPayloadGuildUpdate = DispatchPayload<
  GatewayEvents.GuildUpdate,
  DispatchPayloadGuildUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-update */
export type DispatchPayloadGuildUpdateData = Guild;

/** https://discord.com/developers/docs/topics/gateway#guild-delete */
export type DispatchPayloadGuildDelete = DispatchPayload<
  GatewayEvents.GuildDelete,
  DispatchPayloadGuildDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-delete */
export type DispatchPayloadGuildDeleteData = UnavailableGuild;

/** https://discord.com/developers/docs/topics/gateway#guild-ban-add */
export type DispatchPayloadGuildBanAdd = DispatchPayload<
  GatewayEvents.GuildBanAdd,
  DispatchPayloadGuildBanAddData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-ban-add-guild-ban-add-event-fields */
export interface DispatchPayloadGuildBanAddData {
  /** id of the guild */
  guild_id: Snowflake;
  /** the banned user */
  user: User;
}

/** https://discord.com/developers/docs/topics/gateway#guild-ban-remove */
export type DispatchPayloadGuildBanRemove = DispatchPayload<
  GatewayEvents.GuildBanRemove,
  DispatchPayloadGuildBanRemoveData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-ban-remove-guild-ban-remove-event-fields */
export interface DispatchPayloadGuildBanRemoveData {
  /** id of the guild */
  guild_id: Snowflake;
  /** the unbanned user */
  user: User;
}

/** https://discord.com/developers/docs/topics/gateway#guild-emojis-update */
export type DispatchPayloadGuildEmojisUpdate = DispatchPayload<
  GatewayEvents.GuildEmojisUpdate,
  DispatchPayloadGuildEmojisUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-emojis-update-guild-emojis-update-event-fields */
export interface DispatchPayloadGuildEmojisUpdateData {
  /** id of the guild */
  guild_id: Snowflake;
  /** array of [emojis](https://discord.com/developers/docs/resources/emoji#emoji-object) */
  emojis: Emoji[];
}

/** https://discord.com/developers/docs/topics/gateway#guild-integrations-update */
export type DispatchPayloadGuildIntegrationsUpdate = DispatchPayload<
  GatewayEvents.GuildIntegrationsUpdate,
  DispatchPayloadGuildIntegrationsUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-integrations-update-guild-integrations-update-event-fields */
export interface DispatchPayloadGuildIntegrationsUpdateData {
  /** id of the guild whose integrations were updated */
  guild_id: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#guild-member-add */
export type DispatchPayloadGuildMemberAdd = DispatchPayload<
  GatewayEvents.GuildMemberAdd,
  DispatchPayloadGuildMemberAddData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-member-add-guild-member-add-extra-fields */
export interface DispatchPayloadGuildMemberAddData extends GuildMember {
  /** id of the guild */
  guild_id: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#guild-member-remove */
export type DispatchPayloadGuildMemberRemove = DispatchPayload<
  GatewayEvents.GuildMemberRemove,
  DispatchPayloadGuildMemberRemoveData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-member-remove-guild-member-remove-event-fields */
export interface DispatchPayloadGuildMemberRemoveData {
  /** the id of the guild */
  guild_id: Snowflake;
  /** the user who was removed */
  user: User;
}

/** https://discord.com/developers/docs/topics/gateway#guild-member-update */
export type DispatchPayloadGuildMemberUpdate = DispatchPayload<
  GatewayEvents.GuildMemberUpdate,
  DispatchPayloadGuildMemberUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-member-update-guild-member-update-event-fields */
export interface DispatchPayloadGuildMemberUpdateData
  extends Omit<GuildMember, "permissions"> {
  /** the id of the guild */
  guild_id: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#guild-members-chunk */
export type DispatchPayloadGuildMembersChunk = DispatchPayload<
  GatewayEvents.GuildMembersChunk,
  DispatchPayloadGuildMembersChunkData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-members-chunk-guild-members-chunk-event-fields */
export interface DispatchPayloadGuildMembersChunkData {
  /** the id of the guild */
  guild_id: Snowflake;
  /** set of guild members */
  members: GuildMember[];
  /** the chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count) */
  chunk_index: number;
  /** the total number of expected chunks for this response */
  chunk_count: number;
  /** if passing an invalid id to `REQUEST_GUILD_MEMBERS`, it will be returned here */
  not_found: Snowflake[];
  /** if passing true to `REQUEST_GUILD_MEMBERS`, presences of the returned members will be here */
  presences?: DispatchPayloadPresenceUpdateData[];
  /** the nonce used in the [Guild Members Request](https://discord.com/developers/docs/topics/gateway#request-guild-members) */
  nonce?: string;
}

/** https://discord.com/developers/docs/topics/gateway#guild-role-create */
export type DispatchPayloadGuildRoleCreate = DispatchPayload<
  GatewayEvents.GuildRoleCreate,
  DispatchPayloadGuildRoleCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-role-create-guild-role-create-event-fields */
export interface DispatchPayloadGuildRoleCreateData {
  /** the id of the guild */
  guild_id: Snowflake;
  /** the role created */
  role: Role;
}

/** https://discord.com/developers/docs/topics/gateway#guild-role-update */
export type DispatchPayloadGuildRoleUpdate = DispatchPayload<
  GatewayEvents.GuildRoleUpdate,
  DispatchPayloadGuildRoleUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-role-update-guild-role-update-event-fields */
export interface DispatchPayloadGuildRoleUpdateData {
  /** the id of the guild */
  guild_id: Snowflake;
  /** the role updated */
  role: Role;
}

/** https://discord.com/developers/docs/topics/gateway#guild-role-delete */
export type DispatchPayloadGuildRoleDelete = DispatchPayload<
  GatewayEvents.GuildRoleDelete,
  DispatchPayloadGuildRoleDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#guild-role-delete-guild-role-delete-event-fields */
export interface DispatchPayloadGuildRoleDeleteData {
  /** id of the guild */
  guild_id: Snowflake;
  /** id of the role */
  role_id: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#integration-create */
export type DispatchPayloadIntegrationCreate = DispatchPayload<
  GatewayEvents.IntegrationCreate,
  DispatchPayloadIntegrationCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#integration-create-integration-create-event-additional-fields */
export interface DispatchPayloadIntegrationCreateData extends Integration {
  /** id of the guild */
  guild_id: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#integration-update */
export type DispatchPayloadIntegrationUpdate = DispatchPayload<
  GatewayEvents.IntegrationUpdate,
  DispatchPayloadIntegrationUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#integration-update-integration-update-event-additional-fields */
export type DispatchPayloadIntegrationUpdateData =
  DispatchPayloadIntegrationCreateData;

/** https://discord.com/developers/docs/topics/gateway#integration-delete */
export type DispatchPayloadIntegrationDelete = DispatchPayload<
  GatewayEvents.IntegrationDelete,
  DispatchPayloadIntegrationDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#integration-delete-integration-delete-event-fields */
export interface DispatchPayloadIntegrationDeleteData {
  /** integration id */
  id: Snowflake;
  /** id of the guild */
  guild_id: Snowflake;
  /** id of the bot/OAuth2 application for this discord integration */
  application_id?: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#interaction-create */
export type DispatchPayloadInteractionCreate = DispatchPayload<
  GatewayEvents.InteractionCreate,
  DispatchPayloadInteractionCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#interaction-create */
export type DispatchPayloadInteractionCreateData = Interaction;

/** https://discord.com/developers/docs/topics/gateway#invite-create */
export type DispatchPayloadInviteCreate = DispatchPayload<
  GatewayEvents.InviteCreate,
  DispatchPayloadInviteCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#invite-create-invite-create-event-fields */
export interface DispatchPayloadInviteCreateData
  extends Omit<Invite, "channel" | "guild">, InviteMetadata {
  /** the channel the invite is for */
  channel_id: Snowflake;
  /** the guild of the invite */
  guild_id?: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#invite-delete */
export type DispatchPayloadInviteDelete = DispatchPayload<
  GatewayEvents.InviteDelete,
  DispatchPayloadInviteDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#invite-delete-invite-delete-event-fields */
export type DispatchPayloadInviteDeleteData = Pick<
  DispatchPayloadInviteCreateData,
  "channel_id" | "guild_id" | "code"
>;

/** https://discord.com/developers/docs/topics/gateway#message-create */
export type DispatchPayloadMessageCreate = DispatchPayload<
  GatewayEvents.MessageCreate,
  DispatchPayloadMessageCreateData
>;

/** https://discord.com/developers/docs/topics/gateway#message-create */
export type DispatchPayloadMessageCreateData = Message;

/** https://discord.com/developers/docs/topics/gateway#message-update */
export type DispatchPayloadMessageUpdate = DispatchPayload<
  GatewayEvents.MessageUpdate,
  DispatchPayloadMessageUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#message-update */
export type DispatchPayloadMessageUpdateData = Message;

/** https://discord.com/developers/docs/topics/gateway#message-delete */
export type DispatchPayloadMessageDelete = DispatchPayload<
  GatewayEvents.MessageDelete,
  DispatchPayloadMessageDeleteData
>;

/** https://discord.com/developers/docs/topics/gateway#message-delete-message-delete-event-fields */
export interface DispatchPayloadMessageDeleteData {
  /** the id of the message */
  id: Snowflake;
  /** the id of the channel */
  channel_id: Snowflake;
  /** the id of the guild */
  guild_id?: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#message-delete-bulk */
export type DispatchPayloadMessageDeleteBulk = DispatchPayload<
  GatewayEvents.MessageDeleteBulk,
  DispatchPayloadMessageDeleteBulkData
>;

/** https://discord.com/developers/docs/topics/gateway#message-delete-bulk-message-delete-bulk-event-fields */
export interface DispatchPayloadMessageDeleteBulkData {
  /** the ids of the messages */
  ids: Snowflake[];
  /** the id of the channel */
  channel_id: Snowflake;
  /** the id of the guild */
  guild_id?: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-add */
export type DispatchPayloadMessageReactionAdd = DispatchPayload<
  GatewayEvents.MessageReactionAdd,
  DispatchPayloadMessageReactionAddData
>;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-add-message-reaction-add-event-fields */
export interface DispatchPayloadMessageReactionAddData
  extends DispatchPayloadMessageReactionRemoveData {
  /** the member who reacted if this happened in a guild */
  member?: GuildMember;
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove */
export type DispatchPayloadMessageReactionRemove = DispatchPayload<
  GatewayEvents.MessageReactionRemove,
  DispatchPayloadMessageReactionRemoveData
>;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-message-reaction-remove-event-fields */
export interface DispatchPayloadMessageReactionRemoveData
  extends DispatchPayloadMessageReactionRemoveAllData {
  /** the id of the user */
  user_id: Snowflake;
  /** the emoji used to react - [example](https://discord.com/developers/docs/resources/emoji#emoji-object-gateway-reaction-standard-emoji-example) */
  emoji: Partial<Emoji>;
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all */
export type DispatchPayloadMessageReactionRemoveAll = DispatchPayload<
  GatewayEvents.MessageReactionRemoveAll,
  DispatchPayloadMessageReactionRemoveAllData
>;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all-message-reaction-remove-all-event-fields */
export interface DispatchPayloadMessageReactionRemoveAllData {
  /** the id of the channel */
  channel_id: Snowflake;
  /** the id of the message */
  message_id: Snowflake;
  /** the id of the guild */
  guild_id?: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji */
export type DispatchPayloadMessageReactionRemoveEmoji = DispatchPayload<
  GatewayEvents.MessageReactionRemoveEmoji,
  DispatchPayloadMessageReactionRemoveEmojiData
>;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji-message-reaction-remove-emoji */
export interface DispatchPayloadMessageReactionRemoveEmojiData
  extends DispatchPayloadMessageReactionRemoveAllData {
  /** the emoji that was removed */
  emoji: Partial<Emoji>;
}

/** https://discord.com/developers/docs/topics/gateway#presence-update */
export type DispatchPayloadPresenceUpdate = DispatchPayload<
  GatewayEvents.PresenceUpdate,
  DispatchPayloadPresenceUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields */
export interface DispatchPayloadPresenceUpdateData
  extends Omit<PresenceUpdatePayloadData, "afk"> {
  /** the user presence is being updated for */
  user: User;
  /** user's platform-dependent status */
  client_status: ClientStatus;
}

export interface ClientStatus {
  /** the user's status set for an active desktop (Windows, Linux, Mac) application session */
  desktop?: string;
  /** the user's status set for an active mobile (iOS, Android) application session */
  mobile?: string;
  /** the user's status set for an active web (browser, bot account) application session */
  web?: string;
}

/** https://discord.com/developers/docs/topics/gateway#activity-object */
export interface Activity {
  /** the activity's name */
  name: string;
  /** [activity type](https://discord.com/developers/docs/topics/gateway#activity-object-activity-types) */
  type: ActivityTypes;
  /** 	stream url, is validated when type is 1 */
  url?: string | null;
  /** unix timestamp of when the activity was added to the user's session */
  created_at: number;
  /** unix timestamps for start and/or end of the game */
  timestamps?: ActivityTimestamps;
  /** application id for the game */
  application_id?: Snowflake;
  /** what the player is currently doing */
  details?: string | null;
  /** the user's current party status */
  state?: string | null;
  /** the emoji used for a custom status */
  emoji?: ActivityEmoji | null;
  /** information for the current party of the player */
  party?: ActivityParty;
  /** images for the presence and their hover texts */
  assets?: ActivityAssets;
  /** secrets for Rich Presence joining and spectating */
  secrets?: ActivitySecrets;
  /** whether or not the activity is an instanced game session */
  instance?: boolean;
  /** [activity flags](https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags) `OR`d together, describes what the payload includes */
  flags?: ActivityFlags;
  /** the custom buttons shown in the Rich Presence (max 2) */
  buttons?: ActivityButton[];
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-types */
export enum ActivityTypes {
  Game,
  Streaming,
  Listening,
  Watching,
  Custon,
  Competing,
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps */
export interface ActivityTimestamps {
  /** unix time (in milliseconds) of when the activity started */
  start?: number;
  /** unix time (in milliseconds) of when the activity ends */
  end?: number;
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji */
export type ActivityEmoji = Pick<Emoji, "name" | "id" | "animated">;

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-party */
export interface ActivityParty {
  /** the id of the party */
  id?: string;
  /** used to show the party's current and maximum size */
  size?: [current_size: number, max_size: number];
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets */
export interface ActivityAssets {
  /** the id for a large asset of the activity, usually a snowflake */
  large_image?: string;
  /** text displayed when hovering over the large image of the activity */
  large_text?: string;
  /** the id for a small asset of the activity, usually a snowflake */
  small_image?: string;
  /** text displayed when hovering over the small image of the activity */
  small_text?: string;
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets */
export interface ActivitySecrets {
  /** the secret for joining a party */
  join?: string;
  /** the secret for spectating a game */
  spectate?: string;
  /** the secret for a specific instanced match */
  match?: string;
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags */
export enum ActivityFlags {
  Instance = 1 << 0,
  Join = 1 << 1,
  Spectate = 1 << 2,
  JoinRequest = 1 << 3,
  Sync = 1 << 4,
  Play = 1 << 5,
}

/** https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons */
export interface ActivityButton {
  /** the text shown on the button (1-32 characters) */
  label: string;
  /** the url opened when clicking the button (1-512 characters) */
  url: string;
}

/** https://discord.com/developers/docs/topics/gateway#typing-start */
export type DispatchPayloadTypingStart = DispatchPayload<
  GatewayEvents.TypingStart,
  DispatchPayloadTypingStartData
>;

/** https://discord.com/developers/docs/topics/gateway#typing-start-typing-start-event-fields */
export interface DispatchPayloadTypingStartData {
  /** id of the channel */
  channel_id: Snowflake;
  /** id of the guild */
  guild_id?: Snowflake;
  /** id of the user */
  user_id: Snowflake;
  /** unix time (in seconds) of when the user started typing */
  timestamp: number;
  /** the member who started typing if this happened in a guild */
  member?: GuildMember;
}

/** https://discord.com/developers/docs/topics/gateway#user-update */
export type DispatchPayloadUserUpdate = DispatchPayload<
  GatewayEvents.UserUpdate,
  DispatchPayloadUserUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#user-update */
export type DispatchPayloadUserUpdateData = User;

/** https://discord.com/developers/docs/topics/gateway#voice-state-update */
export type DispatchPayloadVoiceStateUpdate = DispatchPayload<
  GatewayEvents.VoiceStateUpdate,
  DispatchPayloadVoiceStateUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#voice-state-update */
export type DispatchPayloadVoiceStateUpdateData = VoiceState;

/** https://discord.com/developers/docs/topics/gateway#voice-server-update */
export type DispatchPayloadVoiceServerUpdate = DispatchPayload<
  GatewayEvents.VoiceServerUpdate,
  DispatchPayloadVoiceServerUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#voice-server-update-voice-server-update-event-fields */
export interface DispatchPayloadVoiceServerUpdateData {
  /** voice connection token */
  token: string;
  /** the guild this voice server update is for */
  guild_id: Snowflake;
  /** the voice server host */
  endpoint: string | null;
}

/** https://discord.com/developers/docs/topics/gateway#webhooks-update */
export type DispatchPayloadWebhooksUpdate = DispatchPayload<
  GatewayEvents.WebhooksUpdate,
  DispatchPayloadWebhooksUpdateData
>;

/** https://discord.com/developers/docs/topics/gateway#webhooks-update-webhook-update-event-fields */
export interface DispatchPayloadWebhooksUpdateData {
  /** id of the guild */
  guild_id: Snowflake;
  /** id of the channel */
  channel_id: Snowflake;
}

/** https://discord.com/developers/docs/topics/gateway#get-gateway */
export interface GetGatewayBody {
  /** The WSS URL that can be used for connecting to the gateway */
  url: string;
}

/** https://discord.com/developers/docs/topics/gateway#get-gateway-bot */
export interface GetGatewayBotBody {
  /** The recommended number of [shards](https://discord.com/developers/docs/topics/gateway#sharding) to use when connecting */
  shards: number;
  /** Information on the current session start limit */
  session_start_limit: SessionStartLimit;
}

/** https://discord.com/developers/docs/topics/gateway#session-start-limit-object */
export interface SessionStartLimit {
  /** The total number of session starts the current user is allowed */
  total: number;
  /** The remaining number of session starts the current user is allowed */
  remaining: number;
  /** The number of milliseconds after which the limit resets */
  reset_after: number;
  /** The number of identify requests allowed per 5 seconds */
  max_concurrency: number;
}
