import {
  APIChannel,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
} from "../../../deps.ts";
import Channel from "./channel.ts";
import Textable from "./util/textable.ts";
import { ActualSnowflake } from "../../util/util.ts";

/**
 * Class representing a DM (private) channel on Discord.
 */
export class PrivateChannel extends Channel implements Textable {
  /**
   * the id of the last message sent in this channel (may not point to an
   * existing or valid message)
   */
  lastMessageID?: bigint | null;
  /**
   * when the last pinned message was pinned. This may be `null` in events such
   * as `GUILD_CREATE` when a message is not pinned.
   */
  lastPinTimestamp?: number | null;
  /**
   * the recipients of the DM
   */
  recipients: APIChannel["recipients"];

  update(data: APIChannel) {
    super.update(data);

    this.lastMessageID = data.last_message_id && BigInt(data.last_message_id);
    this.lastPinTimestamp = data.last_pin_timestamp
      ? Date.parse(data.last_pin_timestamp)
      : null;
    this.recipients = data.recipients;
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

export default PrivateChannel;
