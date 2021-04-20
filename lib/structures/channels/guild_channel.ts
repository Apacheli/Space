import { APIChannel, APIOverwrite } from "../deps.ts";
import Channel from "./channel.ts";
import Client from "../../client/client.ts";
import { Cache, computePermissions, Storable } from "../../util/mod.ts";
import { Member } from "../mod.ts";

/**
 * Class representing a guild channel on Discord.
 */
export class GuildChannel extends Channel {
  /**
   * the id of the guild
   */
  guildID;
  /**
   * sorting position of the channel
   */
  position: APIChannel["position"];
  /**
   * explicit permission overwrites for members and roles
   */
  permissionOverwrites!: Storable<APIOverwrite>;
  /**
   * the name of the channel (2-100 characters)
   */
  name: APIChannel["name"];
  /**
   * whether the channel is nsfw
   */
  nsfw: APIChannel["nsfw"];
  /**
   * id of the parent category for a channel (each parent category can contain
   * up to 50 channels)
   */
  parentID?: bigint | null;

  constructor(data: APIChannel, client: Client) {
    super(data, client);

    this.guildID = data.guild_id && BigInt(data.guild_id);
  }

  update(data: APIChannel) {
    super.update(data);

    this.position = data.position;
    this.permissionOverwrites = new Cache<APIOverwrite>();
    data.permission_overwrites?.forEach((overwrite) =>
      this.permissionOverwrites.add(overwrite)
    );
    this.name = data.name;
    this.nsfw = data.nsfw;
    this.parentID = data.parent_id && BigInt(data.parent_id);
  }

  getParentChannel() {
    return this.parentID ? this.client.channels?.get(this.parentID) : null;
  }

  /**
   * Computes a member's permissions and overwrites. If you don't need to check
   * for overwrites, use `Guild.computePermissions` without passing `channel`.
   */
  async computePermissions(member: Member) {
    const guild = this.guildID && await this.client.guilds?.get(this.guildID);
    return guild ? computePermissions(member, guild, this) : 0n;
  }
}

export default GuildChannel;
