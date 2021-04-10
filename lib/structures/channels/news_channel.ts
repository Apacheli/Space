import { RESTPostAPIChannelFollowersJSONBody } from "../../../deps.ts";
import TextChannel from "./text_channel.ts";

/**
 * Class representing a guild news channel (announcements) on Discord.
 */
export class NewsChannel extends TextChannel {
  /**
   * https://discord.dev/resources/channel#follow-news-channel
   *
   * Follow a News Channel to send messages to a target channel. Requires the
   * `MANAGE_WEBHOOKS` permission in the target channel. Returns a
   * [followed channel](https://discord.dev/resources/channel#followed-channel-object) object.
   */
  followNewsChannel(data: RESTPostAPIChannelFollowersJSONBody) {
    return this.client.rest.followNewsChannel(this.id, data);
  }
}

export default NewsChannel;
