// deno-lint-ignore-file camelcase

// https://discord.dev/resources/stage-instance

import type { RequiredKeys } from "../../../util/mod.ts";
import type { Snowflake } from "../reference.ts";

/** https://discord.dev/resources/stage-instance#auto-closing-stage-instance-structure */
export interface StageInstance {
  /** The id of this Stage instance */
  id: Snowflake;
  /** The guild id of the associated Stage channel */
  guild_id: Snowflake;
  /** The id of the associated Stage channel */
  channel_id: Snowflake;
  /** The topic of the Stage instance (1-120 characters) */
  topic: string;
  privacy_level: PrivacyLevel;
  discoverable_disabled: boolean;
}

export enum PrivacyLevel {
  Public,
  GuildOnly,
}

/** https://discord.dev/resources/stage-instance#create-stage-instance */
export interface CreateStageInstanceJSON
  extends RequiredKeys<UpdateStageInstanceJSON, "topic"> {
  /** The id of the Stage channel */
  channel_id: Snowflake;
}

/** https://discord.dev/resources/stage-instance#create-stage-instance */
export type CreateStageInstanceBody = StageInstance;

/** https://discord.dev/resources/stage-instance#get-stage-instance */
export type GetStageInstanceBody = StageInstance;

/** https://discord.dev/resources/stage-instance#update-stage-instance */
export interface UpdateStageInstanceJSON {
  /** The topic of the Stage instance (1-120 characters) */
  topic?: string;
  /** The topic of the Stage instance (1-120 characters) */
  privacy_level?: PrivacyLevel;
}

/** https://discord.dev/resources/stage-instance#update-stage-instance */
export type UpdateStageInstanceBody = StageInstance;

/** https://discord.dev/resources/stage-instance#delete-stage-instance */
export type DeleteStageInstanceBody = void;
