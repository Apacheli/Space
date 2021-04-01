import { APIChannel } from "../../deps.ts";
import Channel from "./channel.ts";

export class DMChannel extends Channel {
  lastMessageID?: bigint | null;
  lastPinTimestamp: APIChannel["last_pin_timestamp"];
  recipients: APIChannel["recipients"];

  update(data: APIChannel) {
    super.update(data);

    this.lastMessageID = data.last_message_id && BigInt(data.last_message_id);
    this.lastPinTimestamp = data.last_pin_timestamp;
    this.recipients = data.recipients;
  }
}

export default DMChannel;
