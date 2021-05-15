import type { MessageInteraction } from "../interactions/slash_commands.ts";
import type { Snowflake } from "../reference.ts";
import type { Application } from "../application.ts";
import type { Emoji } from "./emoji.ts";
import type { GuildMember } from "./guild.ts";
import type { User } from "./user.ts";

// https://discord.dev/resources/channel

/** https://discord.dev/resources/channel#channel-object */
export interface Channel {
  /** the id of this channel */
  id: Snowflake;
  /** the [type of channel](https://discord.dev/resources/channel#channel-object-channel-types) */
  type: ChannelTypes;
  /** the id of the guild (may be missing for some channel objects received over gateway guild dispatches) */
  guild_id?: Snowflake;
  /** sorting position of the channel */
  position?: number;
  /** explicit permission overwrites for members and roles */
  permission_overwrites?: Overwrite[];
  /** the name of the channel (2-100 characters) */
  name?: string;
  /** the channel topic (0-1024 characters) */
  topic?: string | null;
  /** whether the channel is nsfw */
  nsfw?: boolean;
  /** the id of the last message sent in this channel (may not point to an existing or valid message) */
  last_message_id?: Snowflake | null;
  /** the bitrate (in bits) of the voice channel */
  bitrate?: number;
  /** the user limit of the voice channel */
  user_limit?: number;
  /** mount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
  rate_limit_per_user?: number;
  /** the recipients of the DM */
  recipients?: User[];
  /** icon hash */
  icon?: string | null;
  /** id of the creator of the group DM or thread */
  owner_id?: Snowflake;
  /** application id of the group DM creator if it is bot-created */
  application_id?: Snowflake;
  /** for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created */
  parent_id?: Snowflake | null;
  /** when the last pinned message was pinned. This may be `null` in events such as `GUILD_CREATE` when a message is not pinned. */
  last_pin_timestamp?: string | null;
  /** [voice region](https://discord.dev/resources/voice#voice-region-object) id for the voice channel, automatic when set to null */
  rtc_region?: string | null;
  /** the camera [video quality mode](https://discord.dev/resources/channel#channel-object-video-quality-modes) of the voice channel, 1 when not present */
  video_quality_mode?: VideoQualityModes;
  /** an approximate count of messages in a thread, stops counting at 50 */
  message_count?: number;
  /** an approximate count of users in a thread, stops counting at 50 */
  member_count?: number;
  /** thread-specific fields not needed by other channels */
  thread_metadata?: ThreadMetadata;
  /** thread member object for the current user, if they have joined the thread, only included on certain API endpoints */
  member?: ThreadMember;
}

/** https://discord.dev/resources/channel#channel-object-channel-types */
export enum ChannelTypes {
  /** a text channel within a server */
  GuildText,
  /** a direct message between users */
  DM,
  /** a voice channel within a server */
  GuildVoice,
  /** a direct message between multiple users */
  GroupDM,
  /** an [organizational category](https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101) that contains up to 50 channels */
  GuildCategory,
  /** a channel that [users can follow and crosspost into their own server](https://support.discord.com/hc/en-us/articles/360032008192) */
  GuildNews,
  /** a channel in which game developers can [sell their game on Discord](https://discord.dev/game-and-server-management/special-channels) */
  GuildStore,
  /** a temporary sub-channel within a GUILD_NEWS channel */
  GuildNewsThread = 10,
  /** a temporary sub-channel within a GUILD_TEXT channel */
  GuildPublicThread,
  /** a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission */
  GuildPrivateThread,
  /** a voice channel for [hosting events with an audience](https://support.discord.com/hc/en-us/articles/1500005513722) */
  GuildStageVoice,
}

/** https://discord.dev/resources/channel#channel-object-video-quality-modes */
export enum VideoQualityModes {
  /** Discord chooses the quality for optimal performance */
  Auto = 1,
  /** 720p */
  Full,
}

/** https://discord.dev/resources/channel#message-object */
export interface Message {
  /** id of the message */
  id: Snowflake;
  /** id of the channel the message was sent in */
  channel_id: Snowflake;
  /** id of the guild the message was sent in */
  guild_id?: Snowflake;
  /** the author of this message (not guaranteed to be a valid user, see below) */
  author: User;
  /** member properties for this message's author */
  member?: GuildMember;
  /** contents of the message */
  content: string;
  /** when this message was sent */
  timestamp: string;
  /** when this message was edited (or null if never) */
  edited_timestamp: string | null;
  /** whether this was a TTS message */
  tts: boolean;
  /** whether this message mentions everyone */
  mention_everyone: boolean;
  /** users specifically mentioned in the message */
  mentions: User[];
  /** roles specifically mentioned in this message */
  mention_roles: Snowflake[];
  /** channels specifically mentioned in this message */
  mention_channels?: ChannelMention[];
  /** any attached files */
  attachments: Attachment[];
  /** any embedded content */
  embeds: Embed[];
  /** eactions to the message */
  reactions?: Reaction[];
  /** used for validating a message was sent */
  nonce?: string | number;
  /** whether this message is pinned */
  pinned: boolean;
  /** if the message is generated by a webhook, this is the webhook's id */
  webhook_id?: Snowflake;
  /** [type of message](https://discord.dev/resources/channel#message-object-message-types) */
  type: MessageTypes;
  /** sent with Rich Presence-related chat embeds */
  activity: MessageActivity;
  /** sent with Rich Presence-related chat embeds */
  application: Partial<Application>;
  /** if the message is a response to an [Interaction](https://discord.dev/interactions/slash-commands), this is the id of the interaction's application */
  application_id?: Snowflake;
  /** data showing the source of a crosspost, channel follow add, pin, or reply message */
  message_reference: MessageReference;
  /** [message flags](https://discord.dev/resources/channel#message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field) */
  flags?: MessageFlags;
  /** the stickers sent with the message (bots currently can only receive messages with stickers, not send) */
  stickers?: MessageSticker[];
  /** the message associated with the message_reference */
  referenced_message?: Message;
  /** sent if the message is a response to an [Interaction](https://discord.dev/interactions/slash-commands) */
  interaction?: MessageInteraction;
  /** the thread that was started from this message, includes [thread member](https://discord.dev/resources/channel#thread-member-object) object */
  thread?: Channel;
}

/** https://discord.dev/resources/channel#message-object-message-types */
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

/** https://discord.dev/resources/channel#message-object-message-activity-structure */
export interface MessageActivity {
  /** [type of message activity](https://discord.dev/resources/channel#message-object-message-activity-types) */
  type: MessageActivityTypes;
  /** party_id from a [Rich Presence event](https://discord.dev/rich-presence/how-to#updating-presence-update-presence-payload-fields) */
  party_id?: string;
}

/** https://discord.dev/resources/channel#message-object-message-activity-types */
export enum MessageActivityTypes {
  Join = 1,
  Spectate,
  Listen,
  JoinRequest = 5,
}

/** https://discord.dev/resources/channel#message-object-message-flags */
export enum MessageFlags {
  /** this message has been published to subscribed channels (via Channel Following) */
  Crossposted = 1 << 0,
  /** this message originated from a message in another channel (via Channel Following) */
  IsCrosspost = 1 << 1,
  /** do not include any embeds when serializing this message */
  SuppressEmbeds = 1 << 2,
  /** the source message for this crosspost has been deleted (via Channel Following) */
  SourceMessageDeleted = 1 << 3,
  /** this message came from the urgent message system */
  Urgent = 1 << 4,
  /** this message has an associated thread, with the same id as the message */
  HasThread = 1 << 5,
  /** this message is only visible to the user who invoked the Interaction */
  Ephemeral = 1 << 6,
  /** this message is an Interaction Response and the bot is "thinking" */
  Loading = 1 << 7,
}

/** https://discord.dev/resources/channel#message-object-message-sticker-structure */
export interface MessageSticker {
  /** id of the sticker */
  id: Snowflake;
  /** id of the pack the sticker is from */
  pack_id: Snowflake;
  /** name of the sticker */
  name: string;
  /** description of the sticker */
  description: string;
  /** a comma-separated list of tags for the sticker */
  tags?: string;
  /** sticker asset hash */
  asset: string;
  /** [type of sticker format](https://discord.dev/resources/channel#message-object-message-sticker-format-types) */
  format_type: MessageStickerFormat;
}

/** https://discord.dev/resources/channel#message-object-message-sticker-format-types */
export enum MessageStickerFormat {
  PNG = 1,
  APNG,
  Lottie,
}

/** https://discord.dev/resources/channel#message-reference-object */
export interface MessageReference {
  /** id of the originating message */
  message_id?: Snowflake;
  /** id of the originating message's channel */
  channel_id?: Snowflake;
  /** id of the originating message's guild */
  guild_id?: Snowflake;
  /** when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true */
  fail_if_not_exists?: boolean;
}

/** https://discord.dev/resources/channel#followed-channel-object */
export interface FollowedChannel {
  /** source channel id */
  channel_id: Snowflake;
  /** created target webhook id */
  webhook_id: Snowflake;
}

/** https://discord.dev/resources/channel#reaction-object */
export interface Reaction {
  /** times this emoji has been used to react */
  count: number;
  /** whether the current user reacted using this emoji */
  me: boolean;
  /** emoji information */
  emoji: Partial<Emoji>;
}

/** https://discord.dev/resources/channel#overwrite-object */
export interface Overwrite {
  /** role or user id */
  id: Snowflake;
  /** either 0 (role) or 1 (member) */
  type: OverwriteTypes;
  /** permission bit set */
  allow: string;
  /** permission bit set */
  deny: string;
}

export enum OverwriteTypes {
  Role,
  Member,
}

/** https://discord.dev/resources/channel#thread-metadata-object */
export interface ThreadMetadata {
  /** whether the thread is archived */
  archived: boolean;
  /** id of the user that last archived or unarchived the thread */
  archiver_id?: Snowflake;
  /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 */
  auto_archive_duration: number;
  /** timestamp when the thread's archive status was last changed, used for calculating recent activity */
  archive_timestamp: string;
  /** when a thread is locked, only users with MANAGE_THREADS can unarchive it */
  locked?: boolean;
}

/** https://discord.dev/resources/channel#thread-member-object */
export interface ThreadMember {
  /** the id of the thread */
  id: Snowflake;
  /** mthe id of the user */
  user_id: Snowflake;
  /** the time the current user last joined the thread */
  join_timestamp: string;
  /** any user-thread settings, currently only used for notifications */
  flags: number;
}

/** https://discord.dev/resources/channel#embed-object */
export interface Embed {
  /** title of embed */
  title?: string;
  /** [type of embed](https://discord.dev/resources/channel#embed-object-embed-types) (always "rich" for webhook embeds) */
  type?: EmbedTypes;
  /** description of embed */
  description?: string;
  /** url of embed */
  url?: string;
  /** timestamp of embed content */
  timestamp?: string;
  /** color code of the embed */
  color?: number;
  /** footer information */
  footer?: EmbedFooter;
  /** image information */
  image?: EmbedImage;
  /** thumbnail information */
  thumbnail?: EmbedThumbnail;
  /** video information */
  video?: EmbedVideo;
  /** provider information */
  provider?: EmbedProvider;
  /** author information */
  author?: EmbedAuthor;
  /** fields information */
  fields?: EmbedField[];
}

/** https://discord.dev/resources/channel#embed-object-embed-types */
export enum EmbedTypes {
  /** generic embed rendered from embed attributes */
  Rich = "rich",
  /** image embed */
  Image = "image",
  /** video embed */
  Video = "video",
  /** animated gif image embed rendered as a video embed */
  GIFV = "gifv",
  /** article embed */
  Article = "article",
  /** link embed */
  Link = "link",
}

/** https://discord.dev/resources/channel#embed-object-embed-thumbnail-structure */
export type EmbedThumbnail = EmbedVideo;

/** https://discord.dev/resources/channel#embed-object-embed-video-structure */
export interface EmbedVideo {
  /** source url of thumbnail, video, or image (only supports http(s) and attachments) */
  url?: string;
  /** a proxied url of the thumbnail, video, or image */
  proxy_url?: string;
  /** height of thumbnail, video, or image */
  height?: number;
  /** width of thumbnail, video, or image */
  width?: number;
}

/** https://discord.dev/resources/channel#embed-object-embed-image-structure */
export type EmbedImage = EmbedVideo;

/** https://discord.dev/resources/channel#embed-object-embed-provider-structure */
export interface EmbedProvider {
  /** name of provider or author */
  name?: string;
  /** url of provider or author */
  url?: string;
}

/** https://discord.dev/resources/channel#embed-object-embed-author-structure */
export type EmbedAuthor = EmbedProvider & Omit<EmbedFooter, "text">;

/** https://discord.dev/resources/channel#embed-object-embed-field-structure */
export interface EmbedFooter {
  /** footer text */
  text: string;
  /** url of footer icon or author icon (only supports http(s) and attachments) */
  icon_url?: string;
  /** a proxied url of footer icon or author icon */
  proxy_icon_url?: string;
}

/** https://discord.dev/resources/channel#embed-object-embed-field-structure */
export interface EmbedField {
  /** name of the field */
  name: string;
  /** value of the field */
  value: string;
  /** whether or not this field should display inline */
  inline?: boolean;
}

/** https://discord.dev/resources/channel#attachment-object */
export interface Attachment {
  /** attachment id */
  id: Snowflake;
  /** name of file attached */
  filename: string;
  /** the attachment's [media type](https://en.wikipedia.org/wiki/Media_type) */
  content_type?: string;
  /** size of file in bytes */
  size: number;
  /** source url of file */
  url: string;
  /** a proxied url of file */
  proxy_url: string;
  /** height of file (if image) */
  height?: number | null;
  /** width of file (if image) */
  width?: number | null;
}

/** https://discord.dev/resources/channel#channel-mention-object */
export interface ChannelMention {
  /** id of the channel */
  id: Snowflake;
  /** id of the guild containing the channel */
  guild_id: Snowflake;
  /** the [type of channel](https://discord.dev/resources/channel#channel-object-channel-types) */
  type: ChannelTypes;
  /** the name of the channel */
  name: string;
}

/** https://discord.dev/resources/channel#allowed-mentions-object-allowed-mention-types */
export enum AllowedMentionTypes {
  /** Controls role mentions */
  RoleMentions = "roles",
  /** Controls user mentions */
  UserMentions = "users",
  /** Controls @everyone and @here mentions */
  EveryoneMentions = "everyone",
}

/** https://discord.dev/resources/channel#allowed-mentions-object-allowed-mentions-structure */
export interface AllowedMentions {
  /** An array of [allowed mention types](https://discord.dev/resources/channel#allowed-mentions-object-allowed-mention-types) to parse from the content. */
  parse: AllowedMentionTypes[];
  /** Array of role_ids to mention (Max size of 100) */
  roles: Snowflake[];
  /** Array of user_ids to mention (Max size of 100) */
  users: Snowflake[];
  /** For replies, whether to mention the author of the message being replied to (default false) */
  replied_user: boolean;
}
