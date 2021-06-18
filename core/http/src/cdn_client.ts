import type { Snowflake } from "../../types/src/reference.ts";
import {
  ACHIEVEMENT_ICON,
  APPLICATION_ASSET,
  APPLICATION_COVER,
  APPLICATION_ICON,
  CUSTOM_EMOJI,
  DEFAULT_USER_AVATAR,
  GUILD_BANNER,
  GUILD_DISCOVERY_SPLASH,
  GUILD_ICON,
  GUILD_SPLASH,
  TEAM_ICON,
  USER_AVATAR,
} from "./cdn_routes.ts";
import { HTTPClient } from "./http_client.ts";

/** Handles the Discord CDN API */
export class CDNClient extends HTTPClient {
  getAchievementIcon(
    applicationId: Snowflake,
    achievementId: Snowflake,
    iconHash: string,
  ) {
    return this.request(
      ACHIEVEMENT_ICON(applicationId, achievementId, iconHash),
    );
  }

  getApplicationAsset(applicationId: Snowflake, assetId: Snowflake) {
    return this.request(APPLICATION_ASSET(applicationId, assetId));
  }

  getApplicationCover(applicationId: Snowflake, coverImage: string) {
    return this.request(APPLICATION_COVER(applicationId, coverImage));
  }

  getApplicationIcon(applicationId: Snowflake, icon: string) {
    return this.request(APPLICATION_ICON(applicationId, icon));
  }

  getCustomEmoji(emojiId: Snowflake) {
    return this.request(CUSTOM_EMOJI(emojiId));
  }

  getDefaultUserAvatar(userDiscriminator: string) {
    return this.request(DEFAULT_USER_AVATAR(userDiscriminator));
  }

  getGuildBanner(guildId: Snowflake, guildBanner: string) {
    return this.request(GUILD_BANNER(guildId, guildBanner));
  }

  getGuildDiscoverySplash(guildId: Snowflake, guildDiscoverySplash: string) {
    return this.request(GUILD_DISCOVERY_SPLASH(guildId, guildDiscoverySplash));
  }

  getGuildIcon(guildId: Snowflake, guildIcon: string) {
    return this.request(GUILD_ICON(guildId, guildIcon));
  }

  getGuildSplash(guildId: Snowflake, guildSplash: string) {
    return this.request(GUILD_SPLASH(guildId, guildSplash));
  }

  getTeamIcon(teamId: Snowflake, teamIcon: string) {
    return this.request(TEAM_ICON(teamId, teamIcon));
  }

  getUserAvatar(userId: Snowflake, userAvatar: string) {
    return this.request(USER_AVATAR(userId, userAvatar));
  }
}
