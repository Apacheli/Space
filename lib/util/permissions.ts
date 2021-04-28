import { PermissionFlagsBits } from "./deps.ts";
import type { ActualSnowflake } from "./mod.ts";
import PermissionsError from "../client/permissions_error.ts";
import type { RESTClient } from "../client/rest_client.ts";
import type { Guild, GuildChannel, Member } from "../structures/mod.ts";

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
      permissions |= BigInt(overwrite.allow);
      permissions & ~BigInt(overwrite.deny);
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

export const channelPermissionsDecorator = (
  ...permissions: (keyof typeof PermissionFlagsBits)[]
) => {
  return (_target: unknown, _key: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function (
      this: RESTClient,
      channelID: ActualSnowflake,
      ...args: unknown[]
    ) {
      const channel = await this.client.channels?.get(
        channelID,
      ) as GuildChannel;
      if (!(channel?.guildID && this.client.user)) {
        return method.call(this, channelID, ...args);
      }

      const guild = await this.client.guilds?.get(channel.guildID);
      const member = await guild?.members?.get(this.client.user.id);
      if (!(member && guild)) {
        return method.call(this, channelID, ...args);
      }

      const currentUserPermissions = await computePermissions(
        member,
        guild,
        channel,
      );
      const missing = [];
      for (const permission of permissions) {
        if (currentUserPermissions & ~PermissionFlagsBits[permission]) {
          missing.push(permission);
        }
      }
      if (missing.length) {
        throw new PermissionsError(missing);
      }

      return method.call(this, channelID, ...args);
    };
  };
};
