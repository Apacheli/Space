// deno-lint-ignore-file camelcase

// https://discord.dev/interactions/slash-commands

import type { Nullify } from "../../../util/src/types.ts";
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
import type { Component, ComponentTypes } from "./message_components.ts";

/** https://discord.dev/interactions/slash-commands#get-global-application-commands */
export type GetGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateGlobalApplicationCommandJSON = Omit<
  ApplicationCommand,
  "id" | "application_id"
>;

/** https://discord.dev/interactions/slash-commands#create-global-application-command */
export type CreateGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#get-global-application-command */
export type GetGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#edit-global-application-command */
export type EditGlobalApplicationCommandJSON = Partial<
  Nullify<CreateGlobalApplicationCommandJSON, "options">
>;

/** https://discord.dev/interactions/slash-commands#edit-global-application-command */
export type EditGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#delete-global-application-command */
export type DeleteGlobalApplicationCommandBody = void;

/** https://discord.dev/interactions/slash-commands#get-guild-application-commands */
export type GetGuildApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#bulk-overwrite-global-application-commands */
export type BulkOverwriteGlobalApplicationCommandsJSON = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#bulk-overwrite-global-application-commands */
export type BulkOverwriteGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-guild-application-command */
export type CreateGuildApplicationCommandJSON =
  CreateGlobalApplicationCommandJSON;

/** https://discord.dev/interactions/slash-commands#create-guild-application-command */
export type CreateGuildApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#get-guild-application-command */
export type GetGuildApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#edit-guild-application-command */
export type EditGuildApplicationCommandJSON = EditGlobalApplicationCommandJSON;

/** https://discord.dev/interactions/slash-commands#edit-guild-application-command */
export type EditGuildApplicationCommandBody = ApplicationCommand;

/** https://discord.dev/interactions/slash-commands#delete-guild-application-command */
export type DeleteGuildApplicationCommandBody = void;

/** https://discord.dev/interactions/slash-commands#bulk-overwrite-guild-application-commands */
export type BulkOverwriteGuildApplicationCommandsJSON = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#bulk-overwrite-guild-application-commands */
export type BulkOverwriteGuildApplicationCommandsBody = ApplicationCommand[];

/** https://discord.dev/interactions/slash-commands#create-interaction-response */
export type CreateInteractionResponseJSON = InteractionResponse;

/** https://discord.dev/interactions/slash-commands#create-interaction-response */
export type CreateInteractionResponseBody = void;

/** https://discord.dev/interactions/slash-commands#get-original-interaction-response */
export type GetOriginalInteractionResponseBody = GetWebhookMessageBody;

/** https://discord.dev/interactions/slash-commands#edit-original-interaction-response */
export type EditOriginalInteractionResponseJSON = EditWebhookMessageJSON;

/** https://discord.dev/interactions/slash-commands#edit-original-interaction-response */
export type EditOriginalInteractionResponseBody = Message;

/** https://discord.dev/interactions/slash-commands#delete-original-interaction-response */
export type DeleteOriginalInteractionResponseBody = void;

/** https://discord.dev/interactions/slash-commands#create-followup-message */
export type CreateFollowupMessageJSON = ExecuteWebhookJSON;

/** https://discord.dev/interactions/slash-commands#create-followup-message */
export type CreateFollowupMessageBody = Message;

/** https://discord.dev/interactions/slash-commands#edit-followup-message */
export type EditFollowupMessageJSON = EditWebhookMessageJSON;

/** https://discord.dev/interactions/slash-commands#edit-followup-message */
export type EditFollowupMessageBody = Message;

/** https://discord.dev/interactions/slash-commands#delete-followup-message */
export type DeleteFollowupMessageBody = void;

/** https://discord.dev/interactions/slash-commands#get-guild-application-command-permissions */
export type GetGuildApplicationCommandPermissionsBody =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#get-application-command-permissions */
export type GetApplicationCommandPermissionsBody =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#edit-application-command-permissions */
export interface EditApplicationCommandPermissionsJSON {
  /** the permissions for the command in the guild */
  permissions: ApplicationCommandPermissions[];
}

/** https://discord.dev/interactions/slash-commands#edit-application-command-permissions */
export type EditApplicationCommandPermissionsBody =
  GuildApplicationCommandPermissions;

/** https://discord.dev/interactions/slash-commands#batch-edit-application-command-permissions */
export type BatchEditApplicationCommandPermissionsJSON =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#batch-edit-application-command-permissions */
export type BatchEditApplicationCommandPermissionsBody =
  GuildApplicationCommandPermissions[];

/** https://discord.dev/interactions/slash-commands#application-command-object */
export interface ApplicationCommand {
  /** unique id of the command */
  id: Snowflake;
  /** unique id of the parent application */
  application_id: Snowflake;
  /** guild id of the command, if not global */
  guild_id?: boolean;
  /** 1-32 lowercase character name matching `^[\w-]{1,32}$` */
  name: string;
  /** 1-100 character description */
  description: string;
  /** the parameters for the command */
  options?: ApplicationCommandOption[];
  /** whether the command is enabled by default when the app is added to a guild */
  default_permission?: boolean;
}

/** https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-structure */
export interface ApplicationCommandOption {
  /** value of [application command option type](https://discord.dev/interactions/slash-commands#application-command-object-application-command-option-type) */
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

/** https://discord.dev/interactions/slash-commands#application-command-object-application-command-option-type */
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

/** https://discord.dev/interactions/slash-commands#application-command-object-application-command-option-choice-structure */
export interface ApplicationCommandOptionChoice {
  /** 1-100 character choice name */
  name: string;
  /** value of the choice, up to 100 characters if string */
  value: string | number;
}

/** https://discord.dev/interactions/slash-commands#application-command-permissions-object */
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

/** https://discord.dev/interactions/slash-commands#application-command-permissions-object-application-command-permissions-structure */
export interface ApplicationCommandPermissions {
  /** the id of the role or user */
  id: Snowflake;
  /** role or user */
  type: ApplicationCommandPermissionType;
  /** `true` to allow, `false`, to disallow */
  permission: boolean;
}

/** https://discord.dev/interactions/slash-commands#application-command-permissions-object-application-command-permission-type */
export enum ApplicationCommandPermissionType {
  Role = 1,
  User,
}

/** https://discord.dev/interactions/slash-commands#interaction-object */
export interface Interaction {
  /** id of the interaction */
  id: Snowflake;
  /** id of the application this interaction is for */
  application_id: Snowflake;
  /** the type of interaction */
  type: InteractionRequestType;
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
  /** for components, the message they were attached to */
  message?: Message;
}

/** https://discord.dev/interactions/slash-commands#interaction-object-interaction-request-type */
export enum InteractionRequestType {
  Ping = 1,
  ApplicationCommand,
  MessageComponent,
}

/** https://discord.dev/interactions/slash-commands#interaction-object-application-command-interaction-data-structure */
export interface ApplicationCommandInteractionData {
  /** the ID of the invoked command */
  id: Snowflake;
  /** the name of the invoked command */
  name: string;
  /** converted users + roles + channels */
  resolved?: ApplicationCommandInteractionDataResolved;
  /** the params + values from the user */
  options?: ApplicationCommandInteractionDataOption[];
  /** for components, the [`custom_id`](https://discord.dev/interactions/message-components#custom-id) of the component */
  custom_id: string;
  /** the [type](https://discord.dev/interactions/message-components#component-object-component-types) of the component */
  component_type: ComponentTypes;
}

/** https://discord.dev/interactions/slash-commands#interaction-object-application-command-interaction-data-resolved-structure */
export interface ApplicationCommandInteractionDataResolved {
  /** the IDs and User objects */
  users?: Record<Snowflake, User>;
  /** the IDs and partial Member objects */
  members?: Record<Snowflake, GuildMember>;
  /** the IDs and Role objects */
  roles?: Record<Snowflake, Role>;
  /** the IDs and partial hannel objects */
  channels?: Record<Snowflake, Channel>;
}

/** https://discord.dev/interactions/slash-commands#interaction-object-application-command-interaction-data-option-structure */
export interface ApplicationCommandInteractionDataOption {
  /** the name of the parameter */
  name: string;
  /** value of [application command option type](https://discord.dev/interactions/slash-commands#application-command-object-application-command-option-type) */
  type: ApplicationCommandOptionType;
  /** the value of the pair */
  value?: string | number;
  /** present if this option is a group or subcommand */
  options?: ApplicationCommandInteractionDataOption[];
}

/** https://discord.dev/interactions/slash-commands#interaction-response-object */
export interface InteractionResponse {
  /** the type of response */
  type: InteractionCallbackType;
  /** an optional response message */
  data?: InteractionApplicationCommandCallbackData;
}

/** https://discord.dev/interactions/slash-commands#interaction-response-object-interaction-callback-type */
export enum InteractionCallbackType {
  /** ACK a `Ping` */
  Pong = 1,
  /** respond to an interaction with a message */
  ChannelMessageWithSource = 4,
  /** ACK an interaction and edit a response later, the user sees a loading state */
  DeferredChannelMessageWithSource,
  /** for components, ACK an interaction and edit the original message later; the user sees a loading state */
  DeferredUpdateMessage,
  /** for components, edit the message the component was attached to */
  UpdateMessage,
}

/** https://discord.dev/interactions/slash-commands#interaction-response-object-interaction-application-command-callback-data-structure */
export interface InteractionApplicationCommandCallbackData {
  /** is the response TTS */
  tts?: boolean;
  /** message content */
  content?: string;
  /** supports up to 10 embeds */
  embeds?: Embed[];
  /** [allowed mentions](https://discord.dev/resources/channel#allowed-mentions-object) object */
  allowed_mentions?: AllowedMentions;
  /** [interaction application command callback data flags](https://discord.dev/interactions/slash-commands#interaction-response-object-interaction-application-command-callback-data-flags) */
  flags?: InteractionApplicationCommandCallbackDataFlags;
  /** message components */
  components?: Component[];
}

/** https://discord.dev/interactions/slash-commands#interaction-response-object-interaction-application-command-callback-data-flags */
export enum InteractionApplicationCommandCallbackDataFlags {
  /** only the user receiving the message can see it */
  Ephemeral = 1 << 6,
}

/** https://discord.dev/interactions/slash-commands#message-interaction-object */
export interface MessageInteraction {
  /** id of the interaction */
  id: Snowflake;
  /** the type of interaction */
  type: InteractionRequestType;
  /** the name of the [application command](https://discord.dev/interactions/slash-commands#application-command-object) */
  name: string;
  /** the user who invoked the interaction */
  user: User;
}
