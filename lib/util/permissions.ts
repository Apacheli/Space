import { PermissionFlagsBits } from "./deps.ts";
import { ActualSnowflake } from "./mod.ts";
import { RESTClient } from "../client/rest_client.ts";
import { Guild, GuildChannel, Member } from "../structures/mod.ts";

export const ALL = Object.values(PermissionFlagsBits).reduce((a, b) => a | b);

export const computeBasePermissions = async (member: Member, guild: Guild) => {
  if (member.id === guild.ownerID) {
    return ALL;
  }
  let permissions = 0n;
  for (const roleID of [guild.id, ...member.roles ?? []]) {
    permissions |= (await guild.roles?.get(roleID))?.permissions ?? 0n;
  }
  return (permissions & PermissionFlagsBits.ADMINISTRATOR) ===
      PermissionFlagsBits.ADMINISTRATOR
    ? ALL
    : permissions;
};

export const computeOverwrites = async (
  permissions: bigint,
  member: Member,
  channel: GuildChannel,
) => {
  if (
    (permissions & PermissionFlagsBits.ADMINISTRATOR) ===
      PermissionFlagsBits.ADMINISTRATOR
  ) {
    return ALL;
  }
  const overwriteIDs = [...member.roles ?? [], member.id];
  if (channel.guildID) {
    overwriteIDs.push(channel.guildID);
  }
  for (const overwriteID of overwriteIDs) {
    const overwrite = await channel.permissionOverwrites?.get(overwriteID);
    if (overwrite) {
      permissions |= BigInt(overwrite.allow) & ~BigInt(overwrite.deny);
    }
  }
  return permissions;
};

export const computePermissions = async (
  member: Member,
  guild: Guild,
  channel?: GuildChannel,
) => {
  const basePermissions = await computeBasePermissions(member, guild);
  return channel
    ? computeOverwrites(basePermissions, member, channel)
    : basePermissions;
};

export const channelPermissionsDecorator = (permissions: bigint) => {
  return (_target: any, _key: any, descriptor: any) => {
    const method = descriptor.value;
    descriptor.value = async function (
      this: RESTClient,
      channelID: ActualSnowflake,
      ...args: unknown[]
    ) {
      const channel = await this.client.channels?.get(channelID);
      if (
        !(channel instanceof GuildChannel && channel.guildID &&
          this.client.user)
      ) {
        return method(channelID, ...args);
      }
      const guild = await this.client.guilds?.get(channel.guildID);
      const member = await guild?.members?.get(this.client.user.id);
      if (!(member && await channel.computeOverwrites(member) & ~permissions)) {
        throw new Error("INVALID PERMISSIONS");
      }
      return method(channelID, ...args);
    };
  };
};
