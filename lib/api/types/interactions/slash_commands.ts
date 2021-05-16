// deno-lint-ignore-file camelcase

// https://discord.dev/interactions/slash-commands

import type { Snowflake } from "../reference.ts";
import type {
  AllowedMentions,
  Channel,
  Embed,
  Message,
} from "../resources/channel.ts";
import type { GuildMember } from "../resources/guild.ts";
import type { User } from "../resources/user.ts";
import type {
  EditWebhookMessageJSON,
  ExecuteWebhookJSON,
  GetWebhookMessageBody,
} from "../resources/webhook.ts";
import type { Role } from "../topics/permissions.ts";
import type { Nullify } from "../util.ts";

/** https://discord.dev/interactions/slash-commands#get-global-application-commands */
export type GetGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateGlobalApplicationCommandJSON = Omit<
  ApplicationCommand,
  "id" | "application_id"
>;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type GetGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditGlobalApplicationCommandJSON = Partial<
  Nullify<CreateGlobalApplicationCommandJSON, "options">
>;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#delete-global-application-command */
export type DeleteGlobalApplicationCommandBody = void;

/** https://discord.dev/interactions/slash-commands#get-guild-application-commands */
export type GetGuildApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type BulkOverwriteGlobalApplicationCommandsJSON = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#bulk-overwrite-global-application-commands */
export type BulkOverwriteGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateGuildApplicationCommandJSON =
  CreateGlobalApplicationCommandJSON;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateGuildApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type GetGuildApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditGuildApplicationCommandJSON = EditGlobalApplicationCommandJSON;

/** https://discord.dev/interactions/slash-commands#delete-guild-application-command */
export type DeleteGuildApplicationCommandBody = void;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type BulkOverwriteGuildApplicationCommandsJSON = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type BulkOverwriteGuildApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateInteractionResponseJSON = InteractionResponse;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateInteractionResponseBody = void;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type GetOriginalInteractionResponseBody = GetWebhookMessageBody;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditOriginalInteractionResponseJSON = EditWebhookMessageJSON;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditOriginalInteractionResponseBody = Message;

/** https://discord.dev/interactions/slash-commands#delete-original-interaction-response */
export type DeleteOriginalInteractionResponse = void;

/** https://discord.dev/interactions/slash-commands#create-followup-message */
export type CreateFollowupMessageJSON = ExecuteWebhookJSON;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateFollowupMessageBody = Message;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditFollowupMessageJSON = EditWebhookMessageJSON;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type EditFollowupMessageBody = Message;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type DeleteFollowupMessageBody = void;

/** https://discord.dev/interactions/slash-commands#get-guild-application-command-permissions */
export type GetGuildApplicationCommandPermissionsBody =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#get-application-command-permissions */
export type GetApplicationCommandPermissions =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#edit-application-command-permissions */
export interface EditApplicationCommandPermissionsJSON {
  /** the permissions for the command in the guild */
  permissions: ApplicationCommandPermissions[];
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type BatchEditApplicationCommandPermissions =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommand {
  /** unique id of the command */
  id: Snowflake;
  /** unique id of the parent application */
  application_id: Snowflake;
  /** 1-32 lowercase character name matching `^[\w-]{1,32}$` */
  name: string;
  /** 1-100 character description */
  description: string;
  /** the parameters for the command */
  options?: ApplicationCommandOption[];
  /** whether the command is enabled by default when the app is added to a guild */
  default_permission?: boolean;
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommandOption {
  /** value of [ApplicationCommandOptionType](https://discord.dev/interactions/slash-commands#applicationcommandoptiontype) */
  type: ApplicationCommandOptionType;
  /** 1-32 lowercase character name matching `^[\w-]{1,32}$` */
  name: string;
  /** 1-100 character description */
  description: string;
  /** if the parameter is required or optional--default `false` */
  required?: boolean;
  /** choices for `string` and `int` types for the user to pick from */
  choices?: ApplicationCommandOptionChoice[];
  /** if the option is a subcommand or subcommand group type, this nested options will be the parameters */
  options?: ApplicationCommandOption[];
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export enum ApplicationCommandOptionType {
  SubCommand = 1,
  SubCommandGroup,
  String,
  Integer,
  Boolean,
  User,
  Channel,
  Role,
  Mentionable,
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommandOptionChoice {
  /** 1-100 character choice name */
  name: string;
  /** value of the choice, up to 100 characters if string */
  value: string | number;
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface GuildApplicationCommandPermissions {
  /** the id of the command */
  id: Snowflake;
  /** the id of the application the command belongs to */
  application_id: Snowflake;
  /** the id of the guild */
  guild_id: Snowflake;
  /** the permissions for the command in the guild */
  permissions: ApplicationCommandPermissions[];
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommandPermissions {
  /** the id of the role or user */
  id: Snowflake;
  /** role or user */
  type: ApplicationCommandPermissionType;
  /** `true` to allow, `false`, to disallow */
  permission: boolean;
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export enum ApplicationCommandPermissionType {
  Role = 1,
  User,
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface Interaction {
  /** id of the interaction */
  id: Snowflake;
  /** id of the application this interaction is for */
  application_id: Snowflake;
  /** the type of interaction */
  type: InteractionType;
  /** the command data payload */
  data?: ApplicationCommandInteractionData;
  /** the guild it was sent from */
  guild_id?: Snowflake;
  /** the channel it was sent from */
  channel_id?: Snowflake;
  /** guild member data for the invoking user, including permissions */
  member?: GuildMember;
  /** user object for the invoking user, if invoked in a DM */
  user?: User;
  /** a continuation token for responding to the interaction */
  token: string;
  /** ead-only property, always `1` */
  version: number;
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export enum InteractionType {
  Ping = 1,
  ApplicationCommand,
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommandInteractionData {
  /** the ID of the invoked command */
  id: Snowflake;
  /** the name of the invoked command */
  name: string;
  /** converted users + roles + channels */
  resolved?: ApplicationCommandInteractionDataResolved;
  /** the params + values from the user */
  options?: ApplicationCommandInteractionDataOption[];
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommandInteractionDataResolved {
  /** the IDs and User objects */
  users?: Record<Snowflake, User>[];
  /** the IDs and partial Member objects */
  members?: Record<Snowflake, GuildMember>[];
  /** the IDs and Role objects */
  roles?: Record<Snowflake, Role>[];
  /** the IDs and partial Channel objects */
  channels?: Record<Snowflake, Channel>[];
}

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export interface ApplicationCommandInteractionDataOption {
  /** the name of the parameter */
  name: string;
  /** value of [ApplicationCommandOptionType](https://discord.dev/interactions/slash-commands#applicationcommandoptiontype) */
  type: ApplicationCommandOptionType;
  /** the value of the pair */
  value?: string | number;
  /** present if this option is a group or subcommand */
  options?: ApplicationCommandInteractionDataOption[];
}

/** https://discord.dev/interactions/slash-commands#interaction-response */
export interface InteractionResponse {
  /** the type of response */
  type: InteractionCallbackType;
  /** an optional response message */
  data?: InteractionApplicationCOmmandCallbackData;
}

/** https://discord.dev/interactions/slash-commands#interaction-response-interactioncallbacktype */
export enum InteractionCallbackType {
  /** ACK a `Ping` */
  Pong = 1,
  /** respond to an interaction with a message */
  ChannelMessageWithSource = 4,
  /** ACK an interaction and edit a response later, the user sees a loading state */
  DeferredChannelMessageWithSource,
}

/** https://discord.dev/interactions/slash-commands#interaction-response-interactionapplicationcommandcallbackdata */
export interface InteractionApplicationCOmmandCallbackData {
  /** is the response TTS */
  tts?: boolean;
  /** message content */
  content?: string;
  /** supports up to 10 embeds */
  embeds?: Embed[];
  /** [allowed mentions](https://discord.dev/resources/channel#allowed-mentions-object) object */
  allowed_mentions?: AllowedMentions;
  /** set to `64` to make your response ephemeral */
  flags?: 64;
}

/** https://discord.dev/interactions/slash-commands#messageinteraction */
export interface MessageInteraction {
  /** id of the interaction */
  id: Snowflake;
  /** the type of interaction */
  type: InteractionType;
  /** the name of the [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) */
  name: string;
  /** the user who invoked the interaction */
  user: User;
}
