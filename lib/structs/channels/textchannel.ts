import { APIChannel } from "../../deps.ts";
import GuildChannel from "./guildchannel.ts";

export class TextChannel extends GuildChannel {
  topic: APIChannel["topic"];
  lastMessageID?: bigint | null;
  rateLimitPerUser: APIChannel["rate_limit_per_user"];
  lastPinTimestamp: APIChannel["last_pin_timestamp"];

  update(data: APIChannel) {
    super.update(data);

    this.topic = data.topic;
    this.lastMessageID = data.last_message_id && BigInt(data.last_message_id);
    this.rateLimitPerUser = data.rate_limit_per_user;
    this.lastPinTimestamp = data.last_pin_timestamp;
  }
}

export default TextChannel;
