import type { Permissions, Snowflake } from "../reference.ts";
import type { Application } from "../resources/application.ts";
import type { User } from "../resources/user.ts";

export enum OAuth2Scopes {
  /** allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval */
  ActivitiesRead = "activities.read",
  /** allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR [GAMESDK ACTIVITY MANAGER](https://discord.com/developers/docs/game-sdk/activities)) */
  ActivitiesWrite = "activities.write",
  /** allows your app to read build data for a user's applications */
  ApplicationsBuildsRead = "applications.builds.read",
  /** allows your app to upload/update builds for a user's applications - requires Discord approval */
  ApplicationsBuildsUpload = "applications.builds.upload",
  /** allows your app to use [Slash Commands](https://discord.com/developers/docs/interactions/slash-commands) in a guild */
  ApplicationsCommands = "applications.commands",
  /** allows your app to update its [Slash Commands](https://discord.com/developers/docs/interactions/slash-commands) via this bearer token - [client credentials grant](https://discord.com/developers/docs/topics/oauth2#client-credentials-grant) only */
  ApplicationsCommandsUpdate = "applications.commands.update",
  /** allows your app to read entitlements for a user's applications */
  ApplicationsEntitlements = "applications.entitlements",
  /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications */
  ApplicationsStoreUpdate = "applications.store.update",
  /** for oauth2 bots, this puts the bot in the user's selected guild by default */
  Bot = "bot",
  /** allows [/users/@me/connections](https://discord.com/developers/docs/resources/user#get-user-connections) to return linked third-party accounts */
  Connections = "connections",
  /** enables [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) to return an `email` */
  Email = "email",
  /** allows your app to [join users to a group dm](https://discord.com/developers/docs/resources/channel#group-dm-add-recipient) */
  GDMJoin = "gdm.join",
  /** allows [/users/@me/guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds) to return basic information about all of a user's guilds */
  Guilds = "guilds",
  /** allows [/guilds/{guild.id}/members/{user.id}](https://discord.com/developers/docs/resources/guild#add-guild-member) to be used for joining users to a guild */
  GuildsJoin = "guilds.join",
  /** allows [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) without email */
  Identify = "identify",
  /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates) */
  MessagesRead = "messages.read",
  /** allows your app to know a user's friends and implicit relationships - requires Discord approval */
  RelationshipsRead = "relationships.read",
  /** for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval */
  RPC = "rpc",
  /** for local rpc server access, this allows you to update a user's activity - requires Discord approval */
  RPCActivitiesWrite = "rpc.activities.write",
  /** for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval */
  RPCNotificationsRead = "rpc.notifications.read",
  /** for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval */
  RPCVoiceRead = "rpc.voice.read",
  /** for local rpc server access, this allows you to update a user's voice settings - requires Discord approval */
  RPCVoiceWrite = "rpc.voice.write",
  /** this generates a webhook that is returned in the oauth token response for authorization code grants */
  WebhookIncoming = "webhook.incoming",
}

/** https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow */
export interface BotAuthorizationQuery {
  /** your app's client id */
  client_id: Snowflake;
  /** needs to include `bot` for the bot flow */
  scope: OAuth2Scopes;
  /** the [permissions](https://discord.com/developers/docs/topics/permissions) you're requesting */
  permissions: Permissions;
  /** pre-fills the dropdown picker with a guild for the user */
  guild_id: Snowflake;
  /** `true` or `false`—disallows the user from changing the guild dropdown */
  disable_guild_select: boolean;
}

/** https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information */
export type GetCurrentBotApplicationInformationBody = Application;

/** https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information */
export interface GetCurrentAuthorizationInformationBody {
  /** the current application */
  application: Partial<Application>;
  /** the scopes the user has authorized the application for */
  scopes: OAuth2Scopes[];
  /** when the access token expires */
  expires: string;
  /** the user who has authorized, if the user has authorized with the `identify` scope */
  user?: User;
}
