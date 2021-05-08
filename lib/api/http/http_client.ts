import type {
  GetAPIVoiceRegionsResult,
  RESTDeleteAPIChannelAllMessageReactionsResult,
  RESTDeleteAPIChannelMessageOwnReaction,
  RESTDeleteAPIChannelMessageReactionResult,
  RESTDeleteAPIChannelMessageResult,
  RESTDeleteAPIChannelMessageUserReactionResult,
  RESTDeleteAPIChannelPermissionResult,
  RESTDeleteAPIChannelPinResult,
  RESTDeleteAPIChannelRecipientResult,
  RESTDeleteAPIChannelResult,
  RESTDeleteAPICurrentUserGuildResult,
  RESTDeleteAPIGuildBanResult,
  RESTDeleteAPIGuildEmojiResult,
  RESTDeleteAPIGuildIntegrationResult,
  RESTDeleteAPIGuildMemberResult,
  RESTDeleteAPIGuildMemberRoleResult,
  RESTDeleteAPIGuildResult,
  RESTDeleteAPIGuildRoleResult,
  RESTDeleteAPIGuildTemplateResult,
  RESTDeleteAPIInviteResult,
  RESTDeleteAPIWebhookResult,
  RESTDeleteAPIWebhookWithTokenMessageResult,
  RESTDeleteAPIWebhookWithTokenResult,
  RESTGetAPIApplicationCommandPermissionsResult,
  RESTGetAPIApplicationCommandResult,
  RESTGetAPIApplicationCommandsResult,
  RESTGetAPIApplicationGuildCommandResult,
  RESTGetAPIApplicationGuildCommandsResult,
  RESTGetAPIAuditLogQuery,
  RESTGetAPIAuditLogResult,
  RESTGetAPIChannelInvitesResult,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessageReactionUsersResult,
  RESTGetAPIChannelMessageResult,
  RESTGetAPIChannelMessagesQuery,
  RESTGetAPIChannelMessagesResult,
  RESTGetAPIChannelPinsResult,
  RESTGetAPIChannelResult,
  RESTGetAPIChannelWebhooksResult,
  RESTGetAPICurrentUserConnectionsResult,
  RESTGetAPICurrentUserGuildsQuery,
  RESTGetAPICurrentUserGuildsResult,
  RESTGetAPICurrentUserResult,
  RESTGetAPIGatewayBotResult,
  RESTGetAPIGatewayResult,
  RESTGetAPIGuildApplicationCommandsPermissionsResult,
  RESTGetAPIGuildBanResult,
  RESTGetAPIGuildBansResult,
  RESTGetAPIGuildChannelsResult,
  RESTGetAPIGuildEmojiResult,
  RESTGetAPIGuildEmojisResult,
  RESTGetAPIGuildIntegrationsResult,
  RESTGetAPIGuildInvitesResult,
  RESTGetAPIGuildMemberResult,
  RESTGetAPIGuildMembersQuery,
  RESTGetAPIGuildMembersResult,
  RESTGetAPIGuildMembersSearchQuery,
  RESTGetAPIGuildMembersSearchResult,
  RESTGetAPIGuildPreviewResult,
  RESTGetAPIGuildPruneCountQuery,
  RESTGetAPIGuildPruneCountResult,
  RESTGetAPIGuildQuery,
  RESTGetAPIGuildResult,
  RESTGetAPIGuildRolesResult,
  RESTGetAPIGuildTemplatesResult,
  RESTGetAPIGuildVanityUrlResult,
  RESTGetAPIGuildVoiceRegionsResult,
  RESTGetAPIGuildWebhooksResult,
  RESTGetAPIGuildWelcomeScreenResult,
  RESTGetAPIGuildWidgetImageQuery,
  RESTGetAPIGuildWidgetImageResult,
  RESTGetAPIGuildWidgetJSONResult,
  RESTGetAPIGuildWidgetSettingsResult,
  RESTGetAPIInviteQuery,
  RESTGetAPIInviteResult,
  RESTGetAPIOauth2CurrentApplicationResult,
  RESTGetAPIOauth2CurrentAuthorizationResult,
  RESTGetAPITemplateResult,
  RESTGetAPIUserResult,
  RESTGetAPIWebhookResult,
  RESTGetAPIWebhookWithTokenResult,
  RESTPatchAPIApplicationCommandJSONBody,
  RESTPatchAPIApplicationCommandResult,
  RESTPatchAPIApplicationGuildCommandJSONBody,
  RESTPatchAPIApplicationGuildCommandResult,
  RESTPatchAPIChannelJSONBody,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPatchAPIChannelMessageResult,
  RESTPatchAPIChannelResult,
  RESTPatchAPICurrentGuildMemberNicknameJSONBody,
  RESTPatchAPICurrentGuildMemberNicknameResult,
  RESTPatchAPICurrentUserJSONBody,
  RESTPatchAPICurrentUserResult,
  RESTPatchAPIGuildChannelPositionsJSONBody,
  RESTPatchAPIGuildChannelPositionsResult,
  RESTPatchAPIGuildEmojiJSONBody,
  RESTPatchAPIGuildEmojiResult,
  RESTPatchAPIGuildJSONBody,
  RESTPatchAPIGuildMemberJSONBody,
  RESTPatchAPIGuildMemberResult,
  RESTPatchAPIGuildResult,
  RESTPatchAPIGuildRoleJSONBody,
  RESTPatchAPIGuildRolePositionsJSONBody,
  RESTPatchAPIGuildRolePositionsResult,
  RESTPatchAPIGuildRoleResult,
  RESTPatchAPIGuildTemplateJSONBody,
  RESTPatchAPIGuildTemplateResult,
  RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody,
  RESTPatchAPIGuildVoiceStateUserJSONBody,
  RESTPatchAPIGuildWelcomeScreenJSONBody,
  RESTPatchAPIGuildWidgetSettingsJSONBody,
  RESTPatchAPIGuildWidgetSettingsResult,
  RESTPatchAPIWebhookJSONBody,
  RESTPatchAPIWebhookResult,
  RESTPatchAPIWebhookWithTokenJSONBody,
  RESTPatchAPIWebhookWithTokenMessageJSONBody,
  RESTPatchAPIWebhookWithTokenMessageResult,
  RESTPatchAPIWebhookWithTokenResult,
  RESTPostAPIApplicationCommandsJSONBody,
  RESTPostAPIApplicationCommandsResult,
  RESTPostAPIApplicationGuildCommandsJSONBody,
  RESTPostAPIApplicationGuildCommandsResult,
  RESTPostAPIChannelFollowersJSONBody,
  RESTPostAPIChannelFollowersResult,
  RESTPostAPIChannelInviteJSONBody,
  RESTPostAPIChannelInviteResult,
  RESTPostAPIChannelMessageCrosspostResult,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessageResult,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteResult,
  RESTPostAPIChannelTypingResult,
  RESTPostAPIChannelWebhookJSONBody,
  RESTPostAPIChannelWebhookResult,
  RESTPostAPICurrentUserCreateDMChannelJSONBody,
  RESTPostAPICurrentUserCreateDMChannelResult,
  RESTPostAPIGuildChannelJSONBody,
  RESTPostAPIGuildChannelResult,
  RESTPostAPIGuildEmojiJSONBody,
  RESTPostAPIGuildEmojiResult,
  RESTPostAPIGuildPruneJSONBody,
  RESTPostAPIGuildPruneResult,
  RESTPostAPIGuildRoleJSONBody,
  RESTPostAPIGuildRoleResult,
  RESTPostAPIGuildsJSONBody,
  RESTPostAPIGuildsResult,
  RESTPostAPIGuildTemplatesJSONBody,
  RESTPostAPIGuildTemplatesResult,
  RESTPostAPIInteractionCallbackJSONBody,
  RESTPostAPITemplateCreateGuildJSONBody,
  RESTPostAPITemplateCreateGuildResult,
  RESTPostAPIWebhookWithTokenGitHubQuery,
  RESTPostAPIWebhookWithTokenGitHubResult,
  RESTPostAPIWebhookWithTokenJSONBody,
  RESTPostAPIWebhookWithTokenResult,
  RESTPostAPIWebhookWithTokenSlackQuery,
  RESTPostAPIWebhookWithTokenSlackResult,
  RESTPutAPIApplicationCommandPermissionsJSONBody,
  RESTPutAPIApplicationCommandPermissionsResult,
  RESTPutAPIApplicationCommandsJSONBody,
  RESTPutAPIApplicationCommandsResult,
  RESTPutAPIChannelMessageReactionResult,
  RESTPutAPIChannelPermissionJSONBody,
  RESTPutAPIChannelPermissionResult,
  RESTPutAPIChannelPinResult,
  RESTPutAPIChannelRecipientJSONBody,
  RESTPutAPIChannelRecipientResult,
  RESTPutAPIGuildApplicationCommandsPermissionsJSONBody,
  RESTPutAPIGuildApplicationCommandsPermissionsResult,
  RESTPutAPIGuildBanJSONBody,
  RESTPutAPIGuildBanResult,
  RESTPutAPIGuildMemberJSONBody,
  RESTPutAPIGuildMemberResult,
  RESTPutAPIGuildMemberRoleResult,
  RESTPutAPIGuildTemplateSyncResult,
} from "./deps.ts";
import { Status } from "./deps.ts"; // Double import because it's easier to read
import { HTTPError } from "./http_error.ts";
import {
  ActualSnowflake,
  logger,
  RateLimitBucket,
  sleep,
} from "../../util/mod.ts";
import * as meta from "../../../meta.ts";

export interface HTTPClientOptions {
  delay?: number;
  retries?: number;
  userAgent?: string;
  version?: number;
}

export interface RequestInput {
  data?: unknown;
  files?: File[];
  method?: string;
  query?: unknown;
  reason?: string;
}

export const DELAY = 15_000;
export const HTTP_URL = `https://discord.com/api`;
export const HTTP_VERSION = 8;
export const USER_AGENT = `DiscordBot (${meta.repo}, ${meta.version})`;

export const parseRateLimitRoute = (route: string, method?: string) => {
  const idRoute = route.replace(/\/(\w+)\/\d+/g, "/$1/:id");
  if (idRoute.includes("/reactions/")) {
    return idRoute.replace(/\/reactions\/[^/]+/g, "/reactions/:emoji");
  }
  if (method === "DELETE" && idRoute.endsWith("messages/:id")) {
    const id = BigInt(route.match(/messages\/(\d+)/)?.[1]);
    console.log(id);
    if (BigInt(Date.now()) - ((id >> 22n) + 1420070400000n) > 1209600000) {
      return `DELETE-${idRoute}-old`;
    }
    return `DELETE-${idRoute}`;
  }
  return idRoute;
};

export class HTTPClient extends Map<string, RateLimitBucket> {
  constructor(public token: string, public options?: HTTPClientOptions) {
    super();
  }

  async request<T = unknown>(path: string, input?: RequestInput): Promise<T> {
    const route = parseRateLimitRoute(path, input?.method);
    const bucket = this.get(route) ?? new RateLimitBucket();
    this.set(route, bucket);

    if (bucket.locked || bucket.rateLimited) {
      if (bucket.rateLimited) {
        const reset = bucket.reset / 1000;
        logger.debug?.(`Preemptive rate limit. Trying in ${reset} seconds`);
      }
      return new Promise<T>((resolve, reject) => { // TypeScript return bug
        bucket.add(() => this.request<T>(path, input).then(resolve, reject));
      });
    }

    const headers = new Headers();
    headers.set("Authorization", this.token);
    headers.set("User-Agent", this.options?.userAgent ?? USER_AGENT);
    if (input?.reason) {
      headers.set("X-Audit-Log-Reason", input.reason);
    }

    let body;
    if (input?.files) {
      body = new FormData();
      for (const file of input.files) {
        body.append(file.name, file);
      }
      if (input.data) {
        body.append("payload_json", JSON.stringify(input.data));
      }
    } else if (input?.data) {
      body = JSON.stringify(input.data);
      headers.set("Content-Type", "application/json");
    }

    let url = `${HTTP_URL}/v${this.options?.version ?? HTTP_VERSION}/${path}`;
    if (input?.query) {
      url += `?${new URLSearchParams(input.query as Record<string, string>)}`;
    }

    const controller = new AbortController();
    const delay = this.options?.delay ?? DELAY;
    const timeout = setTimeout(() => controller.abort(), delay);

    bucket.lock();
    const response = await fetch(url, {
      body,
      headers,
      method: input?.method,
      signal: controller.signal,
    });

    const resetAfter = response.headers.get("x-ratelimit-reset-after");
    const realResetAfter = resetAfter ? parseFloat(resetAfter) * 1000 : 0;

    bucket.unlock(
      parseInt(response.headers.get("x-ratelimit-limit") ?? "0"),
      realResetAfter,
      parseInt(response.headers.get("x-ratelimit-remaining") ?? "0"),
    );
    clearTimeout(timeout);

    if (response.status === Status.TooManyRequests) {
      logger.warn?.(`Rate limited. Retrying in ${resetAfter} seconds`);
      await sleep(realResetAfter);
      return this.request<T>(path, input);
    }

    bucket.next();

    const result = response.headers.get("content-type") === "application/json"
      ? await response.json()
      : response.text();
    if (response.ok) {
      return result;
    }
    throw new HTTPError(result, response);
  }

  /**
   * https://discord.dev/game-sdk/store#get-entitlements
   *
   * Gets entitlements for a given user. You can use this on your game backend to
   * check entitlements of an arbitrary user, or perhaps in an administrative panel
   * for your support team.
   * @param applicationID https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   */
  getEntitlements(applicationID: ActualSnowflake, data: unknown) {
    return this.request(`applications/${applicationID}/entitlements`, {
      data,
    });
  }

  /**
   * https://discord.dev/game-sdk/store#get-entitlement
   *
   * Fetch an entitlement by its ID. This may be useful in confirming that a user has
   * a given entitlement that another call or the SDK says they do.
   * @param applicationID https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   * @param entitlementID https://discord.dev/game-sdk/store#data-models-entitlement-struct
   */
  getEntitlement(
    applicationID: ActualSnowflake,
    entitlementID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(
      `applications/${applicationID}/entitlements/${entitlementID}`,
      {
        data,
      },
    );
  }

  /**
   * https://discord.dev/game-sdk/store#get-skus
   *
   * Get all SKUs for an application.
   * @param applicationID https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   */
  getSKUs(applicationID: ActualSnowflake) {
    return this.request(`applications/${applicationID}/skus`);
  }

  /**
   * https://discord.dev/game-sdk/store#consume-sku
   *
   * Marks a given entitlement for the user as consumed, meaning it will no longer be
   * returned in an entitlements check. **Ensure the user was granted whatever items
   * the entitlement was for before consuming it!**
   * @param applicationID https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   * @param entitlementID https://discord.dev/game-sdk/store#data-models-entitlement-struct
   */
  consumeSKU(applicationID: ActualSnowflake, entitlementID: ActualSnowflake) {
    return this.request(
      `applications/${applicationID}/entitlements/${entitlementID}/consume`,
      {
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/game-sdk/store#delete-test-entitlement
   *
   * Deletes a test entitlement for an application. You can only delete entitlements
   * that were "purchased" in developer test mode; these are entitlements of
   * `type == TestModePurchase`. You cannot use this route to delete arbitrary
   * entitlements that users actually purchased.
   * @param applicationID https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   * @param entitlementID https://discord.dev/game-sdk/store#data-models-entitlement-struct
   */
  deleteTestEntitlement(
    applicationID: ActualSnowflake,
    entitlementID: ActualSnowflake,
  ) {
    return this.request(
      `applications/${applicationID}/entitlements/${entitlementID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/game-sdk/store#create-purchase-discount
   *
   * Creates a discount for the given user on their next purchase of the given SKU.
   * You should call this endpoint from your backend server just before calling
   * [StartPurchase](https://discord.dev/game-sdk/store#start-purchase) for the SKU you wish to
   * discount. The user will then see a discounted price for that SKU at time of
   * payment. The discount is automatically consumed after successful purchase or if
   * the TTL expires.
   * @param skuID https://discord.dev/game-sdk/store#data-models-sku-struct
   * @param userID https://discord.dev/resources/user#user-object
   */
  createPurchaseDiscount(
    skuID: ActualSnowflake,
    userID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(`store/skus/${skuID}/discounts/${userID}`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/game-sdk/store#delete-purchase-discount
   *
   * Deletes the currently active discount on the given SKU for the given user. You
   * **do not need** to call this after a user has made a discounted purchase;
   * successful discounted purchases will automatically remove the discount for that
   * user for subsequent purchases.
   * @param skuID https://discord.dev/game-sdk/store#data-models-sku-struct
   * @param userID https://discord.dev/resources/user#user-object
   */
  deletePurchaseDiscount(skuID: ActualSnowflake, userID: ActualSnowflake) {
    return this.request(`store/skus/${skuID}/discounts/${userID}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-global-application-commands
   *
   * Fetch all of the global commands for your application. Returns an array of
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * objects.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   */
  getGlobalApplicationCommands(applicationID: ActualSnowflake) {
    return this.request<RESTGetAPIApplicationCommandsResult>(
      `applications/${applicationID}/commands`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-global-application-command
   *
   * > ❗ Creating a command with the same name as an existing command for your
   * > application will overwrite the old command.
   *
   * Create a new global command. New global commands will be available in all guilds
   * after 1 hour. Returns `201` and an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   */
  createGlobalApplicationCommand(
    applicationID: ActualSnowflake,
    data: RESTPostAPIApplicationCommandsJSONBody,
  ) {
    return this.request<RESTPostAPIApplicationCommandsResult>(
      `applications/${applicationID}/commands`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-global-application-command
   *
   * Fetch a global command for your application. Returns an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  getGlobalApplicationCommand(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.request<RESTGetAPIApplicationCommandResult>(
      `applications/${applicationID}/commands/${commandID}`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-global-application-command
   *
   * > ℹ️ All parameters for this endpoint are optional.
   *
   * Edit a global command. Updates will be available in all guilds after 1 hour.
   * Returns `200` and an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editGlobalApplicationCommand(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
    data: RESTPatchAPIApplicationCommandJSONBody,
  ) {
    return this.request<RESTPatchAPIApplicationCommandResult>(
      `applications/${applicationID}/commands/${commandID}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#delete-global-application-command
   *
   * Deletes a global command. Returns `204`.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  deleteGlobalApplicationCommand(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.request(`applications/${applicationID}/commands/${commandID}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-guild-application-commands
   *
   * Fetch all of the guild commands for your application for a specific guild.
   * Returns an array of
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * objects.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildApplicationCommands(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
  ) {
    return this.request<RESTGetAPIApplicationGuildCommandsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#bulk-overwrite-global-application-commands
   *
   * Takes a list of application commands, overwriting existing commands that are
   * registered globally for this application. Updates will be available in all
   * guilds after 1 hour. Returns `200` and a list of
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * objects. Commands that do not already exist will count toward daily application
   * command create limits.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   */
  bulkOverwriteGlobalApplicationCommands(
    applicationID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(`applications/${applicationID}/commands`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-guild-application-command
   *
   * > ❗ Creating a command with the same name as an existing command for your
   * > application will overwrite the old command.
   *
   * Create a new guild command. New guild commands will be available in the guild
   * immediately. Returns `201` and an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object. If the command did not already exist, it will count toward daily
   * application command create limits.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildApplicationCommand(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    data: RESTPostAPIApplicationGuildCommandsJSONBody,
  ) {
    return this.request<RESTPostAPIApplicationGuildCommandsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-guild-application-command
   *
   * Fetch a guild command for your application. Returns an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  getGuildApplicationCommand(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.request<RESTGetAPIApplicationGuildCommandResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-guild-application-command
   *
   * > ℹ️ All parameters for this endpoint are optional.
   *
   * Edit a guild command. Updates for guild commands will be available immediately.
   * Returns `200` and an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editGuildApplicationCommand(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    commandID: ActualSnowflake,
    data: RESTPatchAPIApplicationGuildCommandJSONBody,
  ) {
    return this.request<RESTPatchAPIApplicationGuildCommandResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#delete-guild-application-command
   *
   * Delete a guild command. Returns `204` on success.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  deleteGuildApplicationCommand(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.request(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#bulk-overwrite-guild-application-commands
   *
   * Takes a list of application commands, overwriting existing commands for the
   * guild. Returns `200` and a list of
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * objects.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  bulkOverwriteGuildApplicationCommands(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    data: RESTPutAPIApplicationCommandsJSONBody,
  ) {
    return this.request<RESTPutAPIApplicationCommandsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-interaction-response
   *
   * Create a response to an Interaction from the gateway. Takes an
   * [Interaction response](https://discord.dev/interactions/slash-commands#interaction-response).
   * @param interactionID https://discord.dev/interactions/slash-commands#interaction
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  createInteractionResponse(
    interactionID: ActualSnowflake,
    interactionToken: string,
    data: RESTPostAPIInteractionCallbackJSONBody,
  ) {
    return this.request(
      `interactions/${interactionID}/${interactionToken}/callback`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-original-interaction-response
   *
   * Returns the initial Interaction response. Functions the same as
   * [Get Webhook Message](https://discord.dev/resources/webhook#get-webhook-message).
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  getOriginalInteractionResponse(
    applicationID: ActualSnowflake,
    interactionToken: string,
    data: unknown,
  ) {
    return this.request(
      `webhooks/${applicationID}/${interactionToken}/messages/@original`,
      {
        data,
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-original-interaction-response
   *
   * Edits the initial Interaction response. Functions the same as
   * [Edit Webhook Message](https://discord.dev/resources/webhook#edit-webhook-message).
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  editOriginalInteractionResponse(
    applicationID: ActualSnowflake,
    interactionToken: string,
    data: unknown,
  ) {
    return this.request(
      `webhooks/${applicationID}/${interactionToken}/messages/@original`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#delete-original-interaction-response
   *
   * Deletes the initial Interaction response. Returns `204` on success.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  deleteOriginalInteractionResponse(
    applicationID: ActualSnowflake,
    interactionToken: string,
    data: unknown,
  ) {
    return this.request(
      `webhooks/${applicationID}/${interactionToken}/messages/@original`,
      {
        data,
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-followup-message
   *
   * Create a followup message for an Interaction. Functions the same as
   * [Execute Webhook](https://discord.dev/resources/webhook#execute-webhook), but `wait` is always
   * true, and `flags` can be set to `64` in the body to send an ephemeral message.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  createFollowupMessage(
    applicationID: ActualSnowflake,
    interactionToken: string,
    data: unknown,
  ) {
    return this.request(`webhooks/${applicationID}/${interactionToken}`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-followup-message
   *
   * Edits a followup message for an Interaction. Functions the same as
   * [Edit Webhook Message](https://discord.dev/resources/webhook#edit-webhook-message).
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  editFollowupMessage(
    applicationID: ActualSnowflake,
    interactionToken: string,
    messageID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(
      `webhooks/${applicationID}/${interactionToken}/messages/${messageID}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#delete-followup-message
   *
   * Deletes a followup message for an Interaction. Returns `204` on success.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deleteFollowupMessage(
    applicationID: ActualSnowflake,
    interactionToken: string,
    messageID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(
      `webhooks/${applicationID}/${interactionToken}/messages/${messageID}`,
      {
        data,
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-guild-application-command-permissions
   *
   * Fetches command permissions for all commands for your application in a guild.
   * Returns an array of
   * [GuildApplicationCommandPermissions](https://discord.dev/interactions/slash-commands#guildapplicationcommandpermissions)
   * objects.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
  ) {
    return this.request<RESTGetAPIGuildApplicationCommandsPermissionsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/permissions`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-application-command-permissions
   *
   * Fetches command permissions for a specific command for your application in a
   * guild. Returns a
   * [GuildApplicationCommandPermissions](https://discord.dev/interactions/slash-commands#guildapplicationcommandpermissions)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  getApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.request<RESTGetAPIApplicationCommandPermissionsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}/permissions`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-application-command-permissions
   *
   * > ⚠️ This endpoint will overwrite existing permissions for the command in that
   * > guild
   *
   * Edits command permissions for a specific command for your application in a
   * guild.
   *
   * > ⚠️ Deleting or renaming a command will permanently delete all permissions
   * > for that command
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    commandID: ActualSnowflake,
    data: RESTPutAPIApplicationCommandPermissionsJSONBody,
  ) {
    return this.request<RESTPutAPIApplicationCommandPermissionsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}/permissions`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#batch-edit-application-command-permissions
   *
   * > ⚠️ This endpoint will overwrite all existing permissions for all commands in
   * > a guild
   *
   * Batch edits permissions for all commands in a guild. Takes an array of partial
   * [GuildApplicationCommandPermissions](https://discord.dev/interactions/slash-commands#guildapplicationcommandpermissions)
   * objects including `id` and `permissions`.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  batchEditApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    guildID: ActualSnowflake,
    data: RESTPutAPIGuildApplicationCommandsPermissionsJSONBody,
  ) {
    return this.request<RESTPutAPIGuildApplicationCommandsPermissionsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/permissions`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/audit-log#get-guild-audit-log
   *
   * Returns an [audit log](https://discord.dev/resources/audit/log#audit-log-object) object for
   * the guild. Requires the 'VIEW_AUDIT_LOG' permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildAuditLog(guildID: ActualSnowflake, query: RESTGetAPIAuditLogQuery) {
    return this.request<RESTGetAPIAuditLogResult>(
      `guilds/${guildID}/audit-logs`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#get-channel
   *
   * Get a channel by ID. Returns a [channel](https://discord.dev/resources/channel#channel-object)
   * object. If the channel is a thread, a
   * [thread member](https://discord.dev/resources/channel#thread-member-object) object is included
   * in the returned result.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getChannel(channelID: ActualSnowflake) {
    return this.request<RESTGetAPIChannelResult>(`channels/${channelID}`);
  }

  /**
   * https://discord.dev/resources/channel#modify-channel
   *
   * Update a channel's settings. Returns a
   * [channel](https://discord.dev/resources/channel#channel-object) on success, and a 400 BAD
   * REQUEST on invalid parameters. All JSON parameters are optional.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  editChannel(
    channelID: ActualSnowflake,
    data: RESTPatchAPIChannelJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIChannelResult>(`channels/${channelID}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#deleteclose-channel
   *
   * Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS`
   * permission for the guild, or `MANAGE_THREADS` if the channel is a thread.
   * Deleting a category does not delete its child channels; they will have their
   * `parent_id` removed and a [Channel Update](https://discord.dev/topics/gateway#channel-update)
   * Gateway event will fire for each of them. Returns a
   * [channel](https://discord.dev/resources/channel#channel-object) object on success. Fires a
   * [Channel Delete](https://discord.dev/topics/gateway#channel-delete) Gateway event (or
   * [Thread Delete](https://discord.dev/topics/gateway#thread-delete) if the channel was a
   * thread).
   *
   * > ⚠️ Deleting a guild channel cannot be undone. Use this with caution, as it
   * > is impossible to undo this action when performed on a guild channel. In
   * > contrast, when used with a private message, it is possible to undo the action
   * > by opening a private message with the recipient again.
   *
   * > ℹ️ For Community guilds, the Rules or Guidelines channel and the Community
   * > Updates channel cannot be deleted.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  deleteChannel(channelID: ActualSnowflake, reason?: string) {
    return this.request<RESTDeleteAPIChannelResult>(`channels/${channelID}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#get-channel-messages
   *
   * Returns the messages for a channel. If operating on a guild channel, this
   * endpoint requires the `VIEW_CHANNEL` permission to be present on the current
   * user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in
   * the channel then this will return no messages (since they cannot read the
   * message history). Returns an array of
   * [message](https://discord.dev/resources/channel#message-object) objects on success.
   *
   * > ℹ️ The before, after, and around keys are mutually exclusive, only one may
   * > be passed at a time.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getChannelMessages(
    channelID: ActualSnowflake,
    query: RESTGetAPIChannelMessagesQuery,
  ) {
    return this.request<RESTGetAPIChannelMessagesResult>(
      `channels/${channelID}/messages`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#get-channel-message
   *
   * Returns a specific message in the channel. If operating on a guild channel, this
   * endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the
   * current user. Returns a [message](https://discord.dev/resources/channel#message-object) object
   * on success.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  getChannelMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return this.request<RESTGetAPIChannelMessageResult>(
      `channels/${channelID}/messages/${messageID}`,
    );
  }

  /**
   * https://discord.dev/resources/channel#create-message
   *
   * > ⚠️ Before using this endpoint, you must connect to and identify with a
   * > [gateway](https://discord.dev/topics/gateway#gateways) at least once.
   *
   * > ⚠️ Discord may strip certain characters from message content, like invalid
   * > unicode characters or characters which cause unexpected message formatting. If
   * > you are passing user-generated strings into message content, consider
   * > sanitizing the data to prevent unexpected behavior and utilizing
   * > `allowed_mentions` to prevent unexpected mentions.
   *
   * Post a message to a guild text or DM channel. Returns a
   * [message](https://discord.dev/resources/channel#message-object) object. Fires a
   * [Message Create](https://discord.dev/topics/gateway#message-create) Gateway event. See
   * [message formatting](https://discord.dev/reference#message-formatting) for more information on
   * how to properly format messages.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  createMessage(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessageJSONBody,
    files?: File[],
  ) {
    return this.request<RESTPostAPIChannelMessageResult>(
      `channels/${channelID}/messages`,
      {
        data,
        files,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#crosspost-message
   *
   * Crosspost a message in a News Channel to following channels. This endpoint
   * requires the 'SEND_MESSAGES' permission, if the current user sent the message,
   * or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be
   * present for the current user.
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  crosspostMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return this.request<RESTPostAPIChannelMessageCrosspostResult>(
      `channels/${channelID}/messages/${messageID}/crosspost`,
      {
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#create-reaction
   *
   * Create a reaction for the message. This endpoint requires the
   * 'READ_MESSAGE_HISTORY' permission to be present on the current user.
   * Additionally, if nobody else has reacted to the message using this emoji, this
   * endpoint requires the 'ADD_REACTIONS' permission to be present on the current
   * user. Returns a 204 empty response on success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  createReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return this.request<RESTPutAPIChannelMessageReactionResult>(
      `channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`,
      {
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-own-reaction
   *
   * Delete a reaction the current user has made for the message. Returns a 204 empty
   * response on success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteOwnReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return this.request<RESTDeleteAPIChannelMessageOwnReaction>(
      `channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-user-reaction
   *
   * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES'
   * permission to be present on the current user. Returns a 204 empty response on
   * success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  deleteUserReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
    userID: ActualSnowflake,
  ) {
    return this.request<RESTDeleteAPIChannelMessageUserReactionResult>(
      `channels/${channelID}/messages/${messageID}/reactions/${emoji}/${userID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#get-reactions
   *
   * Get a list of users that reacted with this emoji. Returns an array of
   * [user](https://discord.dev/resources/user#user-object) objects on success. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  getReactions(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ) {
    return this.request<RESTGetAPIChannelMessageReactionUsersResult>(
      `channels/${channelID}/messages/${messageID}/reactions/${emoji}`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-all-reactions
   *
   * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES'
   * permission to be present on the current user. Fires a
   * [Message Reaction Remove All](https://discord.dev/topics/gateway#message-reaction-remove-all)
   * Gateway event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deleteAllReactions(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return this.request<RESTDeleteAPIChannelAllMessageReactionsResult>(
      `channels/${channelID}/messages/${messageID}/reactions`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-all-reactions-for-emoji
   *
   * Deletes all the reactions for a given emoji on a message. This endpoint requires
   * the `MANAGE_MESSAGES` permission to be present on the current user. Fires a
   * [Message Reaction Remove Emoji](https://discord.dev/topics/gateway#message-reaction-remove-emoji)
   * Gateway event. The `emoji` must be
   * [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request
   * will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it
   * in the format `name:id` with the emoji name and emoji id.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteAllReactionsforEmoji(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return this.request<RESTDeleteAPIChannelMessageReactionResult>(
      `channels/${channelID}/messages/${messageID}/reactions/${emoji}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#edit-message
   *
   * Edit a previously sent message. The fields `content`, `embed`, and `flags` can
   * be edited by the original message author. Other users can only edit `flags` and
   * only if they have the `MANAGE_MESSAGES` permission in the corresponding channel.
   * When specifying flags, ensure to include all previously set flags/bits in
   * addition to ones that you are modifying. Only `flags` documented in the table
   * below may be modified by users (unsupported flag changes are currently ignored
   * without error).
   *
   * When the `content` field is edited, the `mentions` array in the message object
   * will be reconstructed from scratch based on the new content. The
   * `allowed_mentions` field of the edit request controls how this happens. If there
   * is no explicit `allowed_mentions` in the edit request, the content will be
   * parsed with _default_ allowances, that is, without regard to whether or not an
   * `allowed_mentions` was present in the request that originally created the
   * message.
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object. Fires a
   * [Message Update](https://discord.dev/topics/gateway#message-update) Gateway event.
   *
   * > ℹ️ For a `file` attachment, the `Content-Disposition` subpart header MUST
   * > contain a `filename` parameter.
   *
   * > ⚠️ This endpoint supports both `application/json` and `multipart/form-data`
   * > bodies. When uploading files the `multipart/form-data` content type must be
   * > used. Note that in multipart form data, the `embed`, `allowed_mentions`, and
   * > `attachments` fields cannot be used. You can pass a stringified JSON body as a
   * > form value as `payload_json` instead. **If you supply a `payload_json` form
   * > value, all fields except for `file` fields will be ignored in the form data**.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  editMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    data: RESTPatchAPIChannelMessageJSONBody,
  ) {
    return this.request<RESTPatchAPIChannelMessageResult>(
      `channels/${channelID}/messages/${messageID}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-message
   *
   * Delete a message. If operating on a guild channel and trying to delete a message
   * that was not sent by the current user, this endpoint requires the
   * `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a
   * [Message Delete](https://discord.dev/topics/gateway#message-delete) Gateway event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deleteMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return this.request<RESTDeleteAPIChannelMessageResult>(
      `channels/${channelID}/messages/${messageID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#bulk-delete-messages
   *
   * Delete multiple messages in a single request. This endpoint can only be used on
   * guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204
   * empty response on success. Fires a
   * [Message Delete Bulk](https://discord.dev/topics/gateway#message-delete-bulk) Gateway event.
   *
   * Any message IDs given that do not exist or are invalid will count towards the
   * minimum and maximum message count (currently 2 and 100 respectively).
   *
   * > ⚠️ This endpoint will not delete messages older than 2 weeks, and will fail
   * > with a 400 BAD REQUEST if any message provided is older than that or if any
   * > duplicate message IDs are provided.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  bulkDeleteMessages(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  ) {
    return this.request<RESTPostAPIChannelMessagesBulkDeleteResult>(
      `channels/${channelID}/messages/bulk-delete`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#edit-channel-permissions
   *
   * Edit the channel permission overwrites for a user or role in a channel. Only
   * usable for guild channels. Requires the `MANAGE_ROLES` permission. Only
   * permissions your bot has in the guild or channel can be allowed/denied (unless
   * your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty
   * response on success. For more information about permissions, see
   * [permissions](https://discord.dev/topics/permissions#permissions).
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param overwriteID https://discord.dev/resources/channel#overwrite-object
   */
  editChannelPermissions(
    channelID: ActualSnowflake,
    overwriteID: ActualSnowflake,
    data: RESTPutAPIChannelPermissionJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPutAPIChannelPermissionResult>(
      `channels/${channelID}/permissions/${overwriteID}`,
      {
        data,
        method: "PUT",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#get-channel-invites
   *
   * Returns a list of [invite](https://discord.dev/resources/invite#invite-object) objects (with
   * [invite metadata](https://discord.dev/resources/invite#invite-metadata-object)) for the
   * channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS`
   * permission.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getChannelInvites(channelID: ActualSnowflake) {
    return this.request<RESTGetAPIChannelInvitesResult>(
      `channels/${channelID}/invites`,
    );
  }

  /**
   * https://discord.dev/resources/channel#create-channel-invite
   *
   * Create a new [invite](https://discord.dev/resources/invite#invite-object) object for the
   * channel. Only usable for guild channels. Requires the `CREATE_INSTANT_INVITE`
   * permission. All JSON parameters for this route are optional, however the request
   * body is not. If you are not sending any fields, you still have to send an empty
   * JSON object (`{}`). Returns an [invite](https://discord.dev/resources/invite#invite-object)
   * object. Fires an [Invite Create](https://discord.dev/topics/gateway#invite-create) Gateway
   * event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  createChannelInvite(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelInviteJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPostAPIChannelInviteResult>(
      `channels/${channelID}/invites`,
      {
        data,
        method: "POST",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-channel-permission
   *
   * Delete a channel permission overwrite for a user or role in a channel. Only
   * usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204
   * empty response on success. For more information about permissions, see
   * [permissions](https://discord.dev/topics/permissions#permissions)
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param overwriteID https://discord.dev/resources/channel#overwrite-object
   */
  deleteChannelPermission(
    channelID: ActualSnowflake,
    overwriteID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIChannelPermissionResult>(
      `channels/${channelID}/permissions/${overwriteID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#follow-news-channel
   *
   * Follow a News Channel to send messages to a target channel. Requires the
   * `MANAGE_WEBHOOKS` permission in the target channel. Returns a
   * [followed channel](https://discord.dev/resources/channel#followed-channel-object) object.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  followNewsChannel(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelFollowersJSONBody,
  ) {
    return this.request<RESTPostAPIChannelFollowersResult>(
      `channels/${channelID}/followers`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#trigger-typing-indicator
   *
   * Post a typing indicator for the specified channel. Generally bots should **not**
   * implement this route. However, if a bot is responding to a command and expects
   * the computation to take a few seconds, this endpoint may be called to let the
   * user know that the bot is processing their message. Returns a 204 empty response
   * on success. Fires a [Typing Start](https://discord.dev/topics/gateway#typing-start) Gateway
   * event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  triggerTypingIndicator(channelID: ActualSnowflake) {
    return this.request<RESTPostAPIChannelTypingResult>(
      `channels/${channelID}/typing`,
      {
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#get-pinned-messages
   *
   * Returns all pinned messages in the channel as an array of
   * [message](https://discord.dev/resources/channel#message-object) objects.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getPinnedMessages(channelID: ActualSnowflake) {
    return this.request<RESTGetAPIChannelPinsResult>(
      `channels/${channelID}/pins`,
    );
  }

  /**
   * https://discord.dev/resources/channel#add-pinned-channel-message
   *
   * Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a
   * 204 empty response on success.
   *
   * > ⚠️ The max pinned messages is 50.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  addPinnedChannelMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTPutAPIChannelPinResult>(
      `channels/${channelID}/pins/${messageID}`,
      {
        method: "PUT",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-pinned-channel-message
   *
   * Delete a pinned message in a channel. Requires the `MANAGE_MESSAGES` permission.
   * Returns a 204 empty response on success.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deletePinnedChannelMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIChannelPinResult>(
      `channels/${channelID}/pins/${messageID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#group-dm-add-recipient
   *
   * Adds a recipient to a Group DM using their access token
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  groupPrivateChannelAddRecipient(
    channelID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPutAPIChannelRecipientJSONBody,
  ) {
    return this.request<RESTPutAPIChannelRecipientResult>(
      `channels/${channelID}/recipients/${userID}`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#group-dm-remove-recipient
   *
   * Removes a recipient from a Group DM
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  groupPrivateChannelRemoveRecipient(
    channelID: ActualSnowflake,
    userID: ActualSnowflake,
  ) {
    return this.request<RESTDeleteAPIChannelRecipientResult>(
      `channels/${channelID}/recipients/${userID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#start-public-thread
   *
   * Creates a new public thread from an existing message. Returns a
   * [channel](https://discord.dev/resources/channel#channel-object) on success, and a 400 BAD
   * REQUEST on invalid parameters. Fires a
   * [Thread Create](https://discord.dev/topics/gateway#thread-create) Gateway event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  startPublicThread(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(`channels/${channelID}/messages/${messageID}/threads`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/channel#start-a-private-thread
   *
   * Creates a new private thread. Returns a
   * [channel](https://discord.dev/resources/channel#channel-object) on success, and a 400 BAD
   * REQUEST on invalid parameters. Fires a
   * [Thread Create](https://discord.dev/topics/gateway#thread-create) Gateway event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  startaprivatethread(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/threads`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/channel#join-thread
   *
   * Adds the current user to a thread. Returns a 204 empty response on success. Also
   * requires the thread is not archived. Fires a
   * [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway
   * event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  joinThread(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/thread-members/@me`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/channel#add-user-to-thread
   *
   * Adds another user to a thread. Requires the ability to send messages in the
   * thread. Also requires the thread is not archived. Returns a 204 empty response
   * on success. Fires a
   * [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway
   * event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  addUsertoThread(
    channelID: ActualSnowflake,
    userID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(`channels/${channelID}/thread-members/${userID}`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/channel#leave-thread
   *
   * Removes the current user from a thread. Returns a 204 empty response on success.
   * Fires a [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update)
   * Gateway event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  leaveThread(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/thread-members/@me`, {
      data,
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/channel#remove-user-from-thread
   *
   * Removes another user from a thread. Requires the `MANAGE_THREADS` permission or
   * that you are the creator of the thread. Also requires the thread is not
   * archived. Returns a 204 empty response on success. Fires a
   * [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway
   * event.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  removeUserfromThread(
    channelID: ActualSnowflake,
    userID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(`channels/${channelID}/thread-members/${userID}`, {
      data,
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/channel#list-thread-members
   *
   * Returns array of [thread members](https://discord.dev/resources/channel#thread-member-object)
   * objects that are members of the thread.
   *
   * > ⚠️ This endpoint is restricted according to whether the `GUILD_MEMBERS`
   * > [Privileged Intent](https://discord.dev/topics/gateway#privileged-intents) is enabled for
   * > your application.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getThreadMembers(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/threads-members`, {
      data,
    });
  }

  /**
   * https://discord.dev/resources/channel#list-active-threads
   *
   * Returns all active threads in the channel, including public and private threads.
   * Threads are ordered by their `id`, in descending order. Requires the
   * `READ_MESSAGE_HISTORY` permission.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getActiveThreads(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/threads/active`, {
      data,
    });
  }

  /**
   * https://discord.dev/resources/channel#list-public-archived-threads
   *
   * Returns archived threads in the channel that are public. When called on a
   * `GUILD_TEXT` channel, returns threads of
   * [type](https://discord.dev/resources/channel#channel-object-channel-types)
   * `GUILD_PUBLIC_THREAD`. When called on a `GUILD_NEWS` channel returns threads of
   * [type](https://discord.dev/resources/channel#channel-object-channel-types)
   * `GUILD_NEWS_THREAD`. Threads are ordered by `archive_timestamp`, in descending
   * order. Requires the `READ_MESSAGE_HISTORY` permission.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getPublicArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/threads/archived/public`, {
      data,
    });
  }

  /**
   * https://discord.dev/resources/channel#list-private-archived-threads
   *
   * Returns archived threads in the channel that are of
   * [type](https://discord.dev/resources/channel#channel-object-channel-types)
   * `GUILD_PRIVATE_THREAD`. Threads are ordered by `archive_timestamp`, in
   * descending order. Requires both the `READ_MESSAGE_HISTORY` and `MANAGE_THREADS`
   * permissions.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getPrivateArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return this.request(`channels/${channelID}/threads/archived/private`, {
      data,
    });
  }

  /**
   * https://discord.dev/resources/channel#list-joined-private-archived-threads
   *
   * Returns archived threads in the channel that are of
   * [type](https://discord.dev/resources/channel#channel-object-channel-types)
   * `GUILD_PRIVATE_THREAD`, and the user has joined. Threads are ordered by their
   * `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getJoinedPrivateArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return this.request(
      `channels/${channelID}/users/@me/threads/archived/private`,
      {
        data,
      },
    );
  }

  /**
   * https://discord.dev/resources/emoji#list-guild-emojis
   *
   * Returns a list of [emoji](https://discord.dev/resources/emoji#emoji-object) objects for the
   * given guild.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildEmojis(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildEmojisResult>(
      `guilds/${guildID}/emojis`,
    );
  }

  /**
   * https://discord.dev/resources/emoji#get-guild-emoji
   *
   * Returns an [emoji](https://discord.dev/resources/emoji#emoji-object) object for the given
   * guild and emoji IDs.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param emojiID https://discord.dev/resources/emoji#emoji-object
   */
  getGuildEmoji(guildID: ActualSnowflake, emojiID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildEmojiResult>(
      `guilds/${guildID}/emojis/${emojiID}`,
    );
  }

  /**
   * https://discord.dev/resources/emoji#create-guild-emoji
   *
   * Create a new emoji for the guild. Requires the `MANAGE_EMOJIS` permission.
   * Returns the new [emoji](https://discord.dev/resources/emoji#emoji-object) object on success.
   * Fires a [Guild Emojis Update](https://discord.dev/topics/gateway#guild-emojis-update) Gateway
   * event.
   *
   * > ⚠️ Emojis and animated emojis have a maximum file size of 256kb. Attempting
   * > to upload an emoji larger than this limit will fail and return 400 Bad Request
   * > and an error message, but not a
   * > [JSON status code](https://discord.dev/topics/opcodes/and/status/codes#json).
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildEmoji(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPostAPIGuildEmojiResult>(
      `guilds/${guildID}/emojis`,
      {
        data,
        method: "POST",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/emoji#modify-guild-emoji
   *
   * Modify the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns the
   * updated [emoji](https://discord.dev/resources/emoji#emoji-object) object on success. Fires a
   * [Guild Emojis Update](https://discord.dev/topics/gateway#guild-emojis-update) Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param emojiID https://discord.dev/resources/emoji#emoji-object
   */
  editGuildEmoji(
    guildID: ActualSnowflake,
    emojiID: ActualSnowflake,
    data: RESTPatchAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIGuildEmojiResult>(
      `guilds/${guildID}/emojis/${emojiID}`,
      {
        data,
        method: "PATCH",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/emoji#delete-guild-emoji
   *
   * Delete the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns
   * `204 No Content` on success. Fires a
   * [Guild Emojis Update](https://discord.dev/topics/gateway#guild-emojis-update) Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param emojiID https://discord.dev/resources/emoji#emoji-object
   */
  deleteGuildEmoji(
    guildID: ActualSnowflake,
    emojiID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIGuildEmojiResult>(
      `guilds/${guildID}/emojis/${emojiID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#create-guild
   *
   * Create a new guild. Returns a [guild](https://discord.dev/resources/guild#guild-object) object
   * on success. Fires a [Guild Create](https://discord.dev/topics/gateway#guild-create) Gateway
   * event.
   *
   * > ⚠️ This endpoint can be used only by bots in less than 10 guilds.
   */
  createGuild(data: RESTPostAPIGuildsJSONBody) {
    return this.request<RESTPostAPIGuildsResult>("guilds", {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild
   *
   * Returns the [guild](https://discord.dev/resources/guild#guild-object) object for the given id.
   * If `with_counts` is set to `true`, this endpoint will also return
   * `approximate_member_count` and `approximate_presence_count` for the guild.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuild(guildID: ActualSnowflake, query: RESTGetAPIGuildQuery) {
    return this.request<RESTGetAPIGuildResult>(`guilds/${guildID}`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-preview
   *
   * Returns the [guild preview](https://discord.dev/resources/guild#guild-preview-object) object
   * for the given id. If the user is not in the guild, then the guild must be
   * Discoverable.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildPreview(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildPreviewResult>(
      `guilds/${guildID}/preview`,
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild
   *
   * Modify a guild's settings. Requires the `MANAGE_GUILD` permission. Returns the
   * updated [guild](https://discord.dev/resources/guild#guild-object) object on success. Fires a
   * [Guild Update](https://discord.dev/topics/gateway#guild-update) Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  editGuild(guildID: ActualSnowflake, data: RESTPatchAPIGuildJSONBody) {
    return this.request<RESTPatchAPIGuildResult>(`guilds/${guildID}`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild#delete-guild
   *
   * Delete a guild permanently. User must be owner. Returns `204 No Content` on
   * success. Fires a [Guild Delete](https://discord.dev/topics/gateway#guild-delete) Gateway
   * event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  deleteGuild(guildID: ActualSnowflake) {
    return this.request<RESTDeleteAPIGuildResult>(`guilds/${guildID}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-channels
   *
   * Returns a list of guild [channel](https://discord.dev/resources/channel#channel-object)
   * objects.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildChannels(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildChannelsResult>(
      `guilds/${guildID}/channels`,
    );
  }

  /**
   * https://discord.dev/resources/guild#create-guild-channel
   *
   * Create a new [channel](https://discord.dev/resources/channel#channel-object) object for the
   * guild. Requires the `MANAGE_CHANNELS` permission. If setting permission
   * overwrites, only permissions your bot has in the guild can be allowed/denied.
   * Setting `MANAGE_ROLES` permission in channels is only possible for guild
   * administrators. Returns the new
   * [channel](https://discord.dev/resources/channel#channel-object) object on success. Fires a
   * [Channel Create](https://discord.dev/topics/gateway#channel-create) Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional excluding 'name'
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildChannel(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildChannelJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPostAPIGuildChannelResult>(
      `guilds/${guildID}/channels`,
      {
        data,
        method: "POST",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-channel-positions
   *
   * Modify the positions of a set of
   * [channel](https://discord.dev/resources/channel#channel-object) objects for the guild.
   * Requires `MANAGE_CHANNELS` permission. Returns a 204 empty response on success.
   * Fires multiple [Channel Update](https://discord.dev/topics/gateway#channel-update) Gateway
   * events.
   *
   * > ℹ️ Only channels to be modified are required, with the minimum being a swap
   * > between at least two channels.
   *
   * This endpoint takes a JSON array of parameters in the following format:
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  editGuildChannelPositions(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildChannelPositionsJSONBody,
  ) {
    return this.request<RESTPatchAPIGuildChannelPositionsResult>(
      `guilds/${guildID}/channels`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-member
   *
   * Returns a [guild member](https://discord.dev/resources/guild#guild-member-object) object for
   * the specified user.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  getGuildMember(guildID: ActualSnowflake, userID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildMemberResult>(
      `guilds/${guildID}/members/${userID}`,
    );
  }

  /**
   * https://discord.dev/resources/guild#list-guild-members
   *
   * Returns a list of [guild member](https://discord.dev/resources/guild#guild-member-object)
   * objects that are members of the guild.
   *
   * > ⚠️ This endpoint is restricted according to whether the `GUILD_MEMBERS`
   * > [Privileged Intent](https://discord.dev/topics/gateway#privileged-intents) is enabled for
   * > your application.
   *
   * > ℹ️ All parameters to this endpoint are optional
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildMembers(
    guildID: ActualSnowflake,
    query: RESTGetAPIGuildMembersQuery,
  ) {
    return this.request<RESTGetAPIGuildMembersResult>(
      `guilds/${guildID}/members`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#search-guild-members
   *
   * Returns a list of [guild member](https://discord.dev/resources/guild#guild-member-object)
   * objects whose username or nickname starts with a provided string.
   *
   * > ℹ️ All parameters to this endpoint except for `query` are optional
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  searchGuildMembers(
    guildID: ActualSnowflake,
    query: RESTGetAPIGuildMembersSearchQuery,
  ) {
    return this.request<RESTGetAPIGuildMembersSearchResult>(
      `guilds/${guildID}/members/search`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#add-guild-member
   *
   * Adds a user to the guild, provided you have a valid oauth2 access token for the
   * user with the `guilds.join` scope. Returns a 201 Created with the
   * [guild member](https://discord.dev/resources/guild#guild-member-object) as the body, or 204 No
   * Content if the user is already a member of the guild. Fires a
   * [Guild Member Add](https://discord.dev/topics/gateway#guild-member-add) Gateway event.
   *
   * For guilds with
   * [Membership Screening](https://discord.dev/resources/guild#membership-screening-object)
   * enabled, this endpoint will default to adding new members as `pending` in the
   * [guild member object](https://discord.dev/resources/guild#guild-member-object). Members that
   * are `pending` will have to complete membership screening before they become full
   * members that can talk.
   *
   * > ℹ️ All parameters to this endpoint except for `access_token` are optional.
   *
   * > ℹ️ The Authorization header must be a Bot token (belonging to the same
   * > application used for authorization), and the bot must be a member of the guild
   * > with `CREATE_INSTANT_INVITE` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  addGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPutAPIGuildMemberJSONBody,
  ) {
    return this.request<RESTPutAPIGuildMemberResult>(
      `guilds/${guildID}/members/${userID}`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-member
   *
   * Modify attributes of a
   * [guild member](https://discord.dev/resources/guild#guild-member-object). Returns a 200 OK with
   * the [guild member](https://discord.dev/resources/guild#guild-member-object) as the body. Fires
   * a [Guild Member Update](https://discord.dev/topics/gateway#guild-member-update) Gateway event.
   * If the `channel_id` is set to null, this will force the target user to be
   * disconnected from voice.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable. When moving
   * > members to channels, the API user _must_ have permissions to both connect to
   * > the channel and have the `MOVE_MEMBERS` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  editGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPatchAPIGuildMemberJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIGuildMemberResult>(
      `guilds/${guildID}/members/${userID}`,
      {
        data,
        method: "PATCH",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-current-user-nick
   *
   * Modifies the nickname of the current user in a guild. Returns a 200 with the
   * nickname on success. Fires a
   * [Guild Member Update](https://discord.dev/topics/gateway#guild-member-update) Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  editCurrentUserNick(
    guildID: ActualSnowflake,
    data: RESTPatchAPICurrentGuildMemberNicknameJSONBody,
  ) {
    return this.request<RESTPatchAPICurrentGuildMemberNicknameResult>(
      `guilds/${guildID}/members/@me/nick`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#add-guild-member-role
   *
   * Adds a role to a [guild member](https://discord.dev/resources/guild#guild-member-object).
   * Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success.
   * Fires a [Guild Member Update](https://discord.dev/topics/gateway#guild-member-update) Gateway
   * event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   * @param roleID https://discord.dev/topics/permissions#role-object
   */
  addGuildMemberRole(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTPutAPIGuildMemberRoleResult>(
      `guilds/${guildID}/members/${userID}/roles/${roleID}`,
      {
        method: "PUT",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#remove-guild-member-role
   *
   * Removes a role from a [guild member](https://discord.dev/resources/guild#guild-member-object).
   * Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success.
   * Fires a [Guild Member Update](https://discord.dev/topics/gateway#guild-member-update) Gateway
   * event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   * @param roleID https://discord.dev/topics/permissions#role-object
   */
  removeGuildMemberRole(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIGuildMemberRoleResult>(
      `guilds/${guildID}/members/${userID}/roles/${roleID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#remove-guild-member
   *
   * Remove a member from a guild. Requires `KICK_MEMBERS` permission. Returns a 204
   * empty response on success. Fires a
   * [Guild Member Remove](https://discord.dev/topics/gateway#guild-member-remove) Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  removeGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIGuildMemberResult>(
      `guilds/${guildID}/members/${userID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-bans
   *
   * Returns a list of [ban](https://discord.dev/resources/guild#ban-object) objects for the users
   * banned from this guild. Requires the `BAN_MEMBERS` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildBans(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildBansResult>(`guilds/${guildID}/bans`);
  }

  /**
   * https://discord.dev/resources/guild#get-guild-ban
   *
   * Returns a [ban](https://discord.dev/resources/guild#ban-object) object for the given user or a
   * 404 not found if the ban cannot be found. Requires the `BAN_MEMBERS` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  getGuildBan(guildID: ActualSnowflake, userID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildBanResult>(
      `guilds/${guildID}/bans/${userID}`,
    );
  }

  /**
   * https://discord.dev/resources/guild#create-guild-ban
   *
   * Create a guild ban, and optionally delete previous messages sent by the banned
   * user. Requires the `BAN_MEMBERS` permission. Returns a 204 empty response on
   * success. Fires a [Guild Ban Add](https://discord.dev/topics/gateway#guild-ban-add) Gateway
   * event.
   *
   * > ℹ️ Supplying a reason in the JSON body will override `X-Audit-Log-Reason`
   * > header if both are provided.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  createGuildBan(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPutAPIGuildBanJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPutAPIGuildBanResult>(
      `guilds/${guildID}/bans/${userID}`,
      {
        data,
        method: "PUT",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#remove-guild-ban
   *
   * Remove the ban for a user. Requires the `BAN_MEMBERS` permissions. Returns a 204
   * empty response on success. Fires a
   * [Guild Ban Remove](https://discord.dev/topics/gateway#guild-ban-remove) Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  removeGuildBan(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIGuildBanResult>(
      `guilds/${guildID}/bans/${userID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-roles
   *
   * Returns a list of [role](https://discord.dev/topics/permissions#role-object) objects for the
   * guild.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildRoles(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildRolesResult>(`guilds/${guildID}/roles`);
  }

  /**
   * https://discord.dev/resources/guild#create-guild-role
   *
   * Create a new [role](https://discord.dev/topics/permissions#role-object) for the guild.
   * Requires the `MANAGE_ROLES` permission. Returns the new
   * [role](https://discord.dev/topics/permissions#role-object) object on success. Fires a
   * [Guild Role Create](https://discord.dev/topics/gateway#guild-role-create) Gateway event. All
   * JSON params are optional.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildRole(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildRoleJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPostAPIGuildRoleResult>(`guilds/${guildID}/roles`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-role-positions
   *
   * Modify the positions of a set of [role](https://discord.dev/topics/permissions#role-object)
   * objects for the guild. Requires the `MANAGE_ROLES` permission. Returns a list of
   * all of the guild's [role](https://discord.dev/topics/permissions#role-object) objects on
   * success. Fires multiple
   * [Guild Role Update](https://discord.dev/topics/gateway#guild-role-update) Gateway events.
   *
   * This endpoint takes a JSON array of parameters in the following format:
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  editGuildRolePositions(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildRolePositionsJSONBody,
  ) {
    return this.request<RESTPatchAPIGuildRolePositionsResult>(
      `guilds/${guildID}/roles`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-role
   *
   * Modify a guild role. Requires the `MANAGE_ROLES` permission. Returns the updated
   * [role](https://discord.dev/topics/permissions#role-object) on success. Fires a
   * [Guild Role Update](https://discord.dev/topics/gateway#guild-role-update) Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param roleID https://discord.dev/topics/permissions#role-object
   */
  editGuildRole(
    guildID: ActualSnowflake,
    roleID: ActualSnowflake,
    data: RESTPatchAPIGuildRoleJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIGuildRoleResult>(
      `guilds/${guildID}/roles/${roleID}`,
      {
        data,
        method: "PATCH",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#delete-guild-role
   *
   * Delete a guild role. Requires the `MANAGE_ROLES` permission. Returns a 204 empty
   * response on success. Fires a
   * [Guild Role Delete](https://discord.dev/topics/gateway#guild-role-delete) Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param roleID https://discord.dev/topics/permissions#role-object
   */
  deleteGuildRole(
    guildID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIGuildRoleResult>(
      `guilds/${guildID}/roles/${roleID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-prune-count
   *
   * Returns an object with one 'pruned' key indicating the number of members that
   * would be removed in a prune operation. Requires the `KICK_MEMBERS` permission.
   *
   * By default, prune will not remove users with roles. You can optionally include
   * specific roles in your prune by providing the `include_roles` parameter. Any
   * inactive user that has a subset of the provided role(s) will be counted in the
   * prune and users with additional roles will not.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildPruneCount(
    guildID: ActualSnowflake,
    query: RESTGetAPIGuildPruneCountQuery,
  ) {
    return this.request<RESTGetAPIGuildPruneCountResult>(
      `guilds/${guildID}/prune`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#begin-guild-prune
   *
   * Begin a prune operation. Requires the `KICK_MEMBERS` permission. Returns an
   * object with one 'pruned' key indicating the number of members that were removed
   * in the prune operation. For large guilds it's recommended to set the
   * `compute_prune_count` option to `false`, forcing 'pruned' to `null`. Fires
   * multiple [Guild Member Remove](https://discord.dev/topics/gateway#guild-member-remove) Gateway
   * events.
   *
   * By default, prune will not remove users with roles. You can optionally include
   * specific roles in your prune by providing the `include_roles` parameter. Any
   * inactive user that has a subset of the provided role(s) will be included in the
   * prune and users with additional roles will not.
   *
   * > ℹ️ Supplying a reason in the JSON body will override `X-Audit-Log-Reason`
   * > header if both are provided.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  beginGuildPrune(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildPruneJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPostAPIGuildPruneResult>(
      `guilds/${guildID}/prune`,
      {
        data,
        method: "POST",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-voice-regions
   *
   * Returns a list of [voice region](https://discord.dev/resources/voice#voice-region-object)
   * objects for the guild. Unlike the similar `/voice` route, this returns VIP
   * servers when the guild is VIP-enabled.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildVoiceRegions(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildVoiceRegionsResult>(
      `guilds/${guildID}/regions`,
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-invites
   *
   * Returns a list of [invite](https://discord.dev/resources/invite#invite-object) objects (with
   * [invite metadata](https://discord.dev/resources/invite#invite-metadata-object)) for the guild.
   * Requires the `MANAGE_GUILD` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildInvites(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildInvitesResult>(
      `guilds/${guildID}/invites`,
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-integrations
   *
   * Returns a list of [integration](https://discord.dev/resources/guild#integration-object)
   * objects for the guild. Requires the `MANAGE_GUILD` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildIntegrations(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildIntegrationsResult>(
      `guilds/${guildID}/integrations`,
    );
  }

  /**
   * https://discord.dev/resources/guild#delete-guild-integration
   *
   * Delete the attached [integration](https://discord.dev/resources/guild#integration-object)
   * object for the guild. Deletes any associated webhooks and kicks the associated
   * bot if there is one. Requires the `MANAGE_GUILD` permission. Returns a 204 empty
   * response on success. Fires a
   * [Guild Integrations Update](https://discord.dev/topics/gateway#guild-integrations-update)
   * Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param integrationID https://discord.dev/resources/guild#integration-object
   */
  deleteGuildIntegration(
    guildID: ActualSnowflake,
    integrationID: ActualSnowflake,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIGuildIntegrationResult>(
      `guilds/${guildID}/integrations/${integrationID}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-widget-settings
   *
   * Returns a [guild widget](https://discord.dev/resources/guild#guild-widget-object) object.
   * Requires the `MANAGE_GUILD` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildWidgetSettings(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildWidgetSettingsResult>(
      `guilds/${guildID}/widget`,
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-widget
   *
   * Modify a [guild widget](https://discord.dev/resources/guild#guild-widget-object) object for
   * the guild. All attributes may be passed in with JSON and modified. Requires the
   * `MANAGE_GUILD` permission. Returns the updated
   * [guild widget](https://discord.dev/resources/guild#guild-widget-object) object.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  editGuildWidget(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildWidgetSettingsJSONBody,
  ) {
    return this.request<RESTPatchAPIGuildWidgetSettingsResult>(
      `guilds/${guildID}/widget`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-widget
   *
   * Returns the widget for the guild.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildWidget(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildWidgetJSONResult>(
      `guilds/${guildID}/widget.json`,
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-vanity-url
   *
   * Returns a partial [invite](https://discord.dev/resources/invite#invite-object) object for
   * guilds with that feature enabled. Requires the `MANAGE_GUILD` permission. `code`
   * will be null if a vanity url for the guild is not set.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildVanityURL(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildVanityUrlResult>(
      `guilds/${guildID}/vanity-url`,
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-widget-image
   *
   * Returns a PNG image widget for the guild. Requires no permissions or
   * authentication.
   *
   * > ℹ️ All parameters to this endpoint are optional.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildWidgetImage(
    guildID: ActualSnowflake,
    query: RESTGetAPIGuildWidgetImageQuery,
  ) {
    return this.request<RESTGetAPIGuildWidgetImageResult>(
      `guilds/${guildID}/widget.png`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#get-guild-welcome-screen
   *
   * Returns the [Welcome Screen](https://discord.dev/resources/guild#welcome-screen-object) object
   * for the guild.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildWelcomeScreen(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildWelcomeScreenResult>(
      `guilds/${guildID}/welcome-screen`,
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-welcome-screen
   *
   * Modify the guild's
   * [Welcome Screen](https://discord.dev/resources/guild#welcome-screen-object). Requires the
   * `MANAGE_GUILD` permission. Returns the updated
   * [Welcome Screen](https://discord.dev/resources/guild#welcome-screen-object) object.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  editGuildWelcomeScreen(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildWelcomeScreenJSONBody,
    reason?: string,
  ) {
    return this.request(`guilds/${guildID}/welcome-screen`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#update-current-user-voice-state
   *
   * Updates the current user's voice state.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  updateCurrentUserVoiceState(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody,
  ) {
    return this.request(`guilds/${guildID}/voice-states/@me`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild#update-user-voice-state
   *
   * Updates another user's voice state.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  updateUserVoiceState(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPatchAPIGuildVoiceStateUserJSONBody,
    reason?: string,
  ) {
    return this.request(`guilds/${guildID}/voice-states/${userID}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/invite#get-invite
   *
   * Returns an [invite](https://discord.dev/resources/invite#invite-object) object for the given
   * code.
   * @param inviteCode https://discord.dev/resources/invite#invite-object
   */
  getInvite(inviteCode: string, query: RESTGetAPIInviteQuery) {
    return this.request<RESTGetAPIInviteResult>(`invites/${inviteCode}`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/invite#delete-invite
   *
   * Delete an invite. Requires the `MANAGE_CHANNELS` permission on the channel this
   * invite belongs to, or `MANAGE_GUILD` to remove any invite across the guild.
   * Returns an [invite](https://discord.dev/resources/invite#invite-object) object on success.
   * Fires a [Invite Delete](https://discord.dev/topics/gateway#invite-delete) Gateway event.
   * @param inviteCode https://discord.dev/resources/invite#invite-object
   */
  deleteInvite(inviteCode: string, reason?: string) {
    return this.request<RESTDeleteAPIInviteResult>(`invites/${inviteCode}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/template#get-template
   *
   * Returns a [template](https://discord.dev/resources/template#template-object) object for the
   * given code.
   * @param templateCode https://discord.dev/resources/template#template-object
   */
  getGuildTemplate(templateCode: string) {
    return this.request<RESTGetAPITemplateResult>(
      `guilds/templates/${templateCode}`,
    );
  }

  /**
   * https://discord.dev/resources/template#create-guild-from-template
   *
   * Create a new guild based on a template. Returns a
   * [guild](https://discord.dev/resources/guild#guild-object) object on success. Fires a
   * [Guild Create](https://discord.dev/topics/gateway#guild-create) Gateway event.
   *
   * > ⚠️ This endpoint can be used only by bots in less than 10 guilds.
   * @param templateCode https://discord.dev/resources/template#template-object
   */
  createGuildfromTemplate(
    templateCode: string,
    data: RESTPostAPITemplateCreateGuildJSONBody,
  ) {
    return this.request<RESTPostAPITemplateCreateGuildResult>(
      `guilds/templates/${templateCode}`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/template#get-guild-templates
   *
   * Returns an array of [template](https://discord.dev/resources/template#template-object)
   * objects. Requires the `MANAGE_GUILD` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildTemplates(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildTemplatesResult>(
      `guilds/${guildID}/templates`,
    );
  }

  /**
   * https://discord.dev/resources/template#create-guild-template
   *
   * Creates a template for the guild. Requires the `MANAGE_GUILD` permission.
   * Returns the created [template](https://discord.dev/resources/template#template-object) object
   * on success.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildTemplate(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildTemplatesJSONBody,
  ) {
    return this.request<RESTPostAPIGuildTemplatesResult>(
      `guilds/${guildID}/templates`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/template#sync-guild-template
   *
   * Syncs the template to the guild's current state. Requires the `MANAGE_GUILD`
   * permission. Returns the [template](https://discord.dev/resources/template#template-object)
   * object on success.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param templateCode https://discord.dev/resources/template#template-object
   */
  syncGuildTemplate(guildID: ActualSnowflake, templateCode: string) {
    return this.request<RESTPutAPIGuildTemplateSyncResult>(
      `guilds/${guildID}/templates/${templateCode}`,
      {
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/template#modify-guild-template
   *
   * Modifies the template's metadata. Requires the `MANAGE_GUILD` permission.
   * Returns the [template](https://discord.dev/resources/template#template-object) object on
   * success.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param templateCode https://discord.dev/resources/template#template-object
   */
  editGuildTemplate(
    guildID: ActualSnowflake,
    templateCode: string,
    data: RESTPatchAPIGuildTemplateJSONBody,
  ) {
    return this.request<RESTPatchAPIGuildTemplateResult>(
      `guilds/${guildID}/templates/${templateCode}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/template#delete-guild-template
   *
   * Deletes the template. Requires the `MANAGE_GUILD` permission. Returns the
   * deleted [template](https://discord.dev/resources/template#template-object) object on success.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param templateCode https://discord.dev/resources/template#template-object
   */
  deleteGuildTemplate(guildID: ActualSnowflake, templateCode: string) {
    return this.request<RESTDeleteAPIGuildTemplateResult>(
      `guilds/${guildID}/templates/${templateCode}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/user#get-current-user
   *
   * Returns the [user](https://discord.dev/resources/user#user-object) object of the requester's
   * account. For OAuth2, this requires the `identify` scope, which will return the
   * object _without_ an email, and optionally the `email` scope, which returns the
   * object _with_ an email.
   */
  getCurrentUser() {
    return this.request<RESTGetAPICurrentUserResult>("users/@me");
  }

  /**
   * https://discord.dev/resources/user#get-user
   *
   * Returns a [user](https://discord.dev/resources/user#user-object) object for a given user ID.
   * @param userID https://discord.dev/resources/user#user-object
   */
  getUser(userID: ActualSnowflake) {
    return this.request<RESTGetAPIUserResult>(`users/${userID}`);
  }

  /**
   * https://discord.dev/resources/user#modify-current-user
   *
   * Modify the requester's user account settings. Returns a
   * [user](https://discord.dev/resources/user#user-object) object on success.
   *
   * > ℹ️ All parameters to this endpoint are optional.
   */
  editCurrentUser(data: RESTPatchAPICurrentUserJSONBody) {
    return this.request<RESTPatchAPICurrentUserResult>("users/@me", {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/user#get-current-user-guilds
   *
   * Returns a list of partial [guild](https://discord.dev/resources/guild#guild-object) objects
   * the current user is a member of. Requires the `guilds` OAuth2 scope.
   */
  getCurrentUserGuilds(query: RESTGetAPICurrentUserGuildsQuery) {
    return this.request<RESTGetAPICurrentUserGuildsResult>("users/@me/guilds", {
      query,
    });
  }

  /**
   * https://discord.dev/resources/user#leave-guild
   *
   * Leave a guild. Returns a 204 empty response on success.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  leaveGuild(guildID: ActualSnowflake) {
    return this.request<RESTDeleteAPICurrentUserGuildResult>(
      `users/@me/guilds/${guildID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/user#create-dm
   *
   * Create a new DM channel with a user. Returns a
   * [DM channel](https://discord.dev/resources/channel#channel-object) object.
   *
   * > ⚠️ You should not use this endpoint to DM everyone in a server about
   * > something. DMs should generally be initiated by a user action. If you open a
   * > significant amount of DMs too quickly, your bot may be rate limited or blocked
   * > from opening new ones.
   */
  createPrivateChannel(data: RESTPostAPICurrentUserCreateDMChannelJSONBody) {
    return this.request<RESTPostAPICurrentUserCreateDMChannelResult>(
      "users/@me/channels",
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/user#create-group-dm
   *
   * Create a new group DM channel with multiple users. Returns a
   * [DM channel](https://discord.dev/resources/channel#channel-object) object. This endpoint was
   * intended to be used with the now-deprecated GameBridge SDK. DMs created with
   * this endpoint will not be shown in the Discord client
   *
   * > ⚠️ This endpoint is limited to 10 active group DMs.
   */
  createGroupPrivateChannel(data: unknown) {
    return this.request("users/@me/channels", {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/user#get-user-connections
   *
   * Returns a list of [connection](https://discord.dev/resources/user#connection-object) objects.
   * Requires the `connections` OAuth2 scope.
   */
  getUserConnections() {
    return this.request<RESTGetAPICurrentUserConnectionsResult>(
      "users/@me/connections",
    );
  }

  /**
   * https://discord.dev/resources/voice#list-voice-regions
   *
   * Returns an array of [voice region](https://discord.dev/resources/voice#voice-region-object)
   * objects that can be used when creating servers.
   */
  getVoiceRegions() {
    return this.request<GetAPIVoiceRegionsResult>("voice/regions");
  }

  /**
   * https://discord.dev/resources/webhook#create-webhook
   *
   * Create a new webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns a
   * [webhook](https://discord.dev/resources/webhook#webhook-object) object on success. Webhook
   * names follow our naming restrictions that can be found in our
   * [Usernames and Nicknames](https://discord.dev/resources/user#usernames-and-nicknames)
   * documentation, with the following additional stipulations:
   *
   * - Webhook names cannot be: 'clyde'
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  createWebhook(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelWebhookJSONBody,
  ) {
    return this.request<RESTPostAPIChannelWebhookResult>(
      `channels/${channelID}/webhooks`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#get-channel-webhooks
   *
   * Returns a list of channel [webhook](https://discord.dev/resources/webhook#webhook-object)
   * objects. Requires the `MANAGE_WEBHOOKS` permission.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getChannelWebhooks(channelID: ActualSnowflake) {
    return this.request<RESTGetAPIChannelWebhooksResult>(
      `channels/${channelID}/webhooks`,
    );
  }

  /**
   * https://discord.dev/resources/webhook#get-guild-webhooks
   *
   * Returns a list of guild [webhook](https://discord.dev/resources/webhook#webhook-object)
   * objects. Requires the `MANAGE_WEBHOOKS` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildWebhooks(guildID: ActualSnowflake) {
    return this.request<RESTGetAPIGuildWebhooksResult>(
      `guilds/${guildID}/webhooks`,
    );
  }

  /**
   * https://discord.dev/resources/webhook#get-webhook
   *
   * Returns the new [webhook](https://discord.dev/resources/webhook#webhook-object) object for the
   * given id.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   */
  getWebhook(webhookID: ActualSnowflake) {
    return this.request<RESTGetAPIWebhookResult>(`webhooks/${webhookID}`);
  }

  /**
   * https://discord.dev/resources/webhook#get-webhook-with-token
   *
   * Same as above, except this call does not require authentication and returns no
   * user in the webhook object.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  getWebhookwithToken(webhookID: ActualSnowflake, webhookToken: string) {
    return this.request<RESTGetAPIWebhookWithTokenResult>(
      `webhooks/${webhookID}/${webhookToken}`,
    );
  }

  /**
   * https://discord.dev/resources/webhook#modify-webhook
   *
   * Modify a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated
   * [webhook](https://discord.dev/resources/webhook#webhook-object) object on success.
   *
   * > ℹ️ All parameters to this endpoint are optional
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   */
  editWebhook(
    webhookID: ActualSnowflake,
    data: RESTPatchAPIWebhookJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIWebhookResult>(`webhooks/${webhookID}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#modify-webhook-with-token
   *
   * Same as above, except this call does not require authentication, does not accept
   * a `channel_id` parameter in the body, and does not return a user in the webhook
   * object.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  editWebhookwithToken(
    webhookID: ActualSnowflake,
    webhookToken: string,
    data: RESTPatchAPIWebhookWithTokenJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIWebhookWithTokenResult>(
      `webhooks/${webhookID}/${webhookToken}`,
      {
        data,
        method: "PATCH",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#delete-webhook
   *
   * Delete a webhook permanently. Requires the `MANAGE_WEBHOOKS` permission. Returns
   * a 204 NO CONTENT response on success.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   */
  deleteWebhook(webhookID: ActualSnowflake, reason?: string) {
    return this.request<RESTDeleteAPIWebhookResult>(`webhooks/${webhookID}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#delete-webhook-with-token
   *
   * Same as above, except this call does not require authentication.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  deleteWebhookwithToken(
    webhookID: ActualSnowflake,
    webhookToken: string,
    reason?: string,
  ) {
    return this.request<RESTDeleteAPIWebhookWithTokenResult>(
      `webhooks/${webhookID}/${webhookToken}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#execute-webhook
   *
   * > ℹ️ Note that when sending a message, you must provide a value for at **least
   * > one of** `content`, `embeds`, or `file`.
   *
   * > ℹ️ For a `file` attachment, the `Content-Disposition` subpart header MUST
   * > contain a `filename` parameter.
   *
   * > ⚠️ This endpoint supports both `application/json` and `multipart/form-data`
   * > bodies. When uploading files the `multipart/form-data` content type must be
   * > used. Note that in multipart form data, the `embed` and `allowed_mentions`
   * > fields cannot be used. You can pass a stringified JSON body as a form value as
   * > `payload_json` instead. **If you supply a `payload_json` form value, all
   * > fields except for `file` fields will be ignored in the form data**.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeWebhook(
    webhookID: ActualSnowflake,
    webhookToken: string,
    data: RESTPostAPIWebhookWithTokenJSONBody,
    files?: File[],
  ) {
    return this.request<RESTPostAPIWebhookWithTokenResult>(
      `webhooks/${webhookID}/${webhookToken}`,
      {
        data,
        files,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#execute-slackcompatible-webhook
   *
   * Refer to [Slack's documentation](https://api.slack.com/incoming-webhooks) for
   * more information. We do not support Slack's `channel`, `icon_emoji`, `mrkdwn`,
   * or `mrkdwn_in` properties.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeSlackCompatibleWebhook(
    webhookID: ActualSnowflake,
    webhookToken: string,
    query: RESTPostAPIWebhookWithTokenSlackQuery,
  ) {
    return this.request<RESTPostAPIWebhookWithTokenSlackResult>(
      `webhooks/${webhookID}/${webhookToken}/slack`,
      {
        method: "POST",
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#execute-githubcompatible-webhook
   *
   * Add a new webhook to your GitHub repo (in the repo's settings), and use this
   * endpoint as the "Payload URL." You can choose what events your Discord channel
   * receives by choosing the "Let me select individual events" option and selecting
   * individual events for the new webhook you're configuring.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeGitHubCompatibleWebhook(
    webhookID: ActualSnowflake,
    webhookToken: string,
    query: RESTPostAPIWebhookWithTokenGitHubQuery,
  ) {
    return this.request<RESTPostAPIWebhookWithTokenGitHubResult>(
      `webhooks/${webhookID}/${webhookToken}/github`,
      {
        method: "POST",
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#get-webhook-message
   *
   * Returns a previously-sent webhook message from the same token. Returns a
   * [message](https://discord.dev/resources/channel#message-object) object on success.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  getWebhookMessage(
    webhookID: ActualSnowflake,
    webhookToken: string,
    messageID: ActualSnowflake,
    data: unknown,
  ) {
    return this.request(
      `webhooks/${webhookID}/${webhookToken}/messages/${messageID}`,
      {
        data,
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#edit-webhook-message
   *
   * Edits a previously-sent webhook message from the same token. Returns a
   * [message](https://discord.dev/resources/channel#message-object) object on success.
   *
   * When the `content` field is edited, the `mentions` array in the message object
   * will be reconstructed from scratch based on the new content. The
   * `allowed_mentions` field of the edit request controls how this happens. If there
   * is no explicit `allowed_mentions` in the edit request, the content will be
   * parsed with _default_ allowances, that is, without regard to whether or not an
   * `allowed_mentions` was present in the request that originally created the
   * message.
   *
   * > ℹ️ For a `file` attachment, the `Content-Disposition` subpart header MUST
   * > contain a `filename` parameter.
   *
   * > ⚠️ This endpoint supports both `application/json` and `multipart/form-data`
   * > bodies. When uploading files the `multipart/form-data` content type must be
   * > used. Note that in multipart form data, the `embed`, `allowed_mentions`, and
   * > `attachments` fields cannot be used. You can pass a stringified JSON body as a
   * > form value as `payload_json` instead. **If you supply a `payload_json` form
   * > value, all fields except for `file` fields will be ignored in the form data**.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  editWebhookMessage(
    webhookID: ActualSnowflake,
    webhookToken: string,
    messageID: ActualSnowflake,
    data: RESTPatchAPIWebhookWithTokenMessageJSONBody,
  ) {
    return this.request<RESTPatchAPIWebhookWithTokenMessageResult>(
      `webhooks/${webhookID}/${webhookToken}/messages/${messageID}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#delete-webhook-message
   *
   * Deletes a message that was created by the webhook. Returns a 204 NO CONTENT
   * response on success.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  deleteWebhookMessage(
    webhookID: ActualSnowflake,
    webhookToken: string,
    messageID: ActualSnowflake,
  ) {
    return this.request<RESTDeleteAPIWebhookWithTokenMessageResult>(
      `webhooks/${webhookID}/${webhookToken}/messages/${messageID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/topics/gateway#get-gateway
   *
   * > ℹ️ This endpoint does not require authentication.
   *
   * Returns an object with a single valid WSS URL, which the client can use for
   * [Connecting](https://discord.dev/topics/gateway#connecting). Clients **should** cache this
   * value and only call this endpoint to retrieve a new URL if they are unable to
   * properly establish a connection using the cached version of the URL.
   */
  getGateway() {
    return this.request<RESTGetAPIGatewayResult>("gateway");
  }

  /**
   * https://discord.dev/topics/gateway#get-gateway-bot
   *
   * > ⚠️ This endpoint requires authentication using a valid bot token.
   *
   * Returns an object based on the information in
   * [Get Gateway](https://discord.dev/topics/gateway#get-gateway), plus additional metadata that
   * can help during the operation of large or
   * [sharded](https://discord.dev/topics/gateway#sharding) bots. Unlike the
   * [Get Gateway](https://discord.dev/topics/gateway#get-gateway), this route should not be cached
   * for extended periods of time as the value is not guaranteed to be the same
   * per-call, and changes as the bot joins/leaves guilds.
   */
  getGatewayBot() {
    return this.request<RESTGetAPIGatewayBotResult>("gateway/bot");
  }

  /**
   * https://discord.dev/topics/oauth2#get-current-bot-application-information
   *
   * Returns the bot's OAuth2 [application](https://discord.dev/topics/oauth2#application) object
   * without `flags`.
   */
  getCurrentBotApplicationInformation() {
    return this.request<RESTGetAPIOauth2CurrentApplicationResult>(
      "oauth2/applications/@me",
    );
  }

  /**
   * https://discord.dev/topics/oauth2#get-current-authorization-information
   *
   * Returns info about the current authorization. Requires authentication with a
   * bearer token.
   */
  getCurrentAuthorizationInformation() {
    return this.request<RESTGetAPIOauth2CurrentAuthorizationResult>(
      "oauth2/@me",
    );
  }
}
