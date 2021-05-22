import { PermissionFlagsBits } from "./deps.ts";
import { PermissionsError, RESTClient } from "./mod.ts";
import type { GuildChannel } from "../structures/mod.ts";
import type { ActualSnowflake } from "../util/mod.ts";
import { computePermissions } from "./permissions.ts";

export const channelPermissionsDecorator = (permissions: PermissionKeys[]) =>
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

export const guildPermissionsDecorator = (permissions: PermissionKeys[]) =>
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

export type PermissionKeys = keyof typeof PermissionFlagsBits;

export const computeMissingPermissions = (
  currentUserPermissions: bigint,
  permissions: PermissionKeys[],
) =>
  permissions.filter((permission) =>
    (currentUserPermissions & PermissionFlagsBits[permission]) !==
      PermissionFlagsBits[permission]
  );
