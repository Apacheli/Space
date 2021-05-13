import type { Snowflake } from "../reference.ts";
import type { User } from "./user.ts";

// https://discord.com/developers/docs/resources/emoji

/** https://discord.dev/resources/emoji#emoji-object */
export interface Emoji {
  /** [emoji id](https://discord.dev/reference#image-formatting) */
  id: Snowflake;
  /** emoji name */
  name: string | null;
  /** roles allowed to use this emoji */
  roles?: Snowflake[];
  /** user that created this emoji */
  user?: User;
  /** whether this emoji must be wrapped in colons */
  require_colons?: boolean;
  /** whether this emoji is managed */
  managed?: boolean;
  /** whether this emoji is animated */
  animated?: boolean;
  /** whether this emoji can be used, may be false due to loss of Server Boosts */
  available?: boolean;
}

/** https://discord.dev/resources/emoji#list-guild-emojis */
export type ListGuildEmojisBody = Emoji[];

/** https://discord.dev/resources/emoji#get-guild-emoji */
export type GetGuildEmojiBody = Emoji;

/** https://discord.dev/resources/emoji#create-guild-emoji */
export interface CreateGuildEmojiJSON {
  /** name of the emoji */
  name: string;
  /** the 128x128 emoji image */
  image: string;
  /** roles allowed to use this emoji */
  roles: Snowflake[];
}

/** https://discord.dev/resources/emoji#create-guild-emoji */
export type CreateGuildEmojiBody = Emoji;

/** https://discord.dev/resources/emoji#modify-guild-emoji */
export interface ModifyGuildEmojiJSON {
  /** name of the emoji */
  name?: string;
  /** roles allowed to use this emoji */
  roles?: Snowflake[] | null;
}

/** https://discord.dev/resources/emoji#modify-guild-emoji */
export type ModifyGuildEmojiBody = Emoji;

/** https://discord.dev/resources/emoji#delete-guild-emoji */
export type DeleteGuildEmojiBody = void;
