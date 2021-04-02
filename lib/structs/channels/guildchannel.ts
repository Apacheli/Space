import { APIChannel } from "../../../deps.ts";
import Channel from "./channel.ts";
import Client from "../../client/client.ts";

export class GuildChannel extends Channel {
  guildID;

  position: APIChannel["position"];
  permissionOverwrites: APIChannel["permission_overwrites"];
  name: APIChannel["name"];
  nsfw: APIChannel["nsfw"];
  parentID?: bigint | null;

  constructor(data: APIChannel, client: Client) {
    super(data, client);

    this.guildID = data.guild_id && BigInt(data.guild_id);
  }

  update(data: APIChannel) {
    super.update(data);

    this.position = data.position;
    this.permissionOverwrites = data.permission_overwrites;
    this.name = data.name;
    this.nsfw = data.nsfw;
    this.parentID = data.parent_id && BigInt(data.parent_id);
  }
}

export default GuildChannel;
