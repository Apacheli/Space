export type ImageFormats = "jpg" | "jpeg" | "png" | "webp" | "gif";

export const customEmojiURL = (emojiID: string) => `emojis/${emojiID}`;

export const guildIconURL = (guildID: string, guildIcon: string) =>
  `icons/${guildID}/${guildIcon}`;

export const guildSplashURL = (guildID: string, guildSplash: string) =>
  `splashes/${guildID}/${guildSplash}`;

export const guildDiscoverySplashURL = (
  guildID: string,
  guildDiscoverySplash: string,
) => `discovery-splashes/${guildID}/${guildDiscoverySplash}`;

export const guildBannerURL = (guildID: string, guildBanner: string) =>
  `banners/${guildID}/${guildBanner}`;

export const defaultUserAvatarURL = (userDiscriminator: string) =>
  `embed/avatars/${userDiscriminator}`;

export const userAvatarURL = (userID: string, userAvatar: string) =>
  `avatars/${userID}/${userAvatar}`;

export const applicationIconURL = (applicationID: string, icon: string) =>
  `app-icons/${applicationID}/${icon}`;

export const applicationAssetURL = (
  applicationID: string,
  assetID: string,
) => `app-assets/${applicationID}/${assetID}`;

export const achievementIconURL = (
  applicationID: string,
  achievementID: string,
  iconHash: string,
) =>
  `app-assets/${applicationID}/achievements/${achievementID}/icons/${iconHash}`;

export const teamIconURL = (teamID: string, teamIcon: string) =>
  `team-icons/${teamID}/${teamIcon}`;

export const CDNFormatURL = (
  url: string,
  format: ImageFormats = "png",
  size = 512,
) => `https://cdn.discordapp.com/${url}.${format}?size=${size}`;
