import { Guild, GuildChannel, Member } from "../structures/mod.ts";
import { PermissionFlagsBits } from "./deps.ts";

export const ALL = Object.values(PermissionFlagsBits).reduce((a, b) => a | b);

export const computeBasePermissions = async (member: Member, guild: Guild) => {
  if (member.id === guild.ownerID) {
    return ALL;
  }
  let permissions = (await guild.roles?.get(guild.id))?.permissions;
  if (!(guild.roles && permissions && member.roles)) {
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

export const computeOverwrites = (
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
  if (!(channel.permissionOverwrites && member.roles)) {
    return 0n;
  }
  // let everyoneOverwrite = channel.permissionOverwrites.get(channel.guildID);
  let everyoneOverwrite = channel.permissionOverwrites.find((overwrite) =>
    BigInt(overwrite.id) === channel.guildID
  );
  if (everyoneOverwrite) {
    permissions |= BigInt(everyoneOverwrite.allow);
    permissions &= ~BigInt(everyoneOverwrite.deny);
  }
  let allow = 0n;
  let deny = 0n;
  for (const roleID of member.roles) {
    // // const roleOverwrite = channel.permissionOverwrites.get(roleID;
    const roleOverwrite = channel.permissionOverwrites.find((overwrite) =>
      BigInt(overwrite.id) === roleID
    );
    allow |= roleOverwrite?.allow ? BigInt(roleOverwrite.allow) : 0n;
    deny |= roleOverwrite?.deny ? BigInt(roleOverwrite.deny) : 0n;
  }
  permissions |= allow;
  permissions &= ~deny;
  const memberOverwrite = channel.permissionOverwrites.find((overwrite) =>
    BigInt(overwrite.id) === member.id
  );
  if (memberOverwrite) {
    permissions |= BigInt(memberOverwrite.allow);
    permissions &= ~BigInt(memberOverwrite.deny);
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
