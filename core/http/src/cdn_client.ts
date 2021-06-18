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

/**
 * Handles the Discord CDN API
 *
 * https://discord.com/developers/docs/reference#image-formatting
 */
export class CDNClient extends HTTPClient {
  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param achievementId https://discord.dev/game-sdk/achievements#data-models-user-achievement-struct
   * @param iconHash https://discord.dev/game-sdk/achievements#data-models-user-achievement-struct
   */
  getAchievementIcon(
    applicationId: Snowflake,
    achievementId: Snowflake,
    iconHash: string,
  ): Promise<Uint8Array> {
    return this.request(
      ACHIEVEMENT_ICON(applicationId, achievementId, iconHash),
    );
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param assetId https://discord.dev/topics/gateway#activity-object-activity-assets
   */
  getApplicationAsset(
    applicationId: Snowflake,
    assetId: Snowflake,
  ): Promise<Uint8Array> {
    return this.request(APPLICATION_ASSET(applicationId, assetId));
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param coverImage https://discord.dev/resources/application#application-object
   */
  getApplicationCover(
    applicationId: Snowflake,
    coverImage: string,
  ): Promise<Uint8Array> {
    return this.request(APPLICATION_COVER(applicationId, coverImage));
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param icon https://discord.dev/resources/application#application-object
   */
  getApplicationIcon(
    applicationId: Snowflake,
    icon: string,
  ): Promise<Uint8Array> {
    return this.request(APPLICATION_ICON(applicationId, icon));
  }

  /**
   * @param emojiId https://discord.dev/resources/emoji#emoji-object
   */
  getCustomEmoji(emojiId: Snowflake): Promise<Uint8Array> {
    return this.request(CUSTOM_EMOJI(emojiId));
  }

  /**
   * @param userDiscriminator https://discord.dev/resources/user#user-object
   */
  getDefaultUserAvatar(userDiscriminator: string): Promise<Uint8Array> {
    return this.request(DEFAULT_USER_AVATAR(userDiscriminator));
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildBanner https://discord.dev/resources/guild#guild-object
   */
  getGuildBanner(guildId: Snowflake, guildBanner: string): Promise<Uint8Array> {
    return this.request(GUILD_BANNER(guildId, guildBanner));
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildDiscoverySplash https://discord.dev/resources/guild#guild-object
   */
  getGuildDiscoverySplash(
    guildId: Snowflake,
    guildDiscoverySplash: string,
  ): Promise<Uint8Array> {
    return this.request(GUILD_DISCOVERY_SPLASH(guildId, guildDiscoverySplash));
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildIcon https://discord.dev/resources/guild#guild-object
   */
  getGuildIcon(guildId: Snowflake, guildIcon: string): Promise<Uint8Array> {
    return this.request(GUILD_ICON(guildId, guildIcon));
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildSplash https://discord.dev/resources/guild#guild-object
   */
  getGuildSplash(guildId: Snowflake, guildSplash: string): Promise<Uint8Array> {
    return this.request(GUILD_SPLASH(guildId, guildSplash));
  }

  /**
   * @param teamId https://discord.dev/topics/teams#team-object
   * @param teamIcon https://discord.dev/topics/teams#team-object
   */
  getTeamIcon(teamId: Snowflake, teamIcon: string): Promise<Uint8Array> {
    return this.request(TEAM_ICON(teamId, teamIcon));
  }

  /**
   * @param userId https://discord.dev/resources/user#user-object
   * @param userAvatar https://discord.dev/resources/user#user-object
   */
  getUserAvatar(userId: Snowflake, userAvatar: string): Promise<Uint8Array> {
    return this.request(USER_AVATAR(userId, userAvatar));
  }
}
