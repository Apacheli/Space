import type {
  APIChannel,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
} from "../deps.ts";
import { GuildChannel } from "./guild_channel.ts";
import type { Textable } from "./util/textable.ts";
import type { ActualSnowflake } from "../../util/mod.ts";

/**
 * Class representing a guild text channel on Discord.
 */
export class TextChannel extends GuildChannel implements Textable {
  /**
   * the channel topic (0-1024 characters)
   */
  topic: APIChannel["topic"];
  /**
   * the id of the last message sent in this channel (may not point to an
   * existing or valid message)
   */
  lastMessageID?: bigint | null;
  /**
   * amount of seconds a user has to wait before sending another message
   * (0-21600); bots, as well as users with the permission `manage_messages` or
   * `manage_channel`, are unaffected
  */
  rateLimitPerUser: APIChannel["rate_limit_per_user"];
  /**
   * when the last pinned message was pinned. This may be `null` in events such
   * as `GUILD_CREATE` when a message is not pinned.
   */
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
}
