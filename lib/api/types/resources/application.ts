// deno-lint-ignore-file camelcase

// https://discord.dev/resources/application

import type { Snowflake } from "../reference.ts";
import type { User } from "./user.ts";

/** https://discord.dev/resources/application#application-object */
export interface Application {
  /** the id of the app */
  id: Snowflake;
  /** the name of the app */
  name: string;
  /** the [icon hash](https://discord.dev/reference#image-formatting) of the app */
  icon: string | null;
  /** the description of the app */
  description: string;
  /** an array of rpc origin urls, if rpc is enabled */
  rpc_origins?: string[];
  /** when false only app owner can join the app's bot to guilds */
  bot_public: boolean;
  /** when true the app's bot will only join upon completion of the full oauth2 code grant flow */
  bot_require_code_grant: boolean;
  /** the url of the app's terms of service */
  terms_of_service_url?: string;
  /** the url of the app's privacy policy */
  privacy_policy_url?: string;
  /** partial user object containing info on the owner of the application */
  owner: Partial<User>;
  /** if this application is a game sold on Discord, this field will be the summary field for the store page of its primary sku */
  summary: string;
  /** the hex encoded key for verification in interactions and the GameSDK's [GetTicket](https://discord.dev/game-sdk/applications#getticket) */
  verify_key: string;
  /** if the application belongs to a team, this will be a list of the members of that team */
  team: Team | null;
  /** if this application is a game sold on Discord, this field will be the guild to which it has been linked */
  guild_id?: Snowflake;
  /** if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists */
  primary_sky_id?: Snowflake;
  /** if this application is a game sold on Discord, this field will be the URL slug that links to the store page */
  slug?: string;
  /** the application's default rich presence invite [cover image hash](https://discord.dev/reference#image-formatting) */
  cover_image?: string;
  /** the application's public [flags](https://discord.dev/resources/application#application-object-application-flags) */
  flags: ApplicationFlags;
}

/** https://discord.dev/resources/application#application-object-application-flags */
export enum ApplicationFlags {
  GatewayPresence = 1 << 12,
  GatewayPresenceLimited = 1 << 13,
  GatewayGuildMembers = 1 << 14,
  GatewayGuildMembersLimited = 1 << 15,
  VerificationPendingGuildLimit = 1 << 16,
  Embedded = 1 << 17,
}
