import type {
  APIChannel,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
} from "../deps.ts";
import { Channel } from "./channel.ts";
import type { Textable } from "./util/textable.ts";
import type { ActualSnowflake } from "../../util/mod.ts";

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
}
