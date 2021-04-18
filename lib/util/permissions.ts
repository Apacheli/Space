import { Guild, GuildChannel, Member } from "../structures/mod.ts";
import { PermissionFlagsBits } from "./deps.ts";

export const ALL = Object.values(PermissionFlagsBits).reduce((a, b) => a | b);

export const computeBasePermissions = async (member: Member, guild: Guild) => {
  if (member.id === guild.ownerID) {
    return ALL;
  }
  let permissions = (await guild.roles?.get(guild.id))?.permissions;
  if (!(permissions && guild.roles && member.roles)) {
    return 0n;
  }
  for (const roleID of member.roles) {
    permissions |= (await guild.roles.get(roleID))?.permissions ?? 0n;
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
  if (!(channel.guildID && member.roles)) {
    return 0n;
  }
  for (const overwriteID of [...member.roles, channel.guildID, member.id]) {
    const overwrite = await channel.permissionOverwrites.get(overwriteID);
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
