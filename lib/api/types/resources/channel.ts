import type { Snowflake } from "../reference.ts";
import type { GuildMember } from "./guild.ts";
import type { User } from "./user.ts";

// https://discord.com/developers/docs/resources/channel

// https://discord.com/developers/docs/resources/channel#channel-object
export interface Channel {
  id: Snowflake;
  type: ChannelTypes;
  guild_id?: Snowflake;
  position?: number;
  permission_overwrites?: Overwrite[];
  name?: string;
  topic?: string | null;
  nsfw?: boolean;
  last_message_id?: Snowflake;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: User[];
  icon?: string | null;
  owner_id?: Snowflake;
  application_id?: Snowflake;
  parent_id?: Snowflake | null;
  last_pin_timestamp?: string;
  rtc_region?: string | null;
  video_quality_mode?: VideoQualityModes;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadata;
  member?: ThreadMember;
}

export enum ChannelTypes {
  GuildText,
  DM,
  GuildVoice,
  GroupDM,
  GuildCategory,
  GuildNews,
  GuildStore,
  GuildNewsThread = 10,
  GuildPublicThread,
  GuildPrivateThread,
  GuildStageVoice,
}

export enum VideoQualityModes {
  Auto,
  Full,
}

export interface Message {
  id: Snowflake;
  channel_id: Snowflake;
  guild_id?: Snowflake;
  author: User;
  member?: GuildMember;
  content: string;
  timestamp: string;
  edited_timestamp: string | null;
  tts: boolean;
  mention_everyone: boolean;
  mentions: User[];
  mention_roles: Snowflake[];
  mention_channels?: ChannelMention[];
  attachments: Attachment[];
  embeds: Embed[];
  reactions?: Reaction[];
  nonce?: string | number;
  pinned: boolean;
  webhook_id?: Snowflake;
  type: MessageTypes;
  activity: MessageActivity;
  application: Partial<Application>;
  application_id?: Snowflake;
  message_reference: MessageReference;
  flags?: MessageFlags;
  stickers?: MessageSticker[];
  referenced_message?: Message;
  interaction?: MessageInteraction;
  thread?: Channel;
}

export enum MessageTypes {
  Default,
  RecipientAdd,
  RecipientRemove,
  Call,
  ChannelNameChange,
  ChannelIconChange,
  ChannelPinnedMessage,
  GuildMemberJoin,
  UserPremiumSubscription,
  UserPremiumSubscriptionTier1,
  UserPremiumSubscriptionTier2,
  UserPremiumSubscriptionTier3,
  ChannelFollowAdd,
  GuildDiscoveryAdd,
  GuildDiscoveryDisqualified,
  GuildDiscoveryRequalified,
  GuildDiscoveryGracePeriodInitialWarning,
  GuildDiscoveryGracePeriodFinalWarning,
  ThreadCreated,
  Reply,
  ApplicationCommand,
  ThreadStarterMessage,
  GuildInviteReminder,
}

export interface MessageActivity {
  type: MessageActivityTypes;
  party_id?: string;
}

export enum MessageActivityTypes {
  Join = 1,
  Spectate,
  Listen,
  JoinRequest = 5,
}

export enum MessageFlags {
  Crossposted = 1 << 0,
  IsCrosspost = 1 << 1,
  SuppressEmbeds = 1 << 2,
  SourceMessageDeleted = 1 << 3,
  Urgent = 1 << 4,
  HasThread = 1 << 5,
  Ephemeral = 1 << 6,
  Loading = 1 << 7,
}

export interface MessageSticker {
  id: Snowflake;
  pack_id: Snowflake;
  name: string;
  description: string;
  tags?: string;
  asset: string;
  format_type: MessageStickerFormat;
}

export enum MessageStickerFormat {
  PNG = 1,
  APNG,
  Lottie,
}

export interface MessageReference {
  message_id?: Snowflake;
  channel_id?: Snowflake;
  guild_id?: Snowflake;
  fail_if_not_exists?: boolean;
}

export interface FollowedChannel {
  channel_id: Snowflake;
  webhook_id: Snowflake;
}

export interface Reaction {
  count: number;
  me: boolean;
  emoji: Partial<Emoji>;
}

export interface Overwrite {
  id: Snowflake;
  type: OverwriteTypes;
  allow: string;
  deny: string;
}

export enum OverwriteTypes {
  Role,
  Member,
}

export interface ThreadMetadata {
  archived: boolean;
  archiver_id?: Snowflake;
  auto_archive_duration: number;
  archive_timestamp: string;
  locked?: boolean;
}

export interface ThreadMember {
  id: Snowflake;
  user_id: Snowflake;
  join_timestamp: string;
  flags: number;
}

export interface Embed {
  title?: string;
  type?: EmbedTypes;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}

export type EmbedTypes =
  | "rich"
  | "image"
  | "video"
  | "gifv"
  | "article"
  | "link";

export type EmbedThumbnail = EmbedVideo;

export interface EmbedVideo {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export type EmbedImage = EmbedVideo;

export interface EmbedProvider {
  name?: string;
  url?: string;
}

export type EmbedAuthor = EmbedProvider & Omit<EmbedFooter, "text">;

export interface EmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface Attachment {
  id: Snowflake;
  filename: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number | null;
  width?: number | null;
}

export interface ChannelMention {
  id: Snowflake;
  guild_id: Snowflake;
  type: ChannelTypes;
  name: string;
}

export enum AllowedMentionTypes {
  RoleMentions = "roles",
  UserMentions = "users",
  EveryoneMentions = "everyone",
}

export interface AllowedMentions {
  parse: AllowedMentionTypes[];
  roles: Snowflake[];
  users: Snowflake[];
  replied_user: boolean;
}
