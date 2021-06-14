// deno-lint-ignore-file camelcase

// https://discord.dev/resources/user

import type { Snowflake } from "../reference.ts";
import type { Channel } from "./channel.ts";
import type { Guild, Integration } from "./guild.ts";

/** https://discord.dev/resources/user#user-object */
export interface User {
  /** the user's id  */
  id: Snowflake;
  /** the user's username, not unique across the platform */
  username: string;
  /** the user's 4-digit discord-tag */
  discriminator: string;
  /** the user's [avatar hash](https://discord.dev/reference#image-formatting) */
  avatar: string | null;
  /** whether the user belongs to an OAuth2 application */
  bot?: boolean;
  /** whether the user is an Official Discord System user (part of the urgent message system) */
  system?: boolean;
  /** whether the user has two factor enabled on their account */
  mfa_enabled?: boolean;
  /** the user's chosen language option */
  locale?: string;
  /** whether the email on this account has been verified */
  verified?: boolean;
  /** the user's email */
  email?: string | null;
  /** the [flags](https://discord.dev/resources/user#user-object-user-flags) on a user's account */
  flags?: UserFlags;
  /** the [type of Nitro subscription](https://discord.dev/resources/user#user-object-premium-types) on a user's account */
  premium_type?: PremiumTypes;
  /** the public [flags](https://discord.dev/resources/user#user-object-user-flags) on a user's account */
  public_flags?: UserFlags;
}

/** https://discord.dev/resources/user#user-object-user-flags */
export enum UserFlags {
  None,
  DiscordEmployee = 1 << 0,
  PartneredServerOwner = 1 << 1,
  HypeSquadEvents = 1 << 2,
  BugHunterLevel1 = 1 << 3,
  HouseBravery = 1 << 6,
  HouseBrilliance = 1 << 7,
  HouseBalance = 1 << 8,
  EarlySupporter = 1 << 9,
  TeamUser = 1 << 10,
  BugHunterLevel2 = 1 << 14,
  VerifiedBot = 1 << 16,
  EarlyVerifiedBotDeveloper = 1 << 17,
  DiscordCertifiedModerator = 1 << 18,
}

/** https://discord.dev/resources/user#user-object-premium-types */
export enum PremiumTypes {
  None,
  NitroClassic,
  Nitro,
}

/** https://discord.dev/resources/user#connection-object */
export interface Connection {
  /** id of the connection account */
  id: Snowflake;
  /** the username of the connection account */
  name: string;
  /** the service of the connection (twitch, youtube) */
  type: string;
  /** whether the connection is revoked */
  revoked?: boolean;
  /** an array of partial [server integrations](https://discord.dev/resources/guild#integration-object) */
  integrations?: Integration[];
  /** whether the connection is verified */
  verified: boolean;
  /** whether friend sync is enabled for this connection */
  friend_sync: boolean;
  /** whether activities related to this connection will be shown in presence updates */
  show_activity: boolean;
  /** [visibility](https://discord.dev/resources/user#connection-object-visibility-types) of this connection */
  visibility: VisibilityTypes;
}

/** https://discord.dev/resources/user#connection-object-visibility-types */
export enum VisibilityTypes {
  /** invisible to everyone except the user themselves */
  None,
  /** visible to everyone */
  Everyone,
}

/** https://discord.dev/resources/user#get-current-user */
export type GetCurrentUserBody = User;

/** https://discord.dev/resources/user#get-user */
export type GetUserBody = User;

/** https://discord.dev/resources/user#modify-current-user */
export interface ModifyCurrentUserJSON {
  /** user's username, if changed may cause the user's discriminator to be randomized. */
  username?: string;
  /** if passed, modifies the user's avatar */
  avatar?: string | null;
}

/** https://discord.dev/resources/user#modify-current-user */
export type ModifyCurrentUserBody = User;

/** https://discord.dev/resources/user#get-current-user-guilds */
export interface GetCurrentUserGuildsQuery {
  /** get guilds before this guild ID */
  before?: Snowflake;
  /** get guilds after this guild ID */
  after?: Snowflake;
  /** max number of guilds to return (1-200) */
  limit?: number;
}

/** https://discord.dev/resources/user#get-current-user-guilds */
export type GetCurrentUserGuildsBody = Partial<Guild>[];

/** https://discord.dev/resources/user#leave-guild */
export type LeaveGuildBody = void;

/** https://discord.dev/resources/user#create-dm */
export interface CreateDMJSON {
  /** the recipient to open a DM channel with */
  recipient_id: Snowflake;
}

/** https://discord.dev/resources/user#create-dm */
export type CreateDMBody = Channel;

/** https://discord.dev/resources/user#create-group-dm */
export interface CreateGroupDMJSON {
  /** access tokens of users that have granted your app the `gdm.join` scope */
  access_tokens: string[];
  /** a dictionary of user ids to their respective nicknames */
  nicks: Record<`${Snowflake}`, string>;
}

/** https://discord.dev/resources/user#create-group-dm */
export type CreateGroupDMBody = Channel;

/** https://discord.dev/resources/user#get-user-connections */
export type GetUserConnectionsBody = Connection[];
