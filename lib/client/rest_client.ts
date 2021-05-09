import {
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelJSONBody,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
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

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
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

  @guildPermissionsDecorator(["KICK_MEMBERS"])
  removeGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    reason?: string,
  ) {
    return super.removeGuildMember(guildID, userID, reason);
  }
}
