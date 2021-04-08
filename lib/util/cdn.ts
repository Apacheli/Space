import { ActualSnowflake } from "./util.ts";

export type ImageFormats = "jpg" | "jpeg" | "png" | "webp" | "gif";

export const customEmojiURL = (emojiID: ActualSnowflake) => `emojis/${emojiID}`;

export const guildIconURL = (guildID: ActualSnowflake, guildIcon: string) =>
  `icons/${guildID}/${guildIcon}`;

export const guildSplashURL = (guildID: ActualSnowflake, guildSplash: string) =>
  `splashes/${guildID}/${guildSplash}`;

export const guildDiscoverySplashURL = (
  guildID: ActualSnowflake,
  guildDiscoverySplash: string,
) => `discovery-splashes/${guildID}/${guildDiscoverySplash}`;

export const guildBannerURL = (guildID: ActualSnowflake, guildBanner: string) =>
  `banners/${guildID}/${guildBanner}`;

export const defaultUserAvatarURL = (userDiscriminator: string) =>
  `embed/avatars/${userDiscriminator}`;

export const userAvatarURL = (userID: ActualSnowflake, userAvatar: string) =>
  `avatars/${userID}/${userAvatar}`;

export const applicationIconURL = (
  applicationID: ActualSnowflake,
  icon: string,
) => `app-icons/${applicationID}/${icon}`;

export const applicationAssetURL = (
  applicationID: ActualSnowflake,
  assetID: ActualSnowflake,
) => `app-assets/${applicationID}/${assetID}`;

export const achievementIconURL = (
  applicationID: ActualSnowflake,
  achievementID: ActualSnowflake,
  iconHash: string,
) =>
  `app-assets/${applicationID}/achievements/${achievementID}/icons/${iconHash}`;

export const teamIconURL = (teamID: ActualSnowflake, teamIcon: string) =>
  `team-icons/${teamID}/${teamIcon}`;

export const CDNFormatURL = (
  url: string,
  format: ImageFormats = "png",
  size = 512,
) => `https://cdn.discordapp.com/${url}.${format}?size=${size}`;
