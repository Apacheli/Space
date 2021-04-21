import { APIChannel } from "../deps.ts";
import Structure from "../structure.ts";
import Client from "../../client/client.ts";

/**
 * Class representing a channel on Discord.
 */
export class Channel extends Structure {
  /**
   * the [type of channel](https://discord.dev/resources/channel#channel-object-channel-types)
   */
  type;

  constructor(data: APIChannel, client: Client) {
    super(data, client);

    this.type = data.type;
  }

  get mention() {
    return `<#${this.id}>`;
  }
}
