import {
  RESTDeleteAPIChannelAllMessageReactionsResult,
  RESTDeleteAPIChannelMessageOwnReaction,
  RESTDeleteAPIChannelMessageReactionResult,
  RESTDeleteAPIChannelMessageResult,
  RESTDeleteAPIChannelMessageUserReactionResult,
  RESTDeleteAPIChannelPinResult,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessageReactionUsersResult,
  RESTGetAPIChannelMessageResult,
  RESTGetAPIChannelMessagesQuery,
  RESTGetAPIChannelMessagesResult,
  RESTGetAPIChannelPinsResult,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPatchAPIChannelMessageResult,
  RESTPostAPIChannelMessageCrosspostResult,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageResult,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteResult,
  RESTPostAPIChannelTypingResult,
  RESTPutAPIChannelMessageReactionResult,
  RESTPutAPIChannelPinResult,
} from "../../deps.ts";
import { ActualSnowflake } from "../../../util/util.ts";

/**
 * Interface for textable channels.
 *
 * This includes:
 * - guild text
 * - dm
 * - group dm
 * - news (announcements)
 * - public thread
 * - private thread
 */
export interface Textable {
  /**
   * https://discord.dev/resources/channel#get-channel-messages
   *
   * Returns the messages for a channel. If operating on a guild channel, this
   * endpoint requires the `VIEW_CHANNEL` permission to be present on the current
   * user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in
   * the channel then this will return no messages (since they cannot read the
   * message history). Returns an array of
   * [message](https://discord.dev/resources/channel#message-object) objects on success.
   *
   * > ℹ️ The before, after, and around keys are mutually exclusive, only one may
   * > be passed at a time.
   */
  getMessages(
    /* getChannelMessages */
    query: RESTGetAPIChannelMessagesQuery,
  ): Promise<RESTGetAPIChannelMessagesResult>;

  /**
   * https://discord.dev/resources/channel#get-channel-message
   *
   * Returns a specific message in the channel. If operating on a guild channel, this
   * endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the
   * current user. Returns a [message](https://discord.dev/resources/channel#message-object) object
   * on success.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  getMessage(
    /* getChannelMessage */
    messageID: ActualSnowflake,
  ): Promise<RESTGetAPIChannelMessageResult>;

  /**
   * https://discord.dev/resources/channel#create-message
   *
   * > ⚠️ Before using this endpoint, you must connect to and identify with a
   * > [gateway](https://discord.dev/topics/gateway#gateways) at least once.
   *
   * > ⚠️ Discord may strip certain characters from message content, like invalid
   * > unicode characters or characters which cause unexpected message formatting. If
   * > you are passing user-generated strings into message content, consider
   * > sanitizing the data to prevent unexpected behavior and utilizing
   * > `allowed_mentions` to prevent unexpected mentions.
   *
   * Post a message to a guild text or DM channel. Returns a
   * [message](https://discord.dev/resources/channel#message-object) object. Fires a
   * [Message Create](https://discord.dev/topics/gateway#message-create) Gateway event. See
   * [message formatting](https://discord.dev/reference#message-formatting) for more information on
   * how to properly format messages.
   */
  createMessage(
    data: RESTPostAPIChannelMessageJSONBody,
    files?: File[],
  ): Promise<RESTPostAPIChannelMessageResult>;

  /**
   * https://discord.dev/resources/channel#crosspost-message
   *
   * Crosspost a message in a News Channel to following channels. This endpoint
   * requires the 'SEND_MESSAGES' permission, if the current user sent the message,
   * or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be
   * present for the current user.
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  crosspostMessage(
    messageID: ActualSnowflake,
  ): Promise<RESTPostAPIChannelMessageCrosspostResult>;

  /**
   * https://discord.dev/resources/channel#create-reaction
   *
   * Create a reaction for the message. This endpoint requires the
   * 'READ_MESSAGE_HISTORY' permission to be present on the current user.
   * Additionally, if nobody else has reacted to the message using this emoji, this
   * endpoint requires the 'ADD_REACTIONS' permission to be present on the current
   * user. Returns a 204 empty response on success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  createReaction(
    messageID: ActualSnowflake,
    emoji: string,
  ): Promise<RESTPutAPIChannelMessageReactionResult>;

  /**
   * https://discord.dev/resources/channel#delete-own-reaction
   *
   * Delete a reaction the current user has made for the message. Returns a 204 empty
   * response on success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteOwnReaction(
    messageID: ActualSnowflake,
    emoji: string,
  ): Promise<RESTDeleteAPIChannelMessageOwnReaction>;

  /**
   * https://discord.dev/resources/channel#delete-user-reaction
   *
   * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES'
   * permission to be present on the current user. Returns a 204 empty response on
   * success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  deleteUserReaction(
    messageID: ActualSnowflake,
    emoji: string,
    userID: ActualSnowflake,
  ): Promise<RESTDeleteAPIChannelMessageUserReactionResult>;

  /**
   * https://discord.dev/resources/channel#get-reactions
   *
   * Get a list of users that reacted with this emoji. Returns an array of
   * [user](https://discord.dev/resources/user#user-object) objects on success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  getReactions(
    messageID: ActualSnowflake,
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ): Promise<RESTGetAPIChannelMessageReactionUsersResult>;

  /**
   * https://discord.dev/resources/channel#delete-all-reactions
   *
   * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES'
   * permission to be present on the current user. Fires a
   * [Message Reaction Remove All](https://discord.dev/topics/gateway#message-reaction-remove-all)
   * Gateway event.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deleteAllReactions(
    messageID: ActualSnowflake,
  ): Promise<RESTDeleteAPIChannelAllMessageReactionsResult>;

  /**
   * https://discord.dev/resources/channel#delete-all-reactions-for-emoji
   *
   * Deletes all the reactions for a given emoji on a message. This endpoint requires
   * the `MANAGE_MESSAGES` permission to be present on the current user. Fires a
   * [Message Reaction Remove Emoji](https://discord.dev/topics/gateway#message-reaction-remove-emoji)
   * Gateway event. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteAllReactionsForEmoji(
    messageID: ActualSnowflake,
    emoji: string,
  ): Promise<RESTDeleteAPIChannelMessageReactionResult>;

  /**
   * https://discord.dev/resources/channel#edit-message
   *
   * Edit a previously sent message. The fields `content`, `embed`,
   * `allowed_mentions` and `flags` can be edited by the original message author.
   * Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES`
   * permission in the corresponding channel. When specifying flags, ensure to
   * include all previously set flags/bits in addition to ones that you are
   * modifying. Only `flags` documented in the table below may be modified by users
   * (unsupported flag changes are currently ignored without error).
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object. Fires a
   * [Message Update](https://discord.dev/topics/gateway#message-update) Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  editMessage(
    messageID: ActualSnowflake,
    data: RESTPatchAPIChannelMessageJSONBody,
  ): Promise<RESTPatchAPIChannelMessageResult>;

  /**
   * https://discord.dev/resources/channel#delete-message
   *
   * Delete a message. If operating on a guild channel and trying to delete a message
   * that was not sent by the current user, this endpoint requires the
   * `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a
   * [Message Delete](https://discord.dev/topics/gateway#message-delete) Gateway event.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deleteMessage(
    messageID: ActualSnowflake,
  ): Promise<RESTDeleteAPIChannelMessageResult>;

  /**
   * https://discord.dev/resources/channel#bulk-delete-messages
   *
   * Delete multiple messages in a single request. This endpoint can only be used on
   * guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204
   * empty response on success. Fires a
   * [Message Delete Bulk](https://discord.dev/topics/gateway#message-delete-bulk) Gateway event.
   *
   * Any message IDs given that do not exist or are invalid will count towards the
   * minimum and maximum message count (currently 2 and 100 respectively).
   *
   * > ⚠️ This endpoint will not delete messages older than 2 weeks, and will fail
   * > with a 400 BAD REQUEST if any message provided is older than that or if any
   * > duplicate message IDs are provided.
   */
  bulkDeleteMessages(
    data: RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  ): Promise<RESTPostAPIChannelMessagesBulkDeleteResult>;

  /**
   * https://discord.dev/resources/channel#trigger-typing-indicator
   *
   * Post a typing indicator for the specified channel. Generally bots should **not**
   * implement this route. However, if a bot is responding to a command and expects
   * the computation to take a few seconds, this endpoint may be called to let the
   * user know that the bot is processing their message. Returns a 204 empty response
   * on success. Fires a [Typing Start](https://discord.dev/topics/gateway#typing-start) Gateway
   * event.
   */
  triggerTypingIndicator(): Promise<RESTPostAPIChannelTypingResult>;

  /**
   * https://discord.dev/resources/channel#get-pinned-messages
   *
   * Returns all pinned messages in the channel as an array of
   * [message](https://discord.dev/resources/channel#message-object) objects.
   */
  getPinnedMessages(): Promise<RESTGetAPIChannelPinsResult>;

  /**
   * https://discord.dev/resources/channel#add-pinned-channel-message
   *
   * Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a
   * 204 empty response on success.
   *
   * > ⚠️ The max pinned messages is 50.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  pinMessage(
    /* addPinnedChannelMessage */
    messageID: ActualSnowflake,
    reason?: string,
  ): Promise<RESTPutAPIChannelPinResult>;

  /**
   * https://discord.dev/resources/channel#delete-pinned-channel-message
   *
   * Delete a pinned message in a channel. Requires the `MANAGE_MESSAGES` permission.
   * Returns a 204 empty response on success.
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  unpinMessage(
    /* deletePinnedChannelMessage */
    messageID: ActualSnowflake,
    reason?: string,
  ): Promise<RESTDeleteAPIChannelPinResult>;
}

export default Textable;
