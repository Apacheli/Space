import { APIChannel } from "../../../deps.ts";
import Struct from "../struct.ts";
import Client from "../../client/client.ts";

/**
 * Class representing a channel on Discord.
 */
export class Channel extends Struct {
  /**
   * the [type of channel](https://discord.dev/resources/channel#channel-object-channel-types)
   */
  type;

  constructor(data: APIChannel, client: Client) {
    super(data, client);

    client.channels?.update(this);

    this.type = data.type;
  }

  get mention() {
    return `<#${this.id}>`;
  }
}

export default Channel;
