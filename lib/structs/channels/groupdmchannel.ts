import { APIChannel } from "../../deps.ts";
import DMChannel from "./dmchannel.ts";

export class GroupDMChannel extends DMChannel {
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

export default GroupDMChannel;
