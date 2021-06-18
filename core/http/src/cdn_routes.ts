import type { Snowflake } from "../../types/src/reference.ts";

// deno-fmt-ignore
export const
  CUSTOM_EMOJI           = (emojiId: Snowflake) => `/emojis/${emojiId}`,
  GUILD_ICON             = (guildId: Snowflake, guildIcon: string) => `/icons/${guildId}/${guildIcon}`,
  GUILD_SPLASH           = (guildId: Snowflake, guildSplash: string) => `/splashes/${guildId}/${guildSplash}`,
  GUILD_DISCOVERY_SPLASH = (guildId: Snowflake, guildDiscoverySplash: string) => `/discovery-splashes/${guildId}/${guildDiscoverySplash}`,
  GUILD_BANNER           = (guildId: Snowflake, guildBanner: string) => `/banners/${guildId}/${guildBanner}`,
  DEFAULT_USER_AVATAR    = (userDiscriminator: string) => `/embed/avatars/${userDiscriminator}`,
  USER_AVATAR            = (userId: Snowflake, userAvatar: string) => `/avatars/${userId}/${userAvatar}`,
  APPLICATION_ICON       = (applicationId: Snowflake, icon: string) => `/app-icons/${applicationId}/${icon}`,
  APPLICATION_COVER      = (applicationId: Snowflake, coverImage: string) => `/app-icons/${applicationId}/${coverImage}`,
  APPLICATION_ASSET      = (applicationId: Snowflake, assetId: string) => `/app-assets/${applicationId}/${assetId}`,
  ACHIEVEMENT_ICON       = (applicationId: Snowflake, achievementId: Snowflake, iconHash: string) => `/app-assets/${applicationId}/achievements/${achievementId}/icons/${iconHash}`,
  TEAM_ICON              = (teamId: Snowflake, teamIcon: string) => `/team-icons/${teamId}/${teamIcon}`;
