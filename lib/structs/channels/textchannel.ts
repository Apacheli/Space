import {
  APIChannel,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
} from "../../../deps.ts";
import GuildChannel from "./guildchannel.ts";
import { TextableChannel } from "./util/textablechannel.ts";
import { ActualSnowflake } from "../../util/util.ts";

export class TextChannel extends GuildChannel implements TextableChannel {
  topic: APIChannel["topic"];
  lastMessageID?: bigint | null;
  rateLimitPerUser: APIChannel["rate_limit_per_user"];
  lastPinTimestamp?: number | null;

  update(data: APIChannel) {
    super.update(data);

    this.topic = data.topic;
    this.lastMessageID = data.last_message_id && BigInt(data.last_message_id);
    this.rateLimitPerUser = data.rate_limit_per_user;
    this.lastPinTimestamp = data.last_pin_timestamp
      ? Date.parse(data.last_pin_timestamp)
      : null;
  }

  getChannelMessages(query: RESTGetAPIChannelMessagesQuery) {
    return this.client.rest.getChannelMessages(this.id, query);
  }

  getChannelMessage(messageID: ActualSnowflake) {
    return this.client.rest.getChannelMessage(this.id, messageID);
  }

  createMessage(data: RESTPostAPIChannelMessageJSONBody, files?: File[]) {
    return this.client.rest.createMessage(this.id, data, files);
  }

  crosspostMessage(messageID: ActualSnowflake) {
    return this.client.rest.crosspostMessage(this.id, messageID);
  }

  createReaction(messageID: ActualSnowflake, emoji: string) {
    return this.client.rest.createReaction(this.id, messageID, emoji);
  }

  deleteOwnReaction(messageID: ActualSnowflake, emoji: string) {
    return this.client.rest.deleteOwnReaction(this.id, messageID, emoji);
  }

  deleteUserReaction(
    messageID: ActualSnowflake,
    emoji: string,
    userID: ActualSnowflake,
  ) {
    return this.client.rest.deleteUserReaction(
      this.id,
      messageID,
      emoji,
      userID,
    );
  }

  getReactions(
    messageID: ActualSnowflake,
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ) {
    return this.client.rest.getReactions(this.id, messageID, emoji, query);
  }

  deleteAllReactions(messageID: ActualSnowflake) {
    return this.client.rest.deleteAllReactions(this.id, messageID);
  }

  deleteAllReactionsForEmoji(messageID: ActualSnowflake, emoji: string) {
    return this.client.rest.deleteAllReactionsforEmoji(
      this.id,
      messageID,
      emoji,
    );
  }

  editMessage(
    messageID: ActualSnowflake,
    data: RESTPatchAPIChannelMessageJSONBody,
  ) {
    return this.client.rest.editMessage(this.id, messageID, data);
  }

  deleteMessage(messageID: ActualSnowflake) {
    return this.client.rest.deleteMessage(this.id, messageID);
  }

  bulkDeleteMessages(data: RESTPostAPIChannelMessagesBulkDeleteJSONBody) {
    return this.client.rest.bulkDeleteMessages(this.id, data);
  }

  triggerTypingIndicator() {
    return this.client.rest.triggerTypingIndicator(this.id);
  }

  getPinnedMessages() {
    return this.client.rest.getPinnedMessages(this.id);
  }

  addPinnedChannelMessage(messageID: ActualSnowflake, reason?: string) {
    return this.client.rest.addPinnedChannelMessage(this.id, messageID, reason);
  }

  deletePinnedChannelMessage(messageID: ActualSnowflake, reason?: string) {
    return this.client.rest.deletePinnedChannelMessage(
      this.id,
      messageID,
      reason,
    );
  }
}

export default TextChannel;
