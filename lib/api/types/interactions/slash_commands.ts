import {} from "../resources/webhook.ts";

/** https://discord.com/developers/docs/interactions/slash-commands#get-global-application-commands */
export type GetGlobalApplicationCommandsBody = ApplicationCommand[];

/** https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command */
export interface CreateGlobalApplicationCommandJSON {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
  default_permission?: boolean;
}

export type CreateGlobalApplicationCommandBody = ApplicationCommand;

export type GetGlobalApplicationCommandBody = ApplicationCommand;

export type EditGlobalApplicationCommandJSON = Partial<
  CreateGlobalApplicationCommandJSON & {
    options: ApplicationCommandOption[] | null;
  }
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
