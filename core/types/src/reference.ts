// https://discord.dev/reference

/** https://discord.dev/reference#api-reference-base-url */
export const BaseURL = "https://canary.discord.com/api";

/** https://discord.dev/reference#api-versioning */
export type APIVersions = 8 | 9;

/** https://discord.dev/reference#snowflakes */
// Snowflakes can be bigints if ETF encoding is enabled
export type Snowflake = string | bigint;

/** https://discord.dev/reference#image-formatting-image-base-url */
export const ImageBaseURL = "https://cdn.discordapp.com";

/** https://discord.dev/reference#image-formatting-image-formats */
export type ImageFormats = "jpg" | "jpeg" | "png" | "webp" | "gif";
