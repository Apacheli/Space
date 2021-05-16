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

/** https://discord.com/developers/docs/interactions/slash-commands#get-global-application-commands */
export type GetGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command */
export type CreateGlobalApplicationCommandJSON = Omit<
  ApplicationCommand,
  "id" | "application_id"
>;

export type CreateGlobalApplicationCommandBody = ApplicationCommand;

export type GetGlobalApplicationCommandBody = ApplicationCommand;

export type EditGlobalApplicationCommandJSON = Partial<
  Nullify<CreateGlobalApplicationCommandJSON, "options">
>;

export type EditGlobalApplicationCommandBody = ApplicationCommand;

/** https://discord.com/developers/docs/interactions/slash-commands#delete-global-application-command */
export type DeleteGlobalApplicationCommandBody = void;

/** https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-commands */
export type GetGuildApplicationCommandsBody = ApplicationCommand[];

export type BulkOverwriteGlobalApplicationCommandsJSON = ApplicationCommand[];

/** https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-global-application-commands */
export type BulkOverwriteGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command */
export type CreateGuildApplicationCommandJSON =
  CreateGlobalApplicationCommandJSON;

export type CreateGuildApplicationCommandBody = ApplicationCommand;

export type GetGuildApplicationCommandBody = ApplicationCommand;

export type EditGuildApplicationCommandJSON = EditGlobalApplicationCommandJSON;

/** https://discord.com/developers/docs/interactions/slash-commands#delete-guild-application-command */
export type DeleteGuildApplicationCommandBody = void;

export type BulkOverwriteGuildApplicationCommandsJSON = ApplicationCommand[];

export type BulkOverwriteGuildApplicationCommandsBody = ApplicationCommand[];

export type CreateInteractionResponseJSON = InteractionResponse;

export type CreateInteractionResponseBody = void;

export type GetOriginalInteractionResponseBody = GetWebhookMessageBody;

export type EditOriginalInteractionResponseJSON = EditWebhookMessageJSON;

export type EditOriginalInteractionResponseBody = Message;

/** https://discord.com/developers/docs/interactions/slash-commands#delete-original-interaction-response */
export type DeleteOriginalInteractionResponse = void;

/** https://discord.com/developers/docs/interactions/slash-commands#create-followup-message */
export type CreateFollowupMessageJSON = ExecuteWebhookJSON;

export type CreateFollowupMessageBody = Message;

export type EditFollowupMessageJSON = EditWebhookMessageJSON;

export type EditFollowupMessageBody = Message;

export type DeleteFollowupMessageBody = void;

/** https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-command-permissions */
export type GetGuildApplicationCommandPermissionsBody =
  GuildApplicationCommandPermissions[];

/** https://discord.com/developers/docs/interactions/slash-commands#get-application-command-permissions */
export type GetApplicationCommandPermissions =
  GuildApplicationCommandPermissions[];

/** https://discord.com/developers/docs/interactions/slash-commands#edit-application-command-permissions */
export interface EditApplicationCommandPermissionsJSON {
  /** the permissions for the command in the guild */
  permissions: ApplicationCommandPermissions[];
}

export type BatchEditApplicationCommandPermissions =
  GuildApplicationCommandPermissions[];

export interface ApplicationCommand {
  id: Snowflake;
  application_id: Snowflake;
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
  default_permission?: boolean;
}

export interface ApplicationCommandOption {
  type: ApplicationCommandOptionType;
  name: string;
  description: string;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
}

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

export interface ApplicationCommandOptionChoice {
  name: string;
  value: string | number;
}

export interface GuildApplicationCommandPermissions {
  id: Snowflake;
  application_id: Snowflake;
  guild_id: Snowflake;
  permissions: ApplicationCommandPermissions[];
}

export interface ApplicationCommandPermissions {
  id: Snowflake;
  type: ApplicationCommandPermissionType;
  permission: boolean;
}

export enum ApplicationCommandPermissionType {
  Role = 1,
  User,
}

export interface Interaction {
  id: Snowflake;
  application_id: Snowflake;
  type: InteractionType;
  data?: ApplicationCommandInteractionData;
  guild_id?: Snowflake;
  channel_id?: Snowflake;
  member?: GuildMember;
  user?: User;
  token: string;
  version: number;
}

export enum InteractionType {
  Ping = 1,
  ApplicationCommand = 2,
}

export interface ApplicationCommandInteractionData {
  id: Snowflake;
  name: string;
  resolved?: ApplicationCommandInteractionDataResolved;
  options?: ApplicationCommandInteractionDataOption[];
}

export interface ApplicationCommandInteractionDataResolved {
  users?: Record<Snowflake, User>[];
  members?: Record<Snowflake, GuildMember>[];
  roles?: Record<Snowflake, Role>[];
  channels?: Record<Snowflake, Channel>[];
}

export interface ApplicationCommandInteractionDataOption {
  name: string;
  type: ApplicationCommandOptionType;
  value?: unknown;
  options?: ApplicationCommandInteractionDataOption[];
}

export interface InteractionResponse {
  type: InteractionCallbackType;
  data?: InteractionApplicationCOmmandCallbackData;
}

export enum InteractionCallbackType {
  Pong = 1,
  ChannelMessageWithSource = 4,
  DeferredChannelMessageWithSource,
}

export interface InteractionApplicationCOmmandCallbackData {
  tts?: boolean;
  content?: string;
  embeds?: Embed[];
  allowed_mentions?: AllowedMentions;
  flags?: 64;
}

export interface MessageInteraction {
  id: Snowflake;
  type: InteractionType;
  name: string;
  user: User;
}
