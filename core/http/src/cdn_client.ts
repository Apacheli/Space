import type { ImageFormats, Snowflake } from "../../types/src/reference.ts";
import { ImageBaseURL } from "../../types/src/reference.ts";
import { IMAGE_FORMAT, IMAGE_SIZE, USER_AGENT } from "./constants.ts";
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

/** CDN client options */
export interface CDNClientOptions extends ImageOptions {
  /** Base CDN URL */
  baseURL?: string;
  /** User-Agent */
  userAgent?: string;
}

/** Image options */
export interface ImageOptions {
  /** Image format */
  format?: ImageFormats;
  /** Any power of two between 16 and 4096 */
  size?: number;
}

/**
 * Handles the Discord CDN API
 */
export class CDNClient {
  /**
   * @param options CDN client options
   */
  constructor(public options?: CDNClientOptions) {
  }

  /**
   * Make a request
   * @param path The path to make the request to
   */
  async request(path: string, options?: ImageOptions) {
    const {
      baseURL = ImageBaseURL,
      userAgent = USER_AGENT,
    } = this.options ?? {};
    const {
      format = IMAGE_FORMAT,
      size = IMAGE_SIZE,
    } = options ?? this.options ?? {};

    const headers = new Headers();
    headers.set("User-Agent", userAgent);

    const response = await fetch(`${baseURL}${path}.${format}?size=${size}`, {
      headers,
    });

    if (response.ok) {
      return new Uint8Array(await response.arrayBuffer());
    }

    throw new Error("Bad image");
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param achievementId https://discord.dev/game-sdk/achievements#data-models-user-achievement-struct
   * @param iconHash https://discord.dev/game-sdk/achievements#data-models-user-achievement-struct
   */
  getAchievementIcon(
    applicationId: Snowflake,
    achievementId: Snowflake,
    iconHash: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(
      ACHIEVEMENT_ICON(applicationId, achievementId, iconHash),
      options,
    );
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param assetId https://discord.dev/topics/gateway#activity-object-activity-assets
   */
  getApplicationAsset(
    applicationId: Snowflake,
    assetId: Snowflake,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(APPLICATION_ASSET(applicationId, assetId), options);
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param coverImage https://discord.dev/resources/application#application-object
   */
  getApplicationCover(
    applicationId: Snowflake,
    coverImage: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(APPLICATION_COVER(applicationId, coverImage), options);
  }

  /**
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param icon https://discord.dev/resources/application#application-object
   */
  getApplicationIcon(
    applicationId: Snowflake,
    icon: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(APPLICATION_ICON(applicationId, icon), options);
  }

  /**
   * @param emojiId https://discord.dev/resources/emoji#emoji-object
   */
  getCustomEmoji(
    emojiId: Snowflake,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(CUSTOM_EMOJI(emojiId), options);
  }

  /**
   * @param userDiscriminator https://discord.dev/resources/user#user-object
   */
  getDefaultUserAvatar(
    userDiscriminator: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(DEFAULT_USER_AVATAR(userDiscriminator), options);
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildBanner https://discord.dev/resources/guild#guild-object
   */
  getGuildBanner(
    guildId: Snowflake,
    guildBanner: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(GUILD_BANNER(guildId, guildBanner), options);
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildDiscoverySplash https://discord.dev/resources/guild#guild-object
   */
  getGuildDiscoverySplash(
    guildId: Snowflake,
    guildDiscoverySplash: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(
      GUILD_DISCOVERY_SPLASH(guildId, guildDiscoverySplash),
      options,
    );
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildIcon https://discord.dev/resources/guild#guild-object
   */
  getGuildIcon(
    guildId: Snowflake,
    guildIcon: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(GUILD_ICON(guildId, guildIcon), options);
  }

  /**
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param guildSplash https://discord.dev/resources/guild#guild-object
   */
  getGuildSplash(
    guildId: Snowflake,
    guildSplash: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(GUILD_SPLASH(guildId, guildSplash), options);
  }

  /**
   * @param teamId https://discord.dev/topics/teams#team-object
   * @param teamIcon https://discord.dev/topics/teams#team-object
   */
  getTeamIcon(
    teamId: Snowflake,
    teamIcon: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(TEAM_ICON(teamId, teamIcon), options);
  }

  /**
   * @param userId https://discord.dev/resources/user#user-object
   * @param userAvatar https://discord.dev/resources/user#user-object
   */
  getUserAvatar(
    userId: Snowflake,
    userAvatar: string,
    options?: ImageOptions,
  ): Promise<Uint8Array> {
    return this.request(USER_AVATAR(userId, userAvatar), options);
  }
}
