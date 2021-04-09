import {
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
} from "../../../../deps.ts";
import { ActualSnowflake } from "../../../util/util.ts";

// TODO: do docs, tomorrow maybe? :flushed:
export interface TextableChannel {
  getChannelMessages(query: RESTGetAPIChannelMessagesQuery): void;
  getChannelMessage(messageID: ActualSnowflake): void;
  createMessage(data: RESTPostAPIChannelMessageJSONBody, files?: File[]): void;
  crosspostMessage(messageID: ActualSnowflake): void;
  createReaction(messageID: ActualSnowflake, emoji: string): void;
  deleteOwnReaction(messageID: ActualSnowflake, emoji: string): void;
  deleteUserReaction(
    messageID: ActualSnowflake,
    emoji: string,
    userID: ActualSnowflake,
  ): void;
  getReactions(
    messageID: ActualSnowflake,
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ): void;
  deleteAllReactions(messageID: ActualSnowflake): void;
  deleteAllReactionsForEmoji(messageID: ActualSnowflake, emoji: string): void;
  editMessage(
    messageID: ActualSnowflake,
    data: RESTPatchAPIChannelMessageJSONBody,
  ): void;
  deleteMessage(messageID: ActualSnowflake): void;
  bulkDeleteMessages(data: RESTPostAPIChannelMessagesBulkDeleteJSONBody): void;
  triggerTypingIndicator(): void;
  getPinnedMessages(): void;
  addPinnedChannelMessage(messageID: ActualSnowflake, reason?: string): void;
  deletePinnedChannelMessage(messageID: ActualSnowflake, reason?: string): void;
}

export default TextableChannel;
