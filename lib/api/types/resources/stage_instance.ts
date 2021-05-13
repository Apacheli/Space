import type { Snowflake } from "../reference.ts";

//

/** */
export interface StageInstance {
  /** The id of this Stage instance */
  id: Snowflake;
  /** The guild id of the associated Stage channel */
  guild_id: Snowflake;
  /** The id of the associated Stage channel */
  channel_id: Snowflake;
  /** The topic of the Stage instance (1-120 characters) */
  topic: string;
}

/** */
export interface CreateStageInstanceJSON {
  /** The id of the Stage channel */
  channel_id: Snowflake;
  /** The topic of the Stage instance (1-120 characters) */
  topic: string;
}

/** */
export type CreateStageInstanceBody = StageInstance;

/** */
export type GetStageInstanceBody = StageInstance;

/** */
export interface UpdateStageInstanceJSON {
  /** The topic of the Stage instance (1-120 characters) */
  topic: string;
}

/** */
export type UpdateStageInstanceBody = StageInstance;

/** */
export type DeleteStageInstanceBody = void;
