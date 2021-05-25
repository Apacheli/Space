// deno-lint-ignore-file camelcase

// https://discord.dev/resources/guild

import type { Snowflake } from "../reference.ts";
import type { DispatchPayloadPresenceUpdateData } from "../topics/gateway.ts";
import type { Permissions, Role } from "../topics/permissions.ts";
import type { Nullable } from "../util.ts";
import type { Application } from "./application.ts";
import type { Channel, ChannelTypes, Overwrite } from "./channel.ts";
import type { Emoji } from "./emoji.ts";
import type { Invite } from "./invite.ts";
import type { StageInstance } from "./stage_instance.ts";
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
  /** total permissions for [the user](https://discord.dev/resources/user#get-current-user-guilds) in the guild (excludes overwrites) */
  permissions?: Permissions;
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
  presences?: DispatchPayloadPresenceUpdateData[];
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
  /** [guild NSFW level](https://discord.dev/resources/guild#guild-object-guild-nsfw-level) */
  nsfw_level: GuildNSFWLevel;
  /** array of [stage instance](https://discord.dev/resources/stage-instance#stage-instance-object) objects */
  stage_instances?: StageInstance;
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

/** https://discord.dev/resources/guild#guild-object-guild-nsfw-level */
export enum GuildNSFWLevel {
  Default,
  Explicit,
  Safe,
  AgeRestricted,
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
  /** total permissions of the member in the channel, including overwrites, returned when in the interaction object */
  permissions?: Permissions;
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

/** https://discord.dev/resources/guild#create-guild */
export interface CreateGuildJSON {
  /** name of the guild (2-100 characters) */
  name: string;
  /** [voice region](https://discord.dev/resources/voice#voice-region-object) id */
  region?: VoiceRegion;
  /** base64 128x128 image for the guild icon */
  icon?: string;
  /** [verification level](https://discord.dev/resources/guild#guild-object-verification-level) */
  verification_level?: VerificationLevel;
  /** default [message notification level](https://discord.dev/resources/guild#guild-object-default-message-notification-level) */
  default_message_notifications?: DefaultMessageNotificationLevel;
  /** [explicit content filter level](https://discord.dev/resources/guild#guild-object-explicit-content-filter-level) */
  explicit_content_filter?: ExplicitContentFilterLevel;
  /** new guild roles */
  roles?: Role[];
  /** new guild's channels */
  channels?: Partial<Channel>[];
  /** id for afk channel */
  afk_channel_id?: Snowflake;
  /** afk timeout in seconds */
  afk_timeout?: number;
  /** the id of the channel where guild notices such as welcome messages and boost events are posted */
  system_channel_id?: Snowflake;
  /** [system channel flags](https://discord.dev/resources/guild#guild-object-system-channel-flags) */
  system_channel_flags?: SystemChannelFlags;
}

/** https://discord.dev/resources/guild#create-guild */
export type CreateGuildBody = Guild;

/** https://discord.dev/resources/guild#get-guild */
export interface GetGuildQuery {
  /** when `true`, will return approximate member and presence counts for the guild */
  with_counts?: boolean;
}

/** https://discord.dev/resources/guild#get-guild */
export type GetGuildBody = Guild;

/** https://discord.dev/resources/guild#get-guild-preview */
export type GetGuildPreviewBody = GuildPreview;

/** https://discord.dev/resources/guild#modify-guild */
export interface ModifyGuildJSON {
  /** guild name */
  name?: string;
  /** guild [voice region](https://discord.dev/resources/voice#voice-region-object) id */
  region?: VoiceRegion | null;
  /** [verification level](https://discord.dev/resources/guild#guild-object-verification-level) */
  verification_level: VerificationLevel | null;
  /** default [message notification level](https://discord.dev/resources/guild#guild-object-default-message-notification-level) */
  default_message_notifications?: DefaultMessageNotificationLevel | null;
  /** [explicit content filter level](https://discord.dev/resources/guild#guild-object-explicit-content-filter-level) */
  explicit_content_filter?: ExplicitContentFilterLevel | null;
  /** id for afk channel */
  afk_channel_id?: Snowflake | null;
  /** afk timeout in seconds */
  afk_timeout?: number;
  /** base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the `ANIMATED_ICON` feature) */
  icon?: string;
  /** user id to transfer guild ownership to (must be owner) */
  owner_id?: Snowflake;
  /** base64 16:9 png/jpeg image for the guild splash (when the server has the `INVITE_SPLASH` feature) */
  splash?: string | null;
  /** base64 16:9 png/jpeg image for the guild discovery splash (when the server has the `DISCOVERABLE` feature) */
  discovery_splash?: string | null;
  /** base64 16:9 png/jpeg image for the guild banner (when the server has the `BANNER` feature) */
  banner?: string | null;
  /** the id of the channel where guild notices such as welcome messages and boost events are posted */
  system_channel_id?: Snowflake | null;
  /** [system channel flags](https://discord.dev/resources/guild#guild-object-system-channel-flags) */
  system_channel_flags?: number;
  /** the id of the channel where Community guilds display rules and/or guidelines */
  rules_channel_id?: Snowflake | null;
  /** the id of the channel where admins and moderators of Community guilds receive notices from Discord */
  public_updates_channel_id?: Snowflake | null;
  /** the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US" */
  preferred_locale?: string | null;
  /** enabled guild features */
  features?: GuildFeatures[];
  /** the description for the guild, if the guild is discoverable */
  description?: string | null;
}

/** https://discord.dev/resources/guild#modify-guild */
export type ModifyGuildBody = Guild;

/** https://discord.dev/resources/guild#delete-guild */
export type DeleteGuildBody = void;

/** https://discord.dev/resources/guild#get-guild-channels */
export type GetGuildChannelsBody = Channel[];

/** https://discord.dev/resources/guild#create-guild-channel */
export interface CreateGuildChannelJSON {
  /** channel name (2-100 characters) */
  name: string;
  /** the [type of channel](https://discord.dev/resources/channel#channel-object-channel-types) */
  type?: ChannelTypes;
  /** channel topic (0-1024 characters) */
  topic?: string;
  /** the bitrate (in bits) of the voice channel (voice only) */
  bitrate?: number;
  /** the user limit of the voice channel (voice only) */
  user_limit?: number;
  /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
  rate_limit_per_user?: number;
  /** sorting position of the channel */
  position?: number;
  /** the channel's permission overwrites */
  permission_overwrites?: Overwrite[];
  /** id of the parent category for a channel */
  parent_id?: Snowflake;
  /** whether the channel is nsfw */
  nsfw?: boolean;
}

/** https://discord.dev/resources/guild#create-guild-channel */
export type CreateGuildChannelBody = Channel;

/** https://discord.dev/resources/guild#modify-guild-channel-positions */
export type ModifyGuildChannelPositionsJSON = {
  /** channel id */
  id: Snowflake;
  /** sorting position of the channel */
  position: number | null;
  /** syncs the permission overwrites with the new parent, if moving to a new category */
  lock_permissions: boolean | null;
  /** the new parent ID for the channel that is moved */
  parent_id: Snowflake | null;
}[];

/** https://discord.dev/resources/guild#modify-guild-channel-positions */
export type ModifyGuildChannelPositionsBody = void;

/** https://discord.dev/resources/guild#get-guild-member */
export type GetGuildMemberBody = GuildMember;

/** https://discord.dev/resources/guild#list-guild-members */
export interface ListGuildMembersQuery {
  /** max number of members to return (1-1000) */
  limit?: number;
  /** the highest user id in the previous page */
  after?: Snowflake;
}

/** https://discord.dev/resources/guild#list-guild-members */
export type ListGuildMembersBody = GuildMember[];

/** https://discord.dev/resources/guild#search-guild-members */
export interface SearchGuildMembersQuery {
  /** Query string to match username(s) and nickname(s) against. */
  query: string;
  /** max number of members to return (1-1000) */
  limit?: number;
}

/** https://discord.dev/resources/guild#search-guild-members */
export type SearchGuildMembersBody = GuildMember[];

/** https://discord.dev/resources/guild#add-guild-member */
export interface AddGuildMemberJSON {
  /** an oauth2 access token granted with the `guilds.join` to the bot's application for the user you want to add to the guild */
  access_token: string;
  /** value to set users nickname to */
  nick?: string;
  /** array of role ids the member is assigned */
  roles?: Snowflake[];
  /** whether the user is muted in voice channels */
  mute?: boolean;
  /** whether the user is deafened in voice channels */
  deaf?: boolean;
}

/** https://discord.dev/resources/guild#add-guild-member */
export type AddGuildMemberBody = GuildMember | void;

/** https://discord.dev/resources/guild#modify-guild-member */
export interface ModifyGuildMemberJSON extends ModifyCurrentUserNickJSON {
  /** array of role ids the member is assigned */
  roles?: Snowflake[] | null;
  /** whether the user is muted in voice channels. Will throw a 400 if the user is not in a voice channel */
  mute?: boolean | null;
  /** whether the user is deafened in voice channels. Will throw a 400 if the user is not in a voice channel */
  deaf?: boolean | null;
  /** id of channel to move user to (if they are connected to voice) */
  channel_id?: Snowflake | null;
}

/** https://discord.dev/resources/guild#modify-guild-member */
export type ModifyGuildMemberBody = GuildMember;

/** https://discord.dev/resources/guild#modify-current-user-nick */
export interface ModifyCurrentUserNickJSON {
  /** value to set users nickname to */
  nick?: string | null;
}

/** https://discord.dev/resources/guild#modify-current-user-nick */
export type ModifyCurrentUserNickBody = ModifyCurrentUserNickJSON;

/** https://discord.dev/resources/guild#add-guild-member-role */
export type AddGuildMemberRoleBody = void;

/** https://discord.dev/resources/guild#remove-guild-member-role */
export type RemoveGuildMemberRoleBody = void;

/** https://discord.dev/resources/guild#remove-guild-member */
export type RemoveGuildMemberBody = void;

/** https://discord.dev/resources/guild#get-guild-bans */
export type GetGuildBansBody = Ban[];

/** https://discord.dev/resources/guild#get-guild-ban */
export type GetGuildBan = Ban;

/** https://discord.dev/resources/guild#create-guild-ban */
export interface CreateGuildBanJSON {
  /** number of days to delete messages for (0-7) */
  delete_message_days?: number;
  /** reason for the ban */
  reason?: string;
}

/** https://discord.dev/resources/guild#create-guild-ban */
export type CreateGuildBanBody = void;

/** https://discord.dev/resources/guild#remove-guild-ban */
export type RemoveGuildBanBody = void;

/** https://discord.dev/resources/guild#get-guild-roles */
export type GetGuildRolesBody = Role[];

/** https://discord.dev/resources/guild#create-guild-role */
export type CreateGuildRoleJSON = Partial<
  Omit<Role, "id" | "position" | "managed" | "tags">
>;

/** https://discord.dev/resources/guild#create-guild-role */
export type CreateGuildRoleBody = Role;

/** https://discord.dev/resources/guild#modify-guild-role-positions */
export type ModifyGuildRolePositionsJSON = {
  /** role */
  id: Snowflake;
  /** sorting position of the role */
  position?: number;
}[];

/** https://discord.dev/resources/guild#modify-guild-role-positions */
export type ModifyGuildRolePositionsBody = Role[];

/** https://discord.dev/resources/guild#modify-guild-role */
export type ModifyGuildRoleJSON = Nullable<CreateGuildRoleJSON>;

/** https://discord.dev/resources/guild#modify-guild-role */
export type ModifyGuildRoleBody = Role;

/** https://discord.dev/resources/guild#delete-guild-role */
export type DeleteGuildRoleBody = void;

/** https://discord.dev/resources/guild#get-guild-prune-count */
export interface GetGuildPruneCountQuery {
  /** number of days to count prune for (1-30) */
  days: number;
  /** role(s) to include */
  include_roles: string;
}

/** https://discord.dev/resources/guild#get-guild-prune-count */
export interface GetGuildPruneCountBody {
  pruned: number;
}

/** https://discord.dev/resources/guild#begin-guild-prune */
export interface BeginGuildPruneJSON extends GetGuildPruneCountQuery {
  /** whether 'pruned' is returned, discouraged for large guilds */
  compute_prune_count?: boolean;
  /** reason for the prune */
  reason?: string;
}

/** https://discord.dev/resources/guild#begin-guild-prune */
export type BeginGuildPruneBody = Partial<GetGuildPruneCountBody>;

/** https://discord.dev/resources/guild#get-guild-voice-regions */
export type GetGuildVoiceRegionsBody = VoiceRegion[];

/** https://discord.dev/resources/guild#get-guild-invites */
export type GetGuildInvitesBody = Invite[];

/** https://discord.dev/resources/guild#get-guild-integrations */
export type GetGuildIntegrationsBody = Integration[];

/** https://discord.dev/resources/guild#delete-guild-integration */
export type DeleteGuildIntegrationBody = void;

/** https://discord.dev/resources/guild#get-guild-widget-settings */
export type GetGuildWidgetSettingsBody = GuildWidget;

/** https://discord.dev/resources/guild#modify-guild-widget */
export type ModifyGuildWidgetJSON = Partial<GuildWidget>;

/** https://discord.dev/resources/guild#get-guild-widget */
export interface GetGuildWidgetBody {
  id: Snowflake;
  name: string;
  instant_invite: string;
  channels: Partial<Channel>[];
  members: (User & { status: string; avatar_url: string })[];
  presence_count: number;
}

/** https://discord.dev/resources/guild#get-guild-vanity-url */
export interface GetGuildVanityURLBody {
  code: string;
  uses: number;
}

/** https://discord.dev/resources/guild#get-guild-widget-image */
export interface GetGuildWidgetImageQuery {
  /** style of the widget image returned (see below) */
  style?: WidgetStyleOptions;
}

/** https://discord.dev/resources/guild#get-guild-widget-image-widget-style-options */
export type WidgetStyleOptions =
  | "shield"
  | "banner1"
  | "banner2"
  | "banner3"
  | "banner4";

/** https://discord.dev/resources/guild#get-guild-welcome-screen */
export type GetGuildWelcomeScreenBody = WelcomeScreen;

/** https://discord.dev/resources/guild#modify-guild-welcome-screen */
export type ModifyGuildWelcomeScreenJSON = Nullable<
  Partial<
    WelcomeScreen & {
      /** whether the welcome screen is enabled */
      enabled: boolean;
    }
  >
>;

/** https://discord.dev/resources/guild#modify-guild-welcome-screen */
export type ModifyGuildWelcomeScreenBody = WelcomeScreen;

/** https://discord.dev/resources/guild#update-current-user-voice-state */
export interface UpdateCurrentUserVoiceStateJSON
  extends UpdateUserVoiceStateJSON {
  /** sets the user's request to speak */
  request_to_speak_timestamp?: string | null;
}

/** https://discord.dev/resources/guild#update-current-user-voice-state */
export type UpdateCurrentUserVoiceStateBody = void;

/** https://discord.dev/resources/guild#update-user-voice-state */
export interface UpdateUserVoiceStateJSON {
  /** the id of the channel the user is currently in */
  channel_id: Snowflake;
  /** toggles the user's suppress state */
  suppress?: boolean;
}

/** https://discord.dev/resources/guild#update-user-voice-state */
export type UpdateUserVoiceStateBody = void;
