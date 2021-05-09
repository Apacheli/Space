import type {
  RESTGetAPIAuditLogQuery,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelJSONBody,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPatchAPIGuildChannelPositionsJSONBody,
  RESTPatchAPIGuildEmojiJSONBody,
  RESTPatchAPIGuildJSONBody,
  RESTPostAPIChannelFollowersJSONBody,
  RESTPostAPIChannelInviteJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  RESTPostAPIGuildChannelJSONBody,
  RESTPostAPIGuildEmojiJSONBody,
  RESTPutAPIChannelPermissionJSONBody,
} from "./deps.ts";
import {
  channelPermissionsDecorator,
  Client,
  guildPermissionsDecorator,
} from "./mod.ts";
import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";
import { ActualSnowflake } from "../util/mod.ts";

// deno-lint-ignore no-empty-interface
export interface RESTClientOptions extends HTTPClientOptions {
}

export class RESTClient extends HTTPClient {
  constructor(
    public client: Client,
    token: string,
    options?: RESTClientOptions,
  ) {
    super(token, options);
  }

  @guildPermissionsDecorator(["VIEW_AUDIT_LOG"])
  getGuildAuditLog(guildID: ActualSnowflake, query: RESTGetAPIAuditLogQuery) {
    return super.getGuildAuditLog(guildID, query);
  }

  // getChannel

  @channelPermissionsDecorator(["MANAGE_CHANNELS", "VIEW_CHANNEL"])
  editChannel(
    channelID: ActualSnowflake,
    data: RESTPatchAPIChannelJSONBody,
    reason?: string,
  ) {
    return super.editChannel(channelID, data, reason);
  }

  @channelPermissionsDecorator(["MANAGE_CHANNELS", "VIEW_CHANNEL"])
  deleteChannel(channelID: ActualSnowflake, reason?: string) {
    return super.deleteChannel(channelID, reason);
  }

  @channelPermissionsDecorator(["VIEW_CHANNEL"])
  getChannelMessages(
    channelID: ActualSnowflake,
    query: RESTGetAPIChannelMessagesQuery,
  ) {
    return super.getChannelMessages(channelID, query);
  }

  @channelPermissionsDecorator(["VIEW_CHANNEL"])
  getChannelMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.getChannelMessage(channelID, messageID);
  }

  @channelPermissionsDecorator(["SEND_MESSAGES", "VIEW_CHANNEL"])
  createMessage(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessageJSONBody,
    files?: File[],
  ) {
    return super.createMessage(channelID, data, files);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "SEND_MESSAGES",
    "VIEW_CHANNEL",
  ])
  crosspostMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.crosspostMessage(channelID, messageID);
  }

  @channelPermissionsDecorator([
    "ADD_REACTIONS",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  createReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return super.createReaction(channelID, messageID, emoji);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  deleteOwnReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return super.deleteOwnReaction(channelID, messageID, emoji);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteUserReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
    userID: ActualSnowflake,
  ) {
    return super.deleteUserReaction(channelID, messageID, emoji, userID);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getReactions(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ) {
    return super.getReactions(channelID, messageID, emoji, query);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteAllReactions(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.deleteAllReactions(channelID, messageID);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteAllReactionsforEmoji(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return super.deleteAllReactionsforEmoji(channelID, messageID, emoji);
  }

  @channelPermissionsDecorator([
    /* "MANAGE_MESSAGES", */
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  editMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    data: RESTPatchAPIChannelMessageJSONBody,
  ) {
    // TODO: Check flag edits
    return super.editMessage(channelID, messageID, data);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.deleteMessage(channelID, messageID);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  bulkDeleteMessages(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  ) {
    return super.bulkDeleteMessages(channelID, data);
  }

  @channelPermissionsDecorator([
    "MANAGE_CHANNELS",
    "MANAGE_ROLES",
    "VIEW_CHANNEL",
  ])
  editChannelPermissions(
    channelID: ActualSnowflake,
    overwriteID: ActualSnowflake,
    data: RESTPutAPIChannelPermissionJSONBody,
    reason?: string,
  ) {
    return super.editChannelPermissions(channelID, overwriteID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_CHANNELS", "VIEW_CHANNEL"])
  getChannelInvites(channelID: ActualSnowflake) {
    return super.getChannelInvites(channelID);
  }

  @guildPermissionsDecorator(["CREATE_INSTANT_INVITE", "VIEW_CHANNEL"])
  createChannelInvite(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelInviteJSONBody,
    reason?: string,
  ) {
    return super.createChannelInvite(channelID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES", "VIEW_CHANNEL"])
  deleteChannelPermission(
    channelID: ActualSnowflake,
    overwriteID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deleteChannelPermission(channelID, overwriteID, reason);
  }

  @channelPermissionsDecorator(["MANAGE_WEBHOOKS", "VIEW_CHANNEL"])
  followNewsChannel(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelFollowersJSONBody,
  ) {
    return super.followNewsChannel(channelID, data);
  }

  @channelPermissionsDecorator(["SEND_MESSAGES", "VIEW_CHANNEL"])
  triggerTypingIndicator(channelID: ActualSnowflake) {
    return super.triggerTypingIndicator(channelID);
  }

  // getPinnedMessages

  @guildPermissionsDecorator(["KICK_MEMBERS"])
  removeGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    reason?: string,
  ) {
    return super.removeGuildMember(guildID, userID, reason);
  }

  @channelPermissionsDecorator(["MANAGE_MESSAGES", "VIEW_CHANNEL"])
  addPinnedChannelMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    reason?: string,
  ) {
    return super.addPinnedChannelMessage(channelID, messageID, reason);
  }

  @channelPermissionsDecorator(["MANAGE_MESSAGES", "VIEW_CHANNEL"])
  deletePinnedChannelMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deletePinnedChannelMessage(channelID, messageID, reason);
  }

  // groupPrivateChannelAddRecipient
  // groupPrivateChannelRemoveRecipient
  // startPublicThread
  // startaprivatethread
  // joinThread
  // addUsertoThread
  // leaveThread
  // removeUserfromThread
  // getThreadMembers

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getActiveThreads(channelID: ActualSnowflake, data: unknown) {
    return super.getActiveThreads(channelID, data);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getPublicArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return super.getPublicArchivedThreads(channelID, data);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getJoinedPrivateArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return super.getJoinedPrivateArchivedThreads(channelID, data);
  }

  // getGuildEmojis
  // getGuildEmoji

  @guildPermissionsDecorator(["MANAGE_EMOJIS"])
  createGuildEmoji(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return super.createGuildEmoji(guildID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_EMOJIS"])
  editGuildEmoji(
    guildID: ActualSnowflake,
    emojiID: ActualSnowflake,
    data: RESTPatchAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return super.editGuildEmoji(guildID, emojiID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_EMOJIS"])
  deleteGuildEmoji(
    guildID: ActualSnowflake,
    emojiID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deleteGuildEmoji(guildID, emojiID, reason);
  }

  // createGuild
  // getGuild
  // getGuildPreview

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  editGuild(guildID: ActualSnowflake, data: RESTPatchAPIGuildJSONBody) {
    return super.editGuild(guildID, data);
  }

  // deleteGuild
  // getGuildChannels

  @guildPermissionsDecorator(["MANAGE_CHANNELS"])
  createGuildChannel(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildChannelJSONBody,
    reason?: string,
  ) {
    return super.createGuildChannel(guildID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_CHANNELS"])
  editGuildChannelPositions(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildChannelPositionsJSONBody,
  ) {
    return super.editGuildChannelPositions(guildID, data);
  }

  // getGuildMember
  // getGuildMembers
  // searchGuildMember
}
