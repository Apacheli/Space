import { PermissionFlagsBits } from "./deps.ts";
import { PermissionsError, RESTClient } from "./mod.ts";
import type { GuildChannel } from "../structures/mod.ts";
import type { ActualSnowflake } from "../util/util.ts";
import { computePermissions } from "./permissions.ts";

const channelPermissionsDecorator = (permissions: PermissionFlagsKeys[]) =>
  (_target: unknown, _key: unknown, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function (
      this: RESTClient,
      channelID: ActualSnowflake,
      ...args: unknown[]
    ) {
      const channel = <GuildChannel> await this.client.channels?.get(channelID);
      if (!(channel?.guildID && this.client.user)) {
        return method.call(this, channelID, ...args);
      }
      const guild = await this.client.guilds?.get(channel.guildID);
      const member = await guild?.members?.get(this.client.user.id);
      if (!(member && guild)) {
        return method.call(this, channelID, ...args);
      }
      const missingPermissions = computeMissingPermissions(
        await computePermissions(member, guild, channel),
        permissions,
      );
      if (missingPermissions.length) {
        throw new PermissionsError(missingPermissions);
      }
      return method.call(this, channelID, ...args);
    };
  };

const guildPermissionsDecorator = (permissions: PermissionFlagsKeys[]) =>
  (_target: unknown, _key: unknown, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function (
      this: RESTClient,
      guildID: ActualSnowflake,
      ...args: unknown[]
    ) {
      if (!this.client.user) {
        return method.call(this, guildID, ...args);
      }
      const guild = await this.client.guilds?.get(guildID);
      const member = await guild?.members?.get(this.client.user.id);
      if (!(member && guild)) {
        return method.call(this, guildID, ...args);
      }
      const missingPermissions = computeMissingPermissions(
        await computePermissions(member, guild),
        permissions,
      );
      if (missingPermissions.length) {
        throw new PermissionsError(missingPermissions);
      }
      return method.call(this, guildID, ...args);
    };
  };

export { channelPermissionsDecorator, guildPermissionsDecorator };

export type PermissionFlagsKeys = keyof typeof PermissionFlagsBits;

export const computeMissingPermissions = (
  currentUserPermissions: bigint,
  permissions: PermissionFlagsKeys[],
) =>
  permissions.filter((permission) =>
    (currentUserPermissions & PermissionFlagsBits[permission]) !==
      PermissionFlagsBits[permission]
  );
