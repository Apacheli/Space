// deno-lint-ignore-file camelcase

// https://discord.dev/resources/guild-template

import type { Snowflake } from "../reference.ts";
import type { Guild } from "./guild.ts";
import type { User } from "./user.ts";

/** https://discord.dev/resources/template#template-object */
export interface GuildTemplate {
  /** the template code (unique ID) */
  code: string;
  /** template name */
  name: string;
  /** the description for the template */
  description: string | null;
  /** number of times this template has been used */
  usage_count: number;
  /** the ID of the user who created the template */
  creator_id: Snowflake;
  /** the user who created the template */
  creator: User;
  /** when this template was created */
  created_at: string;
  /** when this template was last synced to the source guild */
  updated_at: string;
  /** the ID of the guild this template is based on */
  source_guild_id: Snowflake;
  /** the guild snapshot this template contains */
  serialized_source_guikd: Guild;
  /** whether the template has unsynced changes */
  is_dirty: boolean | null;
}

/** https://discord.dev/resources/template#get-guild-template */
export type GetGuildTemplateBody = GuildTemplate;

/** https://discord.dev/resources/template#create-guild-from-guild-template */
export interface CreateGuildFromGuildTemplateJSON {
  /** name of the guild (2-100 characters) */
  name: string;
  /** base64 128x128 image for the guild icon */
  icon?: string;
}

/** https://discord.dev/resources/template#create-guild-from-guild-template */
export type CreateGuildFromGuildTemplateBody = Guild;

/** https://discord.dev/resources/template#get-guild-templates */
export type GetGuildTemplatesBody = GuildTemplate[];

/** https://discord.dev/resources/template#create-guild-template */
export interface CreateGuildTemplateJSON {
  /** name of the template (1-100 characters) */
  name: string;
  /** description for the template (0-120 characters) */
  description?: string | null;
}

/** https://discord.dev/resources/template#create-guild-template */
export type CreateGuildTemplateBody = GuildTemplate;

/** https://discord.dev/resources/template#sync-guild-template */
export type SyncGuildTemplateBody = GuildTemplate;

/** https://discord.dev/resources/template#modify-guild-template */
export type ModifyGuildTemplateJSON = Partial<CreateGuildTemplateJSON>;

/** https://discord.dev/resources/template#modify-guild-template */
export type ModifyGuildTemplateBody = GuildTemplate;

/** https://discord.dev/resources/template#delete-guild-template */
export type DeleteGuildTemplateBody = GuildTemplate;
