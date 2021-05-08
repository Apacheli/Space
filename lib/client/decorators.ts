import { PermissionFlagsBits } from "./deps.ts";
import { PermissionsError, RESTClient } from "./mod.ts";
import type { GuildChannel } from "../structures/mod.ts";
import type { ActualSnowflake } from "../util/util.ts";
import { computePermissions } from "./permissions.ts";

export const channelPermissionsDecorator = (
  permissions: PermissionFlagsKeys[],
) =>
  (_target: unknown, _key: string, descriptor: PropertyDescriptor) => {
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

type PermissionFlagsKeys = keyof typeof PermissionFlagsBits;

const computeMissingPermissions = (
  currentUserPermissions: bigint,
  permissions: PermissionFlagsKeys[],
) =>
  permissions.filter((permission) =>
    (currentUserPermissions & PermissionFlagsBits[permission]) !==
      PermissionFlagsBits[permission]
  );
