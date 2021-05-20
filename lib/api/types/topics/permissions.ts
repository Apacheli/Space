import type { Snowflake } from "../reference.ts";

/** */
export const BitwisePermissionFlags = {
  /** Allows creation of instant invites */
  CreateInstantInvite: 1n << 0n,
  /** Allows kicking members */
  KickMembers: 1n << 1n,
  /** Allows banning members */
  BanMembers: 1n << 2n,
  /** Allows all permissions and bypasses channel permission overwrites */
  Administrator: 1n << 3n,
  /** Allows management and editing of channels */
  ManageChannels: 1n << 4n,
  /** Allows management and editing of the guild */
  ManageGuild: 1n << 5n,
  /** Allows for the addition of reactions to messages */
  AddReaction: 1n << 6n,
  /** Allows for viewing of audit logs */
  ViewAuditLog: 1n << 7n,
  /** Allows for using priority speaker in a voice channel */
  PrioritySpeaker: 1n << 8n,
  /** Allows the user to go live */
  Stream: 1n << 9n,
  /** Allows guild members to view a channel, which includes reading messages in text channels */
  ViewChannel: 1n << 10n,
  /** Allows for sending messages in a channel */
  SendMessages: 1n << 11n,
  /** Allows for sending of /tts messages */
  SendTTSMessages: 1n << 12n,
  /** Allows for deletion of other users messages */
  ManageMessages: 1n << 13n,
  /** Links sent by users with this permission will be auto-embedded */
  EmbedLinks: 1n << 14n,
  /** Allows for uploading images and files */
  AttachFiles: 1n << 15n,
  /** Allows for reading of message history */
  ReadMessageHistory: 1n << 16n,
  /** Allows for using the `@everyone` tag to notify all users in a channel, and the `@here` tag to notify all online users in a channel */
  MentionEveryone: 1n << 17n,
  /** Allows the usage of custom emojis from other servers */
  UseExternalEmojis: 1n << 18n,
  /** Allows for viewing guild insights */
  ViewGuildInsights = 1n << 19n,
  /** Allows for joining of a voice channel */
  Connect = 1n << 20n,
  /** Allows for speaking in a voice channel */
  Speak = 1n << 21n,
  /** Allows for muting members in a voice channel */
  MuteMembers = 1n << 22n,
  /** Allows for deafening of members in a voice channel */
  DeafenMembers = 1n << 23n,
  /** Allows for moving of members between voice channels */
  MoveMembers = 1n << 24n,
  /** Allows for using voice-activity-detection in a voice channel */
  UseVAD = 1n << 25n,
  /** Allows for modification of own nickname */
  ChangeNickname = 1n << 26n,
  /** Allows for modification of other users nicknames */
  ManageNicknames = 1n << 27n,
  /** Allows management and editing of roles */
  ManageRoles = 1n << 28n,
  /** Allows management and editing of webhooks */
  ManageWebhooks = 1n << 29n,
  /** Allows management and editing of emojis */
  ManageEmojis = 1n << 30n,
  /** Allows members to use slash commands in text channels */
  UseSlashCommands = 1n << 31n,
  /** Allows for requesting to speak in stage channels. _(This permission is under active development and may be changed or removed.)_ */
  RequestToSpeak = 1n << 32n,
  /** Allows for deleting and archiving threads, and viewing all private threads */
  ManageThreads = 1n << 34n,
  /** Allows for creating and participating in threads */
  UsePublicThreads = 1n << 35n,
  /** Allows for creating and participating in private threads */
  UsePrivateThreads = 1n << 36n,
} as const;

export interface Role {
  id: Snowflake;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTags;
}

export interface RoleTags {
}
