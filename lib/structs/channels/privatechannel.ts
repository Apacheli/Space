import { APIChannel } from "../../../deps.ts";
import Channel from "./channel.ts";

export class PrivateChannel extends Channel {
  lastMessageID?: bigint | null;
  lastPinTimestamp?: number | null;
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

export default PrivateChannel;
