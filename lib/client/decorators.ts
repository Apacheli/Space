import { PermissionFlagsBits } from "./deps.ts";
import { PermissionsError, RESTClient } from "../client/mod.ts";
import type { GuildChannel } from "../structures/mod.ts";
import type { ActualSnowflake } from "../util/util.ts";
import { computePermissions } from "./permissions.ts";

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
        if (
          (currentUserPermissions & PermissionFlagsBits[permission]) !==
            PermissionFlagsBits[permission]
        ) {
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
