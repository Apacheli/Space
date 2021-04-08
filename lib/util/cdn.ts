import { Snowflake } from "../../deps.ts";

export type ImageFormats = "jpg" | "jpeg" | "png" | "webp" | "gif";

export const customEmojiURL = (emojiID: Snowflake) => `emojis/${emojiID}`;

export const guildIconURL = (guildID: Snowflake, guildIcon: string) =>
  `icons/${guildID}/${guildIcon}`;

export const guildSplashURL = (guildID: Snowflake, guildSplash: string) =>
  `splashes/${guildID}/${guildSplash}`;

export const guildDiscoverySplashURL = (
  guildID: Snowflake,
  guildDiscoverySplash: string,
) => `discovery-splashes/${guildID}/${guildDiscoverySplash}`;

export const guildBannerURL = (guildID: Snowflake, guildBanner: string) =>
  `banners/${guildID}/${guildBanner}`;

export const defaultUserAvatarURL = (userDiscriminator: string) =>
  `embed/avatars/${userDiscriminator}`;

export const userAvatarURL = (userID: Snowflake, userAvatar: string) =>
  `avatars/${userID}/${userAvatar}`;

export const applicationIconURL = (applicationID: Snowflake, icon: string) =>
  `app-icons/${applicationID}/${icon}`;

export const applicationAssetURL = (
  applicationID: Snowflake,
  assetID: Snowflake,
) => `app-assets/${applicationID}/${assetID}`;

export const achievementIconURL = (
  applicationID: Snowflake,
  achievementID: Snowflake,
  iconHash: string,
) =>
  `app-assets/${applicationID}/achievements/${achievementID}/icons/${iconHash}`;

export const teamIconURL = (teamID: Snowflake, teamIcon: string) =>
  `team-icons/${teamID}/${teamIcon}`;

export const CDNFormatURL = (
  url: string,
  format: ImageFormats = "png",
  size = 512,
) => `https://cdn.discordapp.com/${url}.${format}?size=${size}`;
