import {
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
  RESTPatchAPIGuildIntegrationJSONBody,
  RESTPatchAPIGuildIntegrationResult,
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
  RESTPostAPIGuildIntegrationJSONBody,
  RESTPostAPIGuildIntegrationResult,
  RESTPostAPIGuildIntegrationSyncResult,
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
  RESTPutAPIChannelMessageReactionResult,
  RESTPutAPIChannelPermissionJSONBody,
  RESTPutAPIChannelPermissionResult,
  RESTPutAPIChannelPinResult,
  RESTPutAPIChannelRecipientJSONBody,
  RESTPutAPIChannelRecipientResult,
  RESTPutAPIGuildBanJSONBody,
  RESTPutAPIGuildBanResult,
  RESTPutAPIGuildMemberJSONBody,
  RESTPutAPIGuildMemberResult,
  RESTPutAPIGuildMemberRoleResult,
  RESTPutAPIGuildTemplateSyncResult,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/rest/mod.ts";
import HTTPError from "./HTTPError.ts";
import { repository, version } from "../../meta.ts";

export interface HTTPClientOptions {
  delay?: number;
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
export const USER_AGENT = `DiscordBot (${repository}, ${version})`;
export const VERSION = 8;

export default class HTTPClient {
  constructor(public token: string, public options?: HTTPClientOptions) {
  }

  async request<T = any>(path: string, input?: RequestInput) {
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

    const version = this.options?.version ?? VERSION;
    let url = `https://discord.com/api/v${version}/${path}`;
    if (input?.query) {
      url += `?${new URLSearchParams(input.query as Record<string, string>)}`;
    }

    const controller = new AbortController();
    const delay = this.options?.delay ?? DELAY;
    const timeout = setTimeout(() => controller.abort(), delay);

    const response = await fetch(url, {
      body,
      headers,
      method: input?.method,
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const result = await response.json();
    if (response.ok) {
      return result as T;
    }
    throw new HTTPError(result, response);
  }

  /**
   * https://discord.dev/game-sdk/store#get-entitlements
   *
   * Gets entitlements for a given user. You can use this on your game backend to
   * check entitlements of an arbitrary user, or perhaps in an administrative panel
   * for your support team.
   *
   * > ❗ The previous behavior on this endpoint was that not specifying a
   * > user_id or limit would return an unlimited amount of entitlements. That
   * > behavior is now deprecated and will be removed on March 1, 2019.
   * @param applicationID https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   */
  getEntitlements(applicationID: string, data: unknown) {
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
  getEntitlement(applicationID: string, entitlementID: string, data: unknown) {
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
  getSKUs(applicationID: string) {
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
  consumeSKU(applicationID: string, entitlementID: string) {
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
  deleteTestEntitlement(applicationID: string, entitlementID: string) {
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
  createPurchaseDiscount(skuID: string, userID: string, data: unknown) {
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
  deletePurchaseDiscount(skuID: string, userID: string) {
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
  getGlobalApplicationCommands(applicationID: string) {
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
    applicationID: string,
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
  getGlobalApplicationCommand(applicationID: string, commandID: string) {
    return this.request<RESTGetAPIApplicationCommandResult>(
      `applications/${applicationID}/commands/${commandID}`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-global-application-command
   *
   * > ℹ️ All parameters for this endpoint are optional. `options` is nullable.
   *
   * Edit a global command. Updates will be available in all guilds after 1 hour.
   * Returns `200` and an
   * [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand)
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param commandID https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editGlobalApplicationCommand(
    applicationID: string,
    commandID: string,
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
  deleteGlobalApplicationCommand(applicationID: string, commandID: string) {
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
  getGuildApplicationCommands(applicationID: string, guildID: string) {
    return this.request<RESTGetAPIApplicationGuildCommandsResult>(
      `applications/${applicationID}/guilds/${guildID}/commands`,
    );
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
   * object.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildApplicationCommand(
    applicationID: string,
    guildID: string,
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
    applicationID: string,
    guildID: string,
    commandID: string,
  ) {
    return this.request<RESTGetAPIApplicationGuildCommandResult>(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-guild-application-command
   *
   * > ℹ️ All parameters for this endpoint are optional. `options` is nullable.
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
    applicationID: string,
    guildID: string,
    commandID: string,
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
    applicationID: string,
    guildID: string,
    commandID: string,
  ) {
    return this.request(
      `applications/${applicationID}/guilds/${guildID}/commands/${commandID}`,
      {
        method: "DELETE",
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
    interactionID: string,
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
   * https://discord.dev/interactions/slash-commands#edit-original-interaction-response
   *
   * Edits the initial Interaction response. Functions the same as
   * [Edit Webhook Message](https://discord.dev/resources/webhook#edit-webhook-message).
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  editOriginalInteractionResponse(
    applicationID: string,
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
    applicationID: string,
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
   * true.
   * @param applicationID https://discord.dev/topics/oauth2#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  createFollowupMessage(
    applicationID: string,
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
    applicationID: string,
    interactionToken: string,
    messageID: string,
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
    applicationID: string,
    interactionToken: string,
    messageID: string,
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
   * https://discord.dev/resources/audit-log#get-guild-audit-log
   *
   * Returns an [audit log](https://discord.dev/resources/audit/log#audit-log-object) object for
   * the guild. Requires the 'VIEW_AUDIT_LOG' permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildAuditLog(guildID: string, query: RESTGetAPIAuditLogQuery) {
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
   * object.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  getChannel(channelID: string) {
    return this.request<RESTGetAPIChannelResult>(`channels/${channelID}`);
  }

  /**
   * https://discord.dev/resources/channel#modify-channel
   *
   * Update a channel's settings. Requires the `MANAGE_CHANNELS` permission for the
   * guild. Returns a [channel](https://discord.dev/resources/channel#channel-object) on success,
   * and a 400 BAD REQUEST on invalid parameters. Fires a
   * [Channel Update](https://discord.dev/topics/gateway#channel-update) Gateway event. If
   * modifying a category, individual
   * [Channel Update](https://discord.dev/topics/gateway#channel-update) events will fire for each
   * child channel that also changes. If modifying permission overwrites, the
   * `MANAGE_ROLES` permission is required. Only permissions your bot has in the
   * guild or channel can be allowed/denied (unless your bot has a `MANAGE_ROLES`
   * overwrite in the channel). All JSON parameters are optional.
   * @param channelID https://discord.dev/resources/channel#channel-object
   */
  editChannel(
    channelID: string,
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
   * permission for the guild. Deleting a category does not delete its child
   * channels; they will have their `parent_id` removed and a
   * [Channel Update](https://discord.dev/topics/gateway#channel-update) Gateway event will fire
   * for each of them. Returns a [channel](https://discord.dev/resources/channel#channel-object)
   * object on success. Fires a [Channel Delete](https://discord.dev/topics/gateway#channel-delete)
   * Gateway event.
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
  deleteChannel(channelID: string, reason?: string) {
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
  getChannelMessages(channelID: string, query: RESTGetAPIChannelMessagesQuery) {
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
  getChannelMessage(channelID: string, messageID: string) {
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
    channelID: string,
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
   *
   * > ℹ️ For the following endpoints, `emoji` takes the form of `name:id` for
   * > custom guild emoji, or Unicode characters.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  crosspostMessage(channelID: string, messageID: string) {
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
   * will fail with `10014: Unknown Emoji`.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  createReaction(channelID: string, messageID: string, emoji: string) {
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
   * will fail with `10014: Unknown Emoji`.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteOwnReaction(channelID: string, messageID: string, emoji: string) {
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
   * will fail with `10014: Unknown Emoji`.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  deleteUserReaction(
    channelID: string,
    messageID: string,
    emoji: string,
    userID: string,
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
   * will fail with `10014: Unknown Emoji`.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  getReactions(
    channelID: string,
    messageID: string,
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
  deleteAllReactions(channelID: string, messageID: string) {
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
   * will fail with `10014: Unknown Emoji`.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteAllReactionsforEmoji(
    channelID: string,
    messageID: string,
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
   * Edit a previously sent message. The fields `content`, `embed`,
   * `allowed_mentions` and `flags` can be edited by the original message author.
   * Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES`
   * permission in the corresponding channel. When specifying flags, ensure to
   * include all previously set flags/bits in addition to ones that you are
   * modifying. Only `flags` documented in the table below may be modified by users
   * (unsupported flag changes are currently ignored without error).
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object. Fires a
   * [Message Update](https://discord.dev/topics/gateway#message-update) Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param channelID https://discord.dev/resources/channel#channel-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  editMessage(
    channelID: string,
    messageID: string,
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
  deleteMessage(channelID: string, messageID: string) {
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
    channelID: string,
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
    channelID: string,
    overwriteID: string,
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
  getChannelInvites(channelID: string) {
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
    channelID: string,
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
    channelID: string,
    overwriteID: string,
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
    channelID: string,
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
  triggerTypingIndicator(channelID: string) {
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
  getPinnedMessages(channelID: string) {
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
    channelID: string,
    messageID: string,
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
    channelID: string,
    messageID: string,
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
    channelID: string,
    userID: string,
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
  groupPrivateChannelRemoveRecipient(channelID: string, userID: string) {
    return this.request<RESTDeleteAPIChannelRecipientResult>(
      `channels/${channelID}/recipients/${userID}`,
      {
        method: "DELETE",
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
  getGuildEmojis(guildID: string) {
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
  getGuildEmoji(guildID: string, emojiID: string) {
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
    guildID: string,
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
    guildID: string,
    emojiID: string,
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
  deleteGuildEmoji(guildID: string, emojiID: string, reason?: string) {
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
  getGuild(guildID: string, query: RESTGetAPIGuildQuery) {
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
  getGuildPreview(guildID: string) {
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
  editGuild(guildID: string, data: RESTPatchAPIGuildJSONBody) {
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
  deleteGuild(guildID: string) {
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
  getGuildChannels(guildID: string) {
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
    guildID: string,
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
    guildID: string,
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
  getGuildMember(guildID: string, userID: string) {
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
   * > ⚠️ In the future, this endpoint will be restricted in line with our
   * > [Privileged Intents](https://discord.dev/topics/gateway#privileged-intents)
   *
   * > ℹ️ All parameters to this endpoint are optional
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  getGuildMembers(guildID: string, query: RESTGetAPIGuildMembersQuery) {
    return this.request<RESTGetAPIGuildMembersResult>(
      `guilds/${guildID}/members`,
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
   * > ℹ️ All parameters to this endpoint except for `access_token` are optional.
   *
   * > ℹ️ The Authorization header must be a Bot token (belonging to the same
   * > application used for authorization), and the bot must be a member of the guild
   * > with `CREATE_INSTANT_INVITE` permission.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  addGuildMember(
    guildID: string,
    userID: string,
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
    guildID: string,
    userID: string,
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
    guildID: string,
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
    guildID: string,
    userID: string,
    roleID: string,
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
  removeGuildMemberRole(guildID: string, userID: string, roleID: string) {
    return this.request<RESTDeleteAPIGuildMemberRoleResult>(
      `guilds/${guildID}/members/${userID}/roles/${roleID}`,
      {
        method: "DELETE",
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
  removeGuildMember(guildID: string, userID: string, reason?: string) {
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
  getGuildBans(guildID: string) {
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
  getGuildBan(guildID: string, userID: string) {
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
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param userID https://discord.dev/resources/user#user-object
   */
  createGuildBan(
    guildID: string,
    userID: string,
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
  removeGuildBan(guildID: string, userID: string, reason?: string) {
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
  getGuildRoles(guildID: string) {
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
    guildID: string,
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
    guildID: string,
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
    guildID: string,
    roleID: string,
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
  deleteGuildRole(guildID: string, roleID: string, reason?: string) {
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
  getGuildPruneCount(guildID: string, query: RESTGetAPIGuildPruneCountQuery) {
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
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  beginGuildPrune(
    guildID: string,
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
  getGuildVoiceRegions(guildID: string) {
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
  getGuildInvites(guildID: string) {
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
  getGuildIntegrations(guildID: string) {
    return this.request<RESTGetAPIGuildIntegrationsResult>(
      `guilds/${guildID}/integrations`,
    );
  }

  /**
   * https://discord.dev/resources/guild#create-guild-integration
   *
   * Attach an [integration](https://discord.dev/resources/guild#integration-object) object from
   * the current user to the guild. Requires the `MANAGE_GUILD` permission. Returns a
   * 204 empty response on success. Fires a
   * [Guild Integrations Update](https://discord.dev/topics/gateway#guild-integrations-update)
   * Gateway event.
   * @param guildID https://discord.dev/resources/guild#guild-object
   */
  createGuildIntegration(
    guildID: string,
    data: RESTPostAPIGuildIntegrationJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPostAPIGuildIntegrationResult>(
      `guilds/${guildID}/integrations`,
      {
        data,
        method: "POST",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-integration
   *
   * Modify the behavior and settings of an
   * [integration](https://discord.dev/resources/guild#integration-object) object for the guild.
   * Requires the `MANAGE_GUILD` permission. Returns a 204 empty response on success.
   * Fires a
   * [Guild Integrations Update](https://discord.dev/topics/gateway#guild-integrations-update)
   * Gateway event.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param integrationID https://discord.dev/resources/guild#integration-object
   */
  editGuildIntegration(
    guildID: string,
    integrationID: string,
    data: RESTPatchAPIGuildIntegrationJSONBody,
    reason?: string,
  ) {
    return this.request<RESTPatchAPIGuildIntegrationResult>(
      `guilds/${guildID}/integrations/${integrationID}`,
      {
        data,
        method: "PATCH",
        reason,
      },
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
    guildID: string,
    integrationID: string,
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
   * https://discord.dev/resources/guild#sync-guild-integration
   *
   * Sync an integration. Requires the `MANAGE_GUILD` permission. Returns a 204 empty
   * response on success.
   * @param guildID https://discord.dev/resources/guild#guild-object
   * @param integrationID https://discord.dev/resources/guild#integration-object
   */
  syncGuildIntegration(guildID: string, integrationID: string) {
    return this.request<RESTPostAPIGuildIntegrationSyncResult>(
      `guilds/${guildID}/integrations/${integrationID}/sync`,
      {
        method: "POST",
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
  getGuildWidgetSettings(guildID: string) {
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
    guildID: string,
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
  getGuildWidget(guildID: string) {
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
  getGuildVanityURL(guildID: string) {
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
  getGuildWidgetImage(guildID: string, query: RESTGetAPIGuildWidgetImageQuery) {
    return this.request<RESTGetAPIGuildWidgetImageResult>(
      `guilds/${guildID}/widget.png`,
      {
        query,
      },
    );
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
  getGuildTemplates(guildID: string) {
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
    guildID: string,
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
  syncGuildTemplate(guildID: string, templateCode: string) {
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
    guildID: string,
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
  deleteGuildTemplate(guildID: string, templateCode: string) {
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
  getUser(userID: string) {
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
  leaveGuild(guildID: string) {
    return this.request<RESTDeleteAPICurrentUserGuildResult>(
      `users/@me/guilds/${guildID}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/user#get-user-dms
   *
   * Returns a list of [DM channel](https://discord.dev/resources/channel#channel-object) objects.
   * For bots, this is no longer a supported method of getting recent DMs, and will
   * return an empty array.
   */
  getUserPrivateChannels() {
    return this.request("users/@me/channels");
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
  createWebhook(channelID: string, data: RESTPostAPIChannelWebhookJSONBody) {
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
  getChannelWebhooks(channelID: string) {
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
  getGuildWebhooks(guildID: string) {
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
  getWebhook(webhookID: string) {
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
  getWebhookwithToken(webhookID: string, webhookToken: string) {
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
    webhookID: string,
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
    webhookID: string,
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
  deleteWebhook(webhookID: string, reason?: string) {
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
    webhookID: string,
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
   * > ⚠️ This endpoint supports both JSON and form data bodies. It does require
   * > multipart/form-data requests instead of the normal JSON request type when
   * > uploading files. Make sure you set your `Content-Type` to
   * > `multipart/form-data` if you're doing that. Note that in that case, the
   * > `embeds` field cannot be used, but you can pass an url-encoded JSON body as a
   * > form value for `payload_json`.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeWebhook(
    webhookID: string,
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
   *
   *
   * Refer to [Slack's documentation](https://api.slack.com/incoming-webhooks) for
   * more information. We do not support Slack's `channel`, `icon_emoji`, `mrkdwn`,
   * or `mrkdwn_in` properties.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeSlackCompatibleWebhook(
    webhookID: string,
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
   *
   *
   * Add a new webhook to your GitHub repo (in the repo's settings), and use this
   * endpoint as the "Payload URL." You can choose what events your Discord channel
   * receives by choosing the "Let me select individual events" option and selecting
   * individual events for the new webhook you're configuring.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeGitHubCompatibleWebhook(
    webhookID: string,
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
   * https://discord.dev/resources/webhook#edit-webhook-message
   *
   * Edits a previously-sent webhook message from the same token. Returns a
   * [message](https://discord.dev/resources/channel#message-object) object on success.
   *
   * > ℹ️ All parameters to this endpoint are optional and nullable.
   * @param webhookID https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageID https://discord.dev/resources/channel#message-object
   */
  editWebhookMessage(
    webhookID: string,
    webhookToken: string,
    messageID: string,
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
    webhookID: string,
    webhookToken: string,
    messageID: string,
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
   * https://discord.dev/topics/oauth2#get-current-application-information
   *
   * Returns the bot's OAuth2
   * [application object](https://discord.dev/topics/oauth2#application-object) without `flags`.
   */
  getCurrentApplicationInformation() {
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
