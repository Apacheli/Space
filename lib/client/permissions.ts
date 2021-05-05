import { PermissionFlagsBits } from "./deps.ts";
import type { Guild, GuildChannel, Member } from "../structures/mod.ts";

export type PermissionFlagsKeys = keyof typeof PermissionFlagsBits;
export const PERMISSIONS_ALL = Object
  .values(PermissionFlagsBits)
  .reduce((previous, current) => previous | current);

export const computeBasePermissions = async (member: Member, guild: Guild) => {
  if (member.id === guild.ownerID) {
    return PERMISSIONS_ALL;
  }
  let permissions = 0n;
  for (const roleID of [guild.id, ...member.roles ?? []]) {
    permissions |= (await guild.roles?.get(roleID))?.permissions ?? 0n;
  }
  return (permissions & PermissionFlagsBits.ADMINISTRATOR) ===
      PermissionFlagsBits.ADMINISTRATOR
    ? PERMISSIONS_ALL
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
    return PERMISSIONS_ALL;
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

export const computeMissingPermissions = (
  currentUserPermissions: bigint,
  permissions: PermissionFlagsKeys[],
) =>
  permissions.filter((permission) =>
    (currentUserPermissions & PermissionFlagsBits[permission]) !==
      PermissionFlagsBits[permission]
  );
