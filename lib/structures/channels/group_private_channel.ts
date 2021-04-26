import type { APIChannel } from "../deps.ts";
import { PrivateChannel } from "./private_channel.ts";

/**
 * Class representing a group DM channel on Discord.
 */
export class GroupPrivateChannel extends PrivateChannel {
  /**
   * icon hash
   */
  icon?: APIChannel["icon"];
  /**
   * id of the DM creator
   */
  ownerID?: bigint;
  /**
   * application id of the group DM creator if it is bot-created
   */
  applicationID?: bigint;

  update(data: APIChannel) {
    super.update(data);

    this.icon = data.icon;
    this.ownerID = data.owner_id && BigInt(data.owner_id);
    this.applicationID = data.application_id && BigInt(data.application_id);
  }
}
