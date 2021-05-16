// deno-lint-ignore-file camelcase

// https://discord.dev/resources/guild

import type { Snowflake } from "../reference.ts";
import type { PresenceUpdate } from "../topics/gateway.ts";
import type { Role } from "../topics/permissions.ts";
import type { Nullable } from "../util.ts";
import type { Application } from "./application.ts";
import type { Channel, ChannelTypes, Overwrite } from "./channel.ts";
import type { Emoji } from "./emoji.ts";
import type { Invite } from "./invite.ts";
import type { User } from "./user.ts";
import type { VoiceRegion, VoiceState } from "./voice.ts";

/** https://discord.dev/resources/guild#guild-object */
export interface Guild {
  /** guild id */
  id: Snowflake;
  /** guild name (2-100 characters, excluding trailing and leading whitespace) */
  name: string;
  /** [icon hash](https://discord.dev/reference#image-formatting) */
  icon: string | null;
  /** [icon hash](https://discord.dev/reference#image-formatting), returned when in the template object */
  icon_hash?: string | null;
  /** [splash hash](https://discord.dev/reference#image-formatting) */
  splash: string | null;
  /** [discovery splash hash](https://discord.dev/reference#image-formatting); only present for guilds with the "DISCOVERABLE" feature */
  discovery_splash: string | null;
  /** true if [the user](https://discord.dev/resources/user#get-current-user-guilds) is the owner of the guild */
  owner?: boolean;
  /** id of owner */
  owner_id: Snowflake;
  /** total permissions for [the user](https://discord.dev/resources/user#get-current-user-guilds) in the guild (excludes overrides) */
  permissions?: string;
  /** [voice region](https://discord.dev/resources/voice#voice-region-object) id for the guild */
  region: VoiceRegion;
  /** id of afk channel */
  afk_channel_id: Snowflake | null;
  /** afk timeout in seconds */
  afk_timeout: number;
  /** true if the server widget is enabled */
  widget_enabled?: boolean;
  /** the channel id that the widget will generate an invite to, or `null` if set to no invite */
  widget_channel_id?: Snowflake | null;
  /** [verification level](https://discord.dev/resources/guild#guild-object-verification-level) required for the guild */
  verification_level: VerificationLevel;
  /** default [message notifications level](https://discord.dev/resources/guild#guild-object-default-message-notification-level) */
  default_message_notifications: DefaultMessageNotificationLevel;
  /** [explicit content filter level](https://discord.dev/resources/guild#guild-object-explicit-content-filter-level) */
  explicit_content_filter: ExplicitContentFilterLevel;
  /** roles in the guild */
  roles: Role[];
  /** custom guild emojis */
  emojis: Emoji[];
  /** enabled guild features */
  features: GuildFeatures[];
  /** required [MFA level](https://discord.dev/resources/guild#guild-object-mfa-level) for the guild */
  mfa_level: MFALevel;
  /** application id of the guild creator if it is bot-created */
  application_id: Snowflake | null;
  /** the id of the channel where guild notices such as welcome messages and boost events are posted */
  system_channel_id: Snowflake | null;
  /** [system channel flags](https://discord.dev/resources/guild#guild-object-system-channel-flags) */
  system_channel_flags: SystemChannelFlags;
  /** the id of the channel where Community guilds can display rules and/or guidelines */
  rules_channel_id: Snowflake | null;
  /** when this guild was joined at */
  joined_at?: string;
  /** true if this is considered a large guild */
  large?: boolean;
  /** true if this guild is unavailable due to an outage */
  unavailable?: boolean;
  /** total number of members in this guild */
  member_count?: boolean;
  /** states of members currently in voice channels; lacks the `guild_id` key */
  voice_states?: Partial<VoiceState>[];
  /** users in the guild */
  members?: GuildMember[];
  /** channels in the guild */
  channels?: Channel[];
  /** all active threads in the guild that current user has permission to view */
  threads?: Channel[];
  /** presences of the members in the guild, will only include non-offline members if the size is greater than `large threshold` */
  presences?: PresenceUpdate[];
  /** the maximum number of presences for the guild (the default value, currently 25000, is in effect when `null` is returned) */
  max_presences?: number | null;
  /** the vanity url code for the guild */
  vanity_url_code: string | null;
  /** the description of a Community guild */
  description: string | null;
  /** [banner hash](https://discord.dev/reference#image-formatting) */
  banner: string | null;
  /** [premium tier](https://discord.dev/resources/guild#guild-object-premium-tier) (Server Boost level) */
  premium_tier: PremiumTier;
  /** the number of boosts this guild currently has */
  premium_subscription_count?: number;
  /** the preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US" */
  preferred_locale: string;
  /** the id of the channel where admins and moderators of Community guilds receive notices from Discord */
  public_updates_channel_id: Snowflake | null;
  /** the maximum amount of users in a video channel */
  max_video_channel_users?: number;
  /** approximate number of members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true` */
  approximate_member_count?: number;
  /** approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true` */
  approximate_presence_count?: number;
  /** the welcome screen of a Community guild, shown to new members, returned in an [Invite](https://discord.dev/resources/invite#invite-object)'s guild object */
  welcome_screen?: WelcomeScreen;
  /** true if this guild is [designated as NSFW](https://support.discord.com/hc/en-us/articles/1500005389362-NSFW-Server-Designation) */
  nsfw: boolean;
}

/** https://discord.dev/resources/guild#guild-object-default-message-notification-level */
export enum DefaultMessageNotificationLevel {
  /** members will receive notifications for all messages by default */
  AllMessages,
  /** members will receive notifications only for messages that @mention them by default */
  OnlyMentions,
}

/** https://discord.dev/resources/guild#guild-object-explicit-content-filter-level */
export enum ExplicitContentFilterLevel {
  /** media content will not be scanned */
  Disabled,
  /** media content sent by members without roles will be scanned */
  MembersWithoutRoles,
  /** media content sent by all members will be scanned */
  AllMembers,
}

/** https://discord.dev/resources/guild#guild-object-mfa-level */
export enum MFALevel {
  /** guild has no MFA/2FA requirement for moderation actions */
  None,
  /** guild has a 2FA requirement for moderation actions */
  Elevated,
}

/** https://discord.dev/resources/guild#guild-object-verification-level */
export enum VerificationLevel {
  /** unrestricted */
  None,
  /** must have verified email on account */
  Low,
  /** must be registered on Discord for longer than 5 minutes */
  Medium,
  /** must be a member of the server for longer than 10 minutes */
  High,
  /** must have a verified phone number */
  VeryHigh,
}

/** https://discord.dev/resources/guild#guild-object-premium-tier */
export enum PremiumTier {
  /** guild has not unlocked any Server Boost perks */
  None,
  /** guild has unlocked Server Boost level 1 perks */
  Tier1,
  /** guild has unlocked Server Boost level 2 perks */
  Tier2,
  /** guild has unlocked Server Boost level 3 perks */
  Tier3,
}

/** https://discord.dev/resources/guild#guild-object-system-channel-flags */
export enum SystemChannelFlags {
  /** Suppress member join notifications */
  SuppressJoinNotifications = 1 << 0,
  /** Suppress server boost notifications */
  SuppressPremiumSubscriptions = 1 << 1,
  /** Suppress server setup tips */
  SuppressGuildReminderNotifications = 1 << 2,
}

/** https://discord.dev/resources/guild#guild-object-guild-features */
export type GuildFeatures =
  | "ANIMATED_ICON"
  | "BANNER"
  | "COMMERCE"
  | "COMMUNITY"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITE_SPLASH"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "NEWS"
  | "PARTNERED"
  | "PREVIEW_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED";

/** https://discord.dev/resources/guild#unavailable-guild-object */
export interface UnavailableGuild {
  id: Snowflake;
  unavailable: boolean;
}

/** https://discord.dev/resources/guild#guild-preview-object */
export interface GuildPreview {
  /** guild id */
  id: Snowflake;
  /** guild name (2-100 characters) */
  name: string;
  /** [icon hash](https://discord.dev/reference#image-formatting) */
  icon: string | null;
  /** [splash hash](https://discord.dev/reference#image-formatting) */
  splash: string | null;
  /** [discovery splash hash](https://discord.dev/reference#image-formatting) */
  discovery_splash: string | null;
  /** custom guild emojis */
  emojis: Emoji[];
  /** enabled guild features */
  features: GuildFeatures[];
  /** approximate number of members in this guild */
  approximate_member_count: number;
  /** approximate number of online members in this guild */
  approximate_presence_count: number;
  /** the description for the guild, if the guild is discoverable */
  description: string | null;
}

/** https://discord.dev/resources/guild#guild-widget-object */
export interface GuildWidget {
  /** whether the widget is enabled */
  enabled: boolean;
  /** the widget channel id */
  channel_id: Snowflake | null;
}

/** https://discord.dev/resources/guild#guild-member-object */
export interface GuildMember {
  /** the user this guild member represents */
  user?: User;
  /** this users guild nickname */
  nick?: string | null;
  /** array of [role](https://discord.dev/topics/permissions#role-object) object ids */
  roles: Snowflake[];
  /** when the user joined the guild */
  joined_at: string;
  /** when the user started [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the guild */
  premium_since?: string | null;
  /** whether the user is deafened in voice channels */
  deaf: boolean;
  /** whether the user is muted in voice channels */
  mute: boolean;
  /** whether the user has not yet passed the guild's [Membership Screening](https://discord.dev/resources/guild#membership-screening-object) requirements */
  pending?: boolean;
  /** total permissions of the member in the channel, including overrides, returned when in the interaction object */
  permissions?: string;
}

/** https://discord.dev/resources/guild#integration-object */
export interface Integration {
  /** integration id */
  id: Snowflake;
  /** integration name */
  name: string;
  /** integration type (twitch, youtube, or discord) */
  type: string;
  /** is this integration enabled */
  enabled: boolean;
  /** is this integration syncing */
  syncing?: boolean;
  /** id that this integration uses for "subscribers" */
  role_id?: Snowflake;
  /** whether emoticons should be synced for this integration (twitch only currently) */
  enable_emoticons?: boolean;
  /** the behavior of expiring subscribers */
  expire_behavior?: IntegrationExpireBehaviors;
  /** the grace period (in days) before expiring subscribers */
  expire_grace_period?: number;
  /** user for this integration */
  user?: User;
  /** integration account information */
  account: IntegrationAccount;
  /** when this integration was last synced */
  synced_at?: string;
  /** how many subscribers this integration has */
  subscriber_count?: number;
  /** has this integration been revoked */
  revoked?: boolean;
  /** The bot/OAuth2 application for discord integrations */
  application?: Application;
}

/** https://discord.dev/resources/guild#integration-object-integration-expire-behaviors */
export enum IntegrationExpireBehaviors {
  RemoveRole,
  Kick,
}

/** https://discord.dev/resources/guild#integration-account-object */
export interface IntegrationAccount {
  /** id of the account */
  id: string;
  /** name of the account */
  name: string;
}

/** https://discord.dev/resources/guild#integration-application-object */
export interface IntegrationApplication {
  /** the id of the app */
  id: Snowflake;
  /** the name of the app */
  name: string;
  /** the [icon hash](https://discord.dev/reference#image-formatting) of the app */
  icon: string | null;
  /** the description of the app */
  description: string;
  /** the description of the app */
  summary: string;
  /** the bot associated with this application */
  bot?: User;
}

/** https://discord.dev/resources/guild#ban-object */
export interface Ban {
  /** the reason for the ban */
  reason: string | null;
  /** the banned user */
  user: User;
}

/** https://discord.dev/resources/guild#welcome-screen-object */
export interface WelcomeScreen {
  /** the server description shown in the welcome screen */
  description: string | null;
  /** the channels shown in the welcome screen, up to 5 */
  welcome_channels: WelcomeScreenChannel[];
}

/** https://discord.dev/resources/guild#welcome-screen-object-welcome-screen-channel-structure */
export interface WelcomeScreenChannel {
  /** the channel's id */
  channel_id: Snowflake;
  /** the description shown for the channel */
  description: string;
  /** the [emoji id](https://discord.dev/reference#image-formatting), if the emoji is custom */
  emoji_id: Snowflake | null;
  /** the emoji name if custom, the unicode character if standard, or `null` if no emoji is set */
  emoji_name: string | null;
}

export interface CreateGuildJSON {
  name: string;
  region?: VoiceRegion;
  icon?: string;
  verification_level?: VerificationLevel;
  default_message_notifications?: DefaultMessageNotificationLevel;
  explicit_content_filter?: ExplicitContentFilterLevel;
  roles?: Role[];
  channels?: Partial<Channel>[];
  afk_channel_id?: Snowflake;
  afk_timeout?: number;
  system_channel_id?: Snowflake;
  system_channel_flags?: SystemChannelFlags;
}

export type CreateGuildBody = Guild;

export interface GetGuildQuery {
  with_counts?: boolean;
}

export type GetGuildBody = Guild;

export type GetGuildPreviewBody = GuildPreview;

export interface ModifyGuildJSON {
  name?: string;
  region?: VoiceRegion | null;
  verification_level: VerificationLevel | null;
  default_message_notifications?: DefaultMessageNotificationLevel | null;
  explicit_content_filter?: ExplicitContentFilterLevel | null;
  afk_channel_id?: Snowflake | null;
  afk_timeout?: number;
  icon?: string;
  owner_id?: Snowflake;
  splash?: string | null;
  discovery_splash?: string | null;
  banner?: string | null;
  system_channel_id?: Snowflake | null;
  system_channel_flags?: number;
  rules_channel_id?: Snowflake | null;
  public_updates_channel_id?: Snowflake | null;
  preferred_locale?: string | null;
  features?: GuildFeatures[];
  description?: string | null;
}

export type ModifyGuildBody = Guild;

export type DeleteGuildBody = void;

export type GetGuildChannelsBody = Channel[];

export interface CreateGuildChannelJSON {
  name: string;
  type?: ChannelTypes;
  topic?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  position?: number;
  permission_overwrites?: Overwrite[];
  parent_id?: Snowflake;
  nsfw?: boolean;
}

export type CreateGuildChannelBody = Channel;

export type ModifyGuildChannelPositionsJSON = {
  id: Snowflake;
  position: number | null;
  lock_permissions: boolean | null;
  parent_id: Snowflake | null;
}[];

export type ModifyGuildChannelPositionsBody = void;

export type GetGuildMemberBody = GuildMember;

export interface ListGuildMembersQuery {
  limit?: number;
  after?: Snowflake;
}

export type ListGuildMembersBody = GuildMember[];

export interface SearchGuildMembersQuery {
  query: string;
  limit?: number;
}

export type SearchGuildMembersBody = GuildMember[];

export interface AddGuildMemberJSON {
  access_token: string;
  nick?: string;
  roles?: Snowflake[];
  mute?: boolean;
  deaf?: boolean;
}

export type AddGuildMemberBody = GuildMember | void;

export interface ModifyGuildMemberJSON {
  nick?: string | null;
  roles?: Snowflake[] | null;
  mute?: boolean | null;
  deaf?: boolean | null;
  channel_id?: Snowflake | null;
}

export type ModifyGuildMemberBody = GuildMember;

export interface ModifyCurrentUserNickJSON {
  nick?: string | null;
}

export type ModifyCurrentUserNickBody = ModifyCurrentUserNickJSON;

export type AddGuildMemberRoleBody = void;

export type RemoveGuildMemberRoleBody = void;

export type RemoveGuildMemberBody = void;

export type GetGuildBansBody = Ban[];

export type GetGuildBan = Ban;

export interface CreateGuildBanJSON {
  delete_message_days?: number;
  reason?: string;
}

export type CreateGuildBanBody = void;

export type RemoveGuildBanBody = void;

export type GetGuildRolesBody = Role[];

export type CreateGuildRoleJSON = Partial<
  Omit<Role, "id" | "position" | "managed" | "tags">
>;

export type CreateGuildRoleBody = Role;

export type ModifyGuildRolePositionsJSON = {
  id: Snowflake;
  position?: number;
}[];

export type ModifyGuildRolePositionsBody = Role[];

export type ModifyGuildRoleJSON = Nullable<CreateGuildRoleJSON>;

export type ModifyGuildRoleBody = Role;

export type DeleteGuildRoleBody = void;

export interface GetGuildPruneCountQuery {
  days: number;
  include_roles: string;
}

export interface GetGuildPruneCountBody {
  pruned: number;
}

export interface BeginGuildPruneJSON extends GetGuildPruneCountQuery {
  compute_prune_count?: boolean;
  reason?: string;
}

export type BeginGuildPruneBody = Partial<GetGuildPruneCountBody>;

export type GetGuildVoiceRegionsBody = VoiceRegion[];

export type GetGuildInvitesBody = Invite[];

export type GetGuildIntegrationsBody = Integration[];

export type DeleteGuildIntegrationBody = void;

export type GetGuildWidgetSettingsBody = GuildWidget;

export type ModifyGuildWidgetJSON = Partial<GuildWidget>;

export interface GetGuildWidgetBody {
  id: Snowflake;
  name: string;
  instant_invite: string;
  channels: Partial<Channel>[];
  members: (User & { status: string; avatar_url: string })[];
  presence_count: number;
}

export interface GetGuildVanityURLBody {
  code: string;
  uses: number;
}

export interface GetGuildWidgetImageQuery {
  style?: WidgetStyleOptions;
}

export type WidgetStyleOptions =
  | "shield"
  | "banner1"
  | "banner2"
  | "banner3"
  | "banner4";

export type GetGuildWelcomeScreenBody = WelcomeScreen;

export type ModifyGuildWelcomeScreenJSON = Nullable<
  Partial<WelcomeScreen & { enabled: boolean }>
>;

export type ModifyGuildWelcomeScreenBody = WelcomeScreen;

export interface UpdateCurrentUserVoiceStateJSON
  extends UpdateUserVoiceStateJSON {
  request_to_speak_timestamp?: string | null;
}

export type UpdateCurrentUserVoiceStateBody = void;

export interface UpdateUserVoiceStateJSON {
  channel_id: Snowflake;
  suppress?: boolean;
}

export type UpdateUserVoiceStateBody = void;
