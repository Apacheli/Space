// deno-lint-ignore-file camelcase

/** https://discord.dev/resources/sticker */

import type { Snowflake } from "../reference.ts";
import type { User } from "./user.ts";

/** https://discord.dev/resources/sticker#sticker-object */
export interface Sticker {
  /** id of the sticker */
  id: Snowflake;
  /** id of the pack the sticker is from */
  pack_id?: Snowflake;
  /** name of the sticker */
  name: string;
  /** description of the sticker */
  description: string;
  /** for guild stickers, a unicode emoji representing the sticker's expression. for nitro stickers, a comma-separated list of related expressions. */
  tags: string;
  /** [type of sticker](https://discord.dev/resources/sticker#sticker-object-sticker-types) */
  type: StickerTypes;
  /** [type of sticker format](https://discord.dev/resources/sticker#sticker-object-sticker-format-types) */
  format_type: StickerFormatTypes;
  /** whether or not the sticker is available */
  available?: boolean;
  /** id of the guild that owns this sticker */
  guild_id?: Snowflake;
  /** the user that uploaded the sticker */
  user?: User;
  /** a sticker's sort order within a pack */
  sort_value?: number;
}

/** https://discord.dev/resources/sticker#sticker-object-sticker-types */
export enum StickerTypes {
  /** an official sticker in a pack, part of Nitro or in a removed purchasable pack */
  Standard = 1,
  /** a sticker uploaded to a Boosted guild for the guild's members */
  Guild,
}

/** https://discord.dev/resources/sticker#sticker-object-sticker-format-types */
export enum StickerFormatTypes {
  PNG = 1,
  APNG,
  Lottie,
}

/** https://discord.dev/resources/sticker#sticker-item-object */
export interface StickerItem {
  /** id of the sticker */
  id: Snowflake;
  /** name of the sticker */
  name: string;
  /** [type of sticker format](https://discord.dev/resources/sticker#sticker-object-sticker-format-types) */
  format_type: StickerFormatTypes;
}

/** https://discord.dev/resources/sticker#sticker-pack-object */
export interface StickerPack {
  /** id of the sticker pack */
  id: Snowflake;
  /** the stickers in the pack */
  stickers: Sticker[];
  /** name of the sticker pack */
  name: string;
  /** id of the pack's SKU */
  sku_id: Snowflake;
  /** id of a sticker in the pack which is shown as the pack's icon */
  cover_sticker_id?: Snowflake;
  /** description of the sticker pack */
  description: string;
  /** id of the sticker pack's [banner image](https://discord.dev/reference#image-formatting) */
  banner_asset_id: Snowflake;
}

/** https://discord.dev/resources/sticker#get-sticker */
export type GetStickerBody = Sticker[];

/** https://discord.dev/resources/sticker#list-nitro-sticker-packs */
export interface ListNitroStickerPacksBody {
  sticker_packs: StickerPack[];
}

/** https://discord.dev/resources/sticker#list-guild-stickers */
export type ListGuildStickersBody = Sticker[];

/** https://discord.dev/resources/sticker#get-guild-sticker */
export type GetGuildStickerBody = Sticker;

/** https://discord.dev/resources/sticker#create-guild-sticker */
export interface CreateGuildStickerForm extends ModifyGuildStickerJSON {
  /** the sticker file to upload, must be a PNG, APNG, or Lottie JSON file, max 500 KB */
  file: string;
}

/** https://discord.dev/resources/sticker#create-guild-sticker */
export type CreateGuildStickerBody = Sticker;

/** https://discord.dev/resources/sticker#modify-guild-sticker */
export interface ModifyGuildStickerJSON {
  /** name of the sticker (2-30 characters) */
  name: string;
  /** description of the sticker (empty or 2-100 characters) */
  description: string;
  /** the Discord name of a unicode emoji representing the sticker's expression (2-200 characters) */
  tags: string;
}

/** https://discord.dev/resources/sticker#modify-guild-sticker */
export type ModifyGuildStickerBody = Sticker;

/** https://discord.dev/resources/sticker#delete-guild=sticker */
export type DeleteGuildStickerBody = void;
