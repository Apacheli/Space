import { APIChannel } from "../../deps.ts";
import PrivateChannel from "./privatechannel.ts";

export class GroupPrivateChannel extends PrivateChannel {
  icon?: APIChannel["icon"];
  ownerID?: bigint;
  applicationID?: bigint;

  update(data: APIChannel) {
    super.update(data);

    this.icon = data.icon;
    this.ownerID = data.owner_id && BigInt(data.owner_id);
    this.applicationID = data.application_id && BigInt(data.application_id);
  }
}

export default GroupPrivateChannel;
