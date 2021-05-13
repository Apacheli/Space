import type { Snowflake } from "../reference.ts";
import type { Guild } from "./guild.ts";
import type { User } from "./user.ts";

//

/** */
export interface Template {
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

/** */
export type GetTemplateBody = Template;

/** */
export interface CreateGuildFromTemplateJSON {
  /** name of the guild (2-100 characters) */
  name: string;
  /** base64 128x128 image for the guild icon */
  icon?: string;
}

/** */
export type CreateGuildFromTemplateBody = Guild;

/** */
export type GetGuildTemplatesBody = Template[];

/** */
export interface CreateGuildTemplateJSON {
  /** name of the template (1-100 characters) */
  name: string;
  /** description for the template (0-120 characters) */
  description?: string | null;
}

/** */
export type CreateGuildTemplateBody = Template;

/** */
export type SyncGuildTemplateBody = Template;

/** */
export type ModifyGuildTemplateJSON = Partial<CreateGuildTemplateJSON>;

/** */
export type ModifyGuildTemplateBody = Template;

/** */
export type DeleteGuildTemplateBody = Template;
