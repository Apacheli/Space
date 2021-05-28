import { Status } from "./deps.ts"; // Double import because it's easier to read
import { HTTPError } from "./http_error.ts";
import { logger, RateLimitBucket, sleep } from "../../util/mod.ts";
import { repo, version } from "../../../meta.ts";
import type {
  AddGuildMemberBody,
  AddGuildMemberJSON,
  AddGuildMemberRoleBody,
  AddThreadMemberBody,
  BatchEditApplicationCommandPermissionsBody,
  BatchEditApplicationCommandPermissionsJSON,
  BeginGuildPruneBody,
  BeginGuildPruneJSON,
  BulkDeleteMessagesBody,
  BulkDeleteMessagesJSON,
  BulkOverwriteGlobalApplicationCommandsBody,
  BulkOverwriteGlobalApplicationCommandsJSON,
  BulkOverwriteGuildApplicationCommandsBody,
  BulkOverwriteGuildApplicationCommandsJSON,
  ConsumeSKUBody,
  CreateChannelInviteBody,
  CreateChannelInviteJSON,
  CreateDMBody,
  CreateDMJSON,
  CreateFollowupMessageBody,
  CreateFollowupMessageJSON,
  CreateGlobalApplicationCommandBody,
  CreateGlobalApplicationCommandJSON,
  CreateGroupDMBody,
  CreateGroupDMJSON,
  CreateGuildApplicationCommandBody,
  CreateGuildApplicationCommandJSON,
  CreateGuildBanBody,
  CreateGuildBanJSON,
  CreateGuildBody,
  CreateGuildChannelBody,
  CreateGuildChannelJSON,
  CreateGuildEmojiBody,
  CreateGuildEmojiJSON,
  CreateGuildFromGuildTemplateBody,
  CreateGuildFromGuildTemplateJSON,
  CreateGuildJSON,
  CreateGuildRoleBody,
  CreateGuildRoleJSON,
  CreateGuildTemplateBody,
  CreateGuildTemplateJSON,
  CreateInteractionResponseBody,
  CreateInteractionResponseJSON,
  CreateMessageBody,
  CreateMessageJSON,
  CreatePurchaseDiscountBody,
  CreatePurchaseDiscountJSON,
  CreateReactionBody,
  CreateStageInstanceBody,
  CreateStageInstanceJSON,
  CreateWebhookBody,
  CreateWebhookJSON,
  CrosspostMessageBody,
  DeleteAllReactionsBody,
  DeleteAllReactionsForEmojiBody,
  DeleteChannelBody,
  DeleteChannelPermissionBody,
  DeleteFollowupMessageBody,
  DeleteGlobalApplicationCommandBody,
  DeleteGuildApplicationCommandBody,
  DeleteGuildBody,
  DeleteGuildEmojiBody,
  DeleteGuildIntegrationBody,
  DeleteGuildRoleBody,
  DeleteGuildTemplateBody,
  DeleteInviteBody,
  DeleteMessageBody,
  DeleteOriginalInteractionResponseBody,
  DeleteOwnReactionBody,
  DeletePurchaseDiscountBody,
  DeleteStageInstanceBody,
  DeleteTestEntitlementBody,
  DeleteUserReactionBody,
  DeleteWebhookBody,
  DeleteWebhookMessageBody,
  DeleteWebhookWithTokenBody,
  EditApplicationCommandPermissionsBody,
  EditApplicationCommandPermissionsJSON,
  EditChannelPermissionsBody,
  EditChannelPermissionsJSON,
  EditFollowupMessageBody,
  EditFollowupMessageJSON,
  EditGlobalApplicationCommandBody,
  EditGlobalApplicationCommandJSON,
  EditGuildApplicationCommandBody,
  EditGuildApplicationCommandJSON,
  EditMessageBody,
  EditMessageJSON,
  EditOriginalInteractionResponseBody,
  EditOriginalInteractionResponseJSON,
  EditWebhookMessageBody,
  EditWebhookMessageJSON,
  ExecuteGitHubCompatibleWebhookBody,
  ExecuteGitHubCompatibleWebhookQuery,
  ExecuteSlackCompatibleWebhookBody,
  ExecuteSlackCompatibleWebhookQuery,
  ExecuteWebhookBody,
  ExecuteWebhookJSON,
  ExecuteWebhookQuery,
  FollowNewsChannelBody,
  FollowNewsChannelJSON,
  GetApplicationCommandPermissionsBody,
  GetChannelBody,
  GetChannelInvitesBody,
  GetChannelMessageBody,
  GetChannelMessagesBody,
  GetChannelMessagesQuery,
  GetChannelWebhooksBody,
  GetCurrentAuthorizationInformationBody,
  GetCurrentBotApplicationInformationBody,
  GetCurrentUserBody,
  GetCurrentUserGuildsBody,
  GetCurrentUserGuildsQuery,
  GetEntitlementBody,
  GetEntitlementQuery,
  GetEntitlementsBody,
  GetEntitlementsQuery,
  GetGatewayBody,
  GetGatewayBotBody,
  GetGlobalApplicationCommandBody,
  GetGlobalApplicationCommandsBody,
  GetGuildApplicationCommandBody,
  GetGuildApplicationCommandPermissionsBody,
  GetGuildApplicationCommandsBody,
  GetGuildAuditLogBody,
  GetGuildAuditLogQuery,
  GetGuildBanBody,
  GetGuildBansBody,
  GetGuildBody,
  GetGuildChannelsBody,
  GetGuildEmojiBody,
  GetGuildIntegrationsBody,
  GetGuildInvitesBody,
  GetGuildMemberBody,
  GetGuildPreviewBody,
  GetGuildPruneCountBody,
  GetGuildPruneCountQuery,
  GetGuildQuery,
  GetGuildRolesBody,
  GetGuildTemplateBody,
  GetGuildTemplatesBody,
  GetGuildVanityURLBody,
  GetGuildVoiceRegionsBody,
  GetGuildWebhooksBody,
  GetGuildWelcomeScreenBody,
  GetGuildWidgetBody,
  GetGuildWidgetImageBody,
  GetGuildWidgetImageQuery,
  GetGuildWidgetSettingsBody,
  GetInviteBody,
  GetInviteQuery,
  GetOriginalInteractionResponseBody,
  GetPinnedMessagesBody,
  GetReactionsBody,
  GetReactionsQuery,
  GetSKUsBody,
  GetStageInstanceBody,
  GetUserBody,
  GetUserConnectionsBody,
  GetWebhookBody,
  GetWebhookMessageBody,
  GetWebhookWithTokenBody,
  GroupDMAddRecipientBody,
  GroupDMAddRecipientJSON,
  GroupDMRemoveRecipientBody,
  JoinThreadBody,
  LeaveGuildBody,
  LeaveThreadBody,
  ListActiveThreadsBody,
  ListGuildEmojisBody,
  ListGuildMembersBody,
  ListGuildMembersQuery,
  ListJoinedPrivateArchivedThreadsBody,
  ListJoinedPrivateArchivedThreadsQuery,
  ListPrivateArchivedThreadsBody,
  ListPrivateArchivedThreadsQuery,
  ListPublicArchivedThreadsBody,
  ListPublicArchivedThreadsQuery,
  ListThreadMembersBody,
  ListVoiceRegionsBody,
  ModifyChannelBody,
  ModifyChannelJSON,
  ModifyCurrentUserBody,
  ModifyCurrentUserJSON,
  ModifyCurrentUserNickBody,
  ModifyCurrentUserNickJSON,
  ModifyGuildBody,
  ModifyGuildChannelPositionsBody,
  ModifyGuildChannelPositionsJSON,
  ModifyGuildEmojiBody,
  ModifyGuildEmojiJSON,
  ModifyGuildJSON,
  ModifyGuildMemberBody,
  ModifyGuildMemberJSON,
  ModifyGuildRoleBody,
  ModifyGuildRoleJSON,
  ModifyGuildRolePositionsBody,
  ModifyGuildRolePositionsJSON,
  ModifyGuildTemplateBody,
  ModifyGuildTemplateJSON,
  ModifyGuildWelcomeScreenBody,
  ModifyGuildWelcomeScreenJSON,
  ModifyGuildWidgetBody,
  ModifyGuildWidgetJSON,
  ModifyWebhookBody,
  ModifyWebhookJSON,
  ModifyWebhookWithTokenBody,
  ModifyWebhookWithTokenJSON,
  PinMessageBody,
  RemoveGuildBanBody,
  RemoveGuildMemberBody,
  RemoveGuildMemberRoleBody,
  RemoveThreadMemberBody,
  SearchGuildMembersBody,
  SearchGuildMembersQuery,
  Snowflake,
  StartThreadWithMessageBody,
  StartThreadWithMessageJSON,
  StartThreadWithoutMessageBody,
  StartThreadWithoutMessageJSON,
  SyncGuildTemplateBody,
  TriggerTypingIndicatorBody,
  UnpinMessageBody,
  UpdateCurrentUserVoiceStateBody,
  UpdateCurrentUserVoiceStateJSON,
  UpdateStageInstanceBody,
  UpdateStageInstanceJSON,
  UpdateUserVoiceStateBody,
  UpdateUserVoiceStateJSON,
} from "../types/mod.ts";

export interface HTTPClientOptions {
  delay?: number;
  retryLimit?: number;
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

// deno-fmt-ignore-next-line
export const
  CANARY = Deno.args.includes("--canary"),
  DELAY = 60000,
  HTTP_URL = `https://${CANARY ? "canary." : ""}discord.com/api`,
  HTTP_VERSION = 8,
  RETRY_LIMIT = 5,
  USER_AGENT = `DiscordBot (${repo}, ${version})`;

export const parseRateLimitRoute = (route: string, method?: string) => {
  route = route.replace(/\/(\w+)\/\d+/g, "/$1/:id");
  if (route.includes("/reactions/")) {
    return route.replace(/\/reactions\/[^/]+/g, "/reactions/:emoji");
  }
  if (method === "DELETE" && route.endsWith("messages/:id")) {
    return `DELETE-${route}`;
  }
  return route;
};

export class HTTPClient extends Map<string, RateLimitBucket> {
  constructor(public token: string, public options?: HTTPClientOptions) {
    super();
  }

  request<T = unknown>(path: string, input?: RequestInput): Promise<T> {
    const request = this.createRequest(path, input);
    const bucket = this.getRateLimitBucket(path, input?.method);

    const fn = () => this.doRequest(request, bucket);

    return bucket.locked || bucket.rateLimited
      ? new Promise((res, rej) => bucket.add(() => fn().then(res, rej)))
      : fn();
  }

  private createRequest(path: string, input?: RequestInput) {
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

    return new Request(url, {
      body,
      headers,
      method: input?.method,
    });
  }

  private async doRequest(request: Request, bucket: RateLimitBucket) {
    const fn = async (l = RETRY_LIMIT, r = 0): Promise<[Response, number]> => {
      if (bucket.rateLimited) {
        return new Promise((res, rej) => bucket.add(() => fn().then(res, rej)));
      }
      const response = await this.fetch(request);

      const resetAfterHeader = response.headers.get("x-ratelimit-reset-after");
      const reset = resetAfterHeader ? parseFloat(resetAfterHeader) * 1000 : 0;

      if (response.status === Status.TooManyRequests && r < l) {
        logger.warn?.(`Rate limited. Retrying in ${resetAfterHeader} seconds`);
        await sleep(reset);
        return fn(l, r + 1);
      }

      return [response, reset];
    };

    bucket.lock();
    const [response, reset] = await fn(this.options?.retryLimit);
    bucket.unlock(
      parseInt(response.headers.get("x-ratelimit-limit") ?? "0"),
      reset,
      parseInt(response.headers.get("x-ratelimit-remaining") ?? "0"),
    );
    bucket.next();

    const result = response.headers.get("content-type") === "application/json"
      ? await response.json()
      : await response.text();
    if (response.ok) {
      return result;
    }
    throw new HTTPError(result, response);
  }

  private async fetch(request: Request) {
    const controller = new AbortController();
    const delay = this.options?.delay ?? DELAY;

    const timeout = setTimeout(() => controller.abort(), delay);
    const response = await fetch(request, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    return response;
  }

  private getRateLimitBucket(path: string, method?: string) {
    const route = parseRateLimitRoute(path, method);
    let bucket = this.get(route);
    if (!bucket) {
      this.set(route, bucket = new RateLimitBucket());
    }
    return bucket;
  }

  /**
   * https://discord.dev/game-sdk/store#get-entitlements
   *
   * Gets entitlements for a given user. You can use this on your game backend to check entitlements of an arbitrary user, or perhaps in an administrative panel for your support team.
   *
   *     const entitlements = await HTTPClient.getEntitlements("763532566111191040", { ... });
   *
   * @param applicationId https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   */
  getEntitlements(
    applicationId: Snowflake,
    query: GetEntitlementsQuery,
  ): Promise<GetEntitlementsBody> {
    return this.request(`/applications/${applicationId}/entitlements`, {
      query,
    });
  }

  /**
   * https://discord.dev/game-sdk/store#get-entitlement
   *
   * Fetch an entitlement by its ID. This may be useful in confirming that a user has a given entitlement that another call or the SDK says they do.
   *
   *     const entitlement = await HTTPClient.getEntitlement("479186439762870272", "406393106452185088", { ... });
   *
   * @param applicationId https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   * @param entitlementId https://discord.dev/game-sdk/store#data-models-entitlement-struct
   */
  getEntitlement(
    applicationId: Snowflake,
    entitlementId: Snowflake,
    query: GetEntitlementQuery,
  ): Promise<GetEntitlementBody> {
    return this.request(
      `/applications/${applicationId}/entitlements/${entitlementId}`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/game-sdk/store#get-skus
   *
   * Get all SKUs for an application.
   *
   *     const skus = await HTTPClient.getSKUs("45406975940362240");
   *
   * @param applicationId https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   */
  getSKUs(applicationId: Snowflake): Promise<GetSKUsBody> {
    return this.request(`/applications/${applicationId}/skus`);
  }

  /**
   * https://discord.dev/game-sdk/store#consume-sku
   *
   * Marks a given entitlement for the user as consumed, meaning it will no longer be returned in an entitlements check. **Ensure the user was granted whatever items the entitlement was for before consuming it!**
   *
   *     await HTTPClient.consumeSKU("343333728107364352", "764037877439922176");
   *
   * @param applicationId https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   * @param entitlementId https://discord.dev/game-sdk/store#data-models-entitlement-struct
   */
  consumeSKU(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<ConsumeSKUBody> {
    return this.request(
      `/applications/${applicationId}/entitlements/${entitlementId}/consume`,
      {
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/game-sdk/store#delete-test-entitlement
   *
   * Deletes a test entitlement for an application. You can only delete entitlements that were "purchased" in developer test mode; these are entitlements of `type == TestModePurchase`. You cannot use this route to delete arbitrary entitlements that users actually purchased.
   *
   *     await HTTPClient.deleteTestEntitlement("638092791552933888", "75922463493455872");
   *
   * @param applicationId https://discord.dev/game-sdk/sdk-starter-guide#get-set-up
   * @param entitlementId https://discord.dev/game-sdk/store#data-models-entitlement-struct
   */
  deleteTestEntitlement(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<DeleteTestEntitlementBody> {
    return this.request(
      `/applications/${applicationId}/entitlements/${entitlementId}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/game-sdk/store#create-purchase-discount
   *
   * Creates a discount for the given user on their next purchase of the given SKU. You should call this endpoint from your backend server just before calling [StartPurchase](https://discord.dev/game-sdk/store#start-purchase) for the SKU you wish to discount. The user will then see a discounted price for that SKU at time of payment. The discount is automatically consumed after successful purchase or if the TTL expires.
   *
   *     await HTTPClient.createPurchaseDiscount("102109941619228672", "818465271466426368", { ... });
   *
   * @param skuId https://discord.dev/game-sdk/store#data-models-sku-struct
   * @param userId https://discord.dev/resources/user#user-object
   */
  createPurchaseDiscount(
    skuId: Snowflake,
    userId: Snowflake,
    data: CreatePurchaseDiscountJSON,
  ): Promise<CreatePurchaseDiscountBody> {
    return this.request(`/store/skus/${skuId}/discounts/${userId}`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/game-sdk/store#delete-purchase-discount
   *
   * Deletes the currently active discount on the given SKU for the given user. You **do not need** to call this after a user has made a discounted purchase; successful discounted purchases will automatically remove the discount for that user for subsequent purchases.
   *
   *     await HTTPClient.deletePurchaseDiscount("94979621103075328", "422740402307596288");
   *
   * @param skuId https://discord.dev/game-sdk/store#data-models-sku-struct
   * @param userId https://discord.dev/resources/user#user-object
   */
  deletePurchaseDiscount(
    skuId: Snowflake,
    userId: Snowflake,
  ): Promise<DeletePurchaseDiscountBody> {
    return this.request(`/store/skus/${skuId}/discounts/${userId}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-global-application-commands
   *
   * Fetch all of the global commands for your application. Returns an array of [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) objects.
   *
   *     const applicationCommands = await HTTPClient.getGlobalApplicationCommands("350072194946039808");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   */
  getGlobalApplicationCommands(
    applicationId: Snowflake,
  ): Promise<GetGlobalApplicationCommandsBody> {
    return this.request(`/applications/${applicationId}/commands`);
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-global-application-command
   *
   * > ❗
   * > Creating a command with the same name as an existing command for your application will overwrite the old command.
   *
   * Create a new global command. New global commands will be available in all guilds after 1 hour. Returns `201` and an [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) object.
   *
   *     const applicationCommand = await HTTPClient.createGlobalApplicationCommand("517451636931559424", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   */
  createGlobalApplicationCommand(
    applicationId: Snowflake,
    data: CreateGlobalApplicationCommandJSON,
  ): Promise<CreateGlobalApplicationCommandBody> {
    return this.request(`/applications/${applicationId}/commands`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-global-application-command
   *
   * Fetch a global command for your application. Returns an [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) object.
   *
   *     const applicationCommand = await HTTPClient.getGlobalApplicationCommand("302244033080590336", "96533444682579968");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  getGlobalApplicationCommand(
    applicationId: Snowflake,
    commandId: Snowflake,
  ): Promise<GetGlobalApplicationCommandBody> {
    return this.request(`/applications/${applicationId}/commands/${commandId}`);
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-global-application-command
   *
   * > ℹ
   * > All parameters for this endpoint are optional.
   *
   * Edit a global command. Updates will be available in all guilds after 1 hour. Returns `200` and an [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) object.
   *
   *     const applicationCommand = await HTTPClient.editGlobalApplicationCommand("657818438349094912", "461121305874268160", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editGlobalApplicationCommand(
    applicationId: Snowflake,
    commandId: Snowflake,
    data: EditGlobalApplicationCommandJSON,
  ): Promise<EditGlobalApplicationCommandBody> {
    return this.request(
      `/applications/${applicationId}/commands/${commandId}`,
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
   *
   *     await HTTPClient.deleteGlobalApplicationCommand("151044919551590400", "29337798351781888");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  deleteGlobalApplicationCommand(
    applicationId: Snowflake,
    commandId: Snowflake,
  ): Promise<DeleteGlobalApplicationCommandBody> {
    return this.request(
      `/applications/${applicationId}/commands/${commandId}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-guild-application-commands
   *
   * Fetch all of the guild commands for your application for a specific guild. Returns an array of [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) objects.
   *
   *     const applicationCommands = await HTTPClient.getGuildApplicationCommands("837432908179308544", "81994890279387136");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildApplicationCommands(
    applicationId: Snowflake,
    guildId: Snowflake,
  ): Promise<GetGuildApplicationCommandsBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#bulk-overwrite-global-application-commands
   *
   * Takes a list of application commands, overwriting existing commands that are registered globally for this application. Updates will be available in all guilds after 1 hour. Returns `200` and a list of [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) objects. Commands that do not already exist will count toward daily application command create limits.
   *
   *     const applicationCommands = await HTTPClient.bulkOverwriteGlobalApplicationCommands("398065290249764864", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   */
  bulkOverwriteGlobalApplicationCommands(
    applicationId: Snowflake,
    data: BulkOverwriteGlobalApplicationCommandsJSON,
  ): Promise<BulkOverwriteGlobalApplicationCommandsBody> {
    return this.request(`/applications/${applicationId}/commands`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-guild-application-command
   *
   * > ❗
   * > Creating a command with the same name as an existing command for your application will overwrite the old command.
   *
   * Create a new guild command. New guild commands will be available in the guild immediately. Returns `201` and an [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) object.  If the command did not already exist, it will count toward daily application command create limits.
   *
   *     const applicationCommand = await HTTPClient.createGuildApplicationCommand("248688182353199104", "428089355215568896", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  createGuildApplicationCommand(
    applicationId: Snowflake,
    guildId: Snowflake,
    data: CreateGuildApplicationCommandJSON,
  ): Promise<CreateGuildApplicationCommandBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-guild-application-command
   *
   * Fetch a guild command for your application. Returns an [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) object.
   *
   *     const applicationCommand = await HTTPClient.getGuildApplicationCommand("326057195592482816", "535317520136011776", "605799795835011072");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  getGuildApplicationCommand(
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
  ): Promise<GetGuildApplicationCommandBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-guild-application-command
   *
   * > ℹ
   * > All parameters for this endpoint are optional.
   *
   * Edit a guild command. Updates for guild commands will be available immediately. Returns `200` and an [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) object.
   *
   *     const applicationCommand = await HTTPClient.editGuildApplicationCommand("360012454291308544", "371769552691789824", "712049882407370752", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editGuildApplicationCommand(
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
    data: EditGuildApplicationCommandJSON,
  ): Promise<EditGuildApplicationCommandBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
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
   *
   *     await HTTPClient.deleteGuildApplicationCommand("317392153141575680", "299732265942908928", "508762924571951104");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  deleteGuildApplicationCommand(
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
  ): Promise<DeleteGuildApplicationCommandBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#bulk-overwrite-guild-application-commands
   *
   * Takes a list of application commands, overwriting existing commands for the guild. Returns `200` and a list of [ApplicationCommand](https://discord.dev/interactions/slash-commands#applicationcommand) objects.
   *
   *     const applicationCommands = await HTTPClient.bulkOverwriteGuildApplicationCommands("4892982423584768", "480935823122890752", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  bulkOverwriteGuildApplicationCommands(
    applicationId: Snowflake,
    guildId: Snowflake,
    data: BulkOverwriteGuildApplicationCommandsJSON,
  ): Promise<BulkOverwriteGuildApplicationCommandsBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-interaction-response
   *
   * Create a response to an Interaction from the gateway. Takes an [Interaction response](https://discord.dev/interactions/slash-commands#interaction-response).
   *
   *     await HTTPClient.createInteractionResponse("655895050168827904", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... });
   *
   * @param interactionId https://discord.dev/interactions/slash-commands#interaction
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  createInteractionResponse(
    interactionId: Snowflake,
    interactionToken: string,
    data: CreateInteractionResponseJSON,
  ): Promise<CreateInteractionResponseBody> {
    return this.request(
      `/interactions/${interactionId}/${interactionToken}/callback`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-original-interaction-response
   *
   * Returns the initial Interaction response. Functions the same as [Get Webhook Message](https://discord.dev/resources/webhook#get-webhook-message).
   *
   *     const message = await HTTPClient.getOriginalInteractionResponse("755033798202097664", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  getOriginalInteractionResponse(
    applicationId: Snowflake,
    interactionToken: string,
  ): Promise<GetOriginalInteractionResponseBody> {
    return this.request(
      `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-original-interaction-response
   *
   * Edits the initial Interaction response. Functions the same as [Edit Webhook Message](https://discord.dev/resources/webhook#edit-webhook-message).
   *
   *     const message = await HTTPClient.editOriginalInteractionResponse("757493344698892288", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  editOriginalInteractionResponse(
    applicationId: Snowflake,
    interactionToken: string,
    data: EditOriginalInteractionResponseJSON,
  ): Promise<EditOriginalInteractionResponseBody> {
    return this.request(
      `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
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
   *
   *     await HTTPClient.deleteOriginalInteractionResponse("419320381858381824", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  deleteOriginalInteractionResponse(
    applicationId: Snowflake,
    interactionToken: string,
  ): Promise<DeleteOriginalInteractionResponseBody> {
    return this.request(
      `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#create-followup-message
   *
   * Create a followup message for an Interaction. Functions the same as [Execute Webhook](https://discord.dev/resources/webhook#execute-webhook), but `wait` is always true, and `flags` can be set to `64` in the body to send an ephemeral message. the `thread/id` query parameter is not required (and is furthermore ignored) when using this endpoint for interaction followups.
   *
   *     const message = await HTTPClient.createFollowupMessage("324683159574675456", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   */
  createFollowupMessage(
    applicationId: Snowflake,
    interactionToken: string,
    data: CreateFollowupMessageJSON,
  ): Promise<CreateFollowupMessageBody> {
    return this.request(`/webhooks/${applicationId}/${interactionToken}`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-followup-message
   *
   * Edits a followup message for an Interaction. Functions the same as [Edit Webhook Message](https://discord.dev/resources/webhook#edit-webhook-message).
   *
   *     const message = await HTTPClient.editFollowupMessage("599814164218642432", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", "529187875175006208", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  editFollowupMessage(
    applicationId: Snowflake,
    interactionToken: string,
    messageId: Snowflake,
    data: EditFollowupMessageJSON,
  ): Promise<EditFollowupMessageBody> {
    return this.request(
      `/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`,
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
   *
   *     await HTTPClient.deleteFollowupMessage("16523490404335616", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", "129788740850679808");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param interactionToken https://discord.dev/interactions/slash-commands#interaction
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  deleteFollowupMessage(
    applicationId: Snowflake,
    interactionToken: string,
    messageId: Snowflake,
  ): Promise<DeleteFollowupMessageBody> {
    return this.request(
      `/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-guild-application-command-permissions
   *
   * Fetches command permissions for all commands for your application in a guild. Returns an array of [GuildApplicationCommandPermissions](https://discord.dev/interactions/slash-commands#guildapplicationcommandpermissions) objects.
   *
   *     const guildApplicationCommandPermissions = await HTTPClient.getGuildApplicationCommandPermissions("147217243166474240", "125021686612361216");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildApplicationCommandPermissions(
    applicationId: Snowflake,
    guildId: Snowflake,
  ): Promise<GetGuildApplicationCommandPermissionsBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/permissions`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#get-application-command-permissions
   *
   * Fetches command permissions for a specific command for your application in a guild. Returns a [GuildApplicationCommandPermissions](https://discord.dev/interactions/slash-commands#guildapplicationcommandpermissions) object.
   *
   *     const guildApplicationCommandPermissions = await HTTPClient.getApplicationCommandPermissions("128733225865445376", "70862917062361088", "206949777634492416");
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  getApplicationCommandPermissions(
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
  ): Promise<GetApplicationCommandPermissionsBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`,
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#edit-application-command-permissions
   *
   * > ⚠
   * > This endpoint will overwrite existing permissions for the command in that guild
   *
   * Edits command permissions for a specific command for your application in a guild.
   *
   * > ⚠
   * > Deleting or renaming a command will permanently delete all permissions for that command
   *
   *     const guildApplicationCommandPermissions = await HTTPClient.editApplicationCommandPermissions("575294650982596608", "405272355317743616", "10415533367230464", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param commandId https://discord.dev/interactions/slash-commands#applicationcommand
   */
  editApplicationCommandPermissions(
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
    data: EditApplicationCommandPermissionsJSON,
  ): Promise<EditApplicationCommandPermissionsBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/interactions/slash-commands#batch-edit-application-command-permissions
   *
   * > ⚠
   * > This endpoint will overwrite all existing permissions for all commands in a guild
   *
   * Batch edits permissions for all commands in a guild. Takes an array of partial [GuildApplicationCommandPermissions](https://discord.dev/interactions/slash-commands#guildapplicationcommandpermissions) objects including `id` and `permissions`.
   *
   *     const guildApplicationCommandPermissions = await HTTPClient.batchEditApplicationCommandPermissions("536281387133566976", "801203768715640832", { ... });
   *
   * @param applicationId https://discord.dev/resources/application#application-object
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  batchEditApplicationCommandPermissions(
    applicationId: Snowflake,
    guildId: Snowflake,
    data: BatchEditApplicationCommandPermissionsJSON,
  ): Promise<BatchEditApplicationCommandPermissionsBody> {
    return this.request(
      `/applications/${applicationId}/guilds/${guildId}/commands/permissions`,
      {
        data,
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/audit-log#get-guild-audit-log
   *
   * Returns an [audit log](https://discord.dev/resources/audit/log#audit-log-object) object for the guild. Requires the 'VIEW_AUDIT_LOG' permission.
   *
   *     const auditLog = await HTTPClient.getGuildAuditLog("590155090929647616", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildAuditLog(
    guildId: Snowflake,
    query: GetGuildAuditLogQuery,
  ): Promise<GetGuildAuditLogBody> {
    return this.request(`/guilds/${guildId}/audit-logs`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/channel#get-channel
   *
   * Get a channel by ID. Returns a [channel](https://discord.dev/resources/channel#channel-object) object.  if the channel is a thread, a [thread member](#docs/resources/channel#thread-member-object) object is included in the returned result.
   *
   *     const channel = await HTTPClient.getChannel("449280097308901376");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  getChannel(channelId: Snowflake): Promise<GetChannelBody> {
    return this.request(`/channels/${channelId}`);
  }

  /**
   * https://discord.dev/resources/channel#modify-channel
   *
   * Update a channel's settings. Returns a [channel](https://discord.dev/resources/channel#channel-object) on success, and a 400 BAD REQUEST on invalid parameters. All JSON parameters are optional.
   *
   *     const channel = await HTTPClient.modifyChannel("723588912185868288", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  modifyChannel(
    channelId: Snowflake,
    data: ModifyChannelJSON,
    reason?: string,
  ): Promise<ModifyChannelBody> {
    return this.request(`/channels/${channelId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#delete/close-channel
   *
   * Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS` permission for the guild, or `MANAGE_THREADS` if the channel is a thread. Deleting a category does not delete its child channels; they will have their `parent_id` removed and a [Channel Update](https://discord.dev/topics/gateway#channel-update) gateway event will fire for each of them. returns a [channel](#docs/resources/channel#channel-object) object on success. fires a [channel delete](#docs/topics/gateway#channel-delete) gateway event (or [thread delete](#docs/topics/gateway#thread-delete) if the channel was a thread).
   *
   * > ⚠
   * > Deleting a guild channel cannot be undone. Use this with caution, as it is impossible to undo this action when performed on a guild channel. In contrast, when used with a private message, it is possible to undo the action by opening a private message with the recipient again.
   *
   * > ℹ
   * > For Community guilds, the Rules or Guidelines channel and the Community Updates channel cannot be deleted.
   *
   *     await HTTPClient.deleteChannel("696426128834822144");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  deleteChannel(
    channelId: Snowflake,
    reason?: string,
  ): Promise<DeleteChannelBody> {
    return this.request(`/channels/${channelId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#get-channel-messages
   *
   * Returns the messages for a channel. If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in the channel then this will return no messages (since they cannot read the message history). Returns an array of [message](https://discord.dev/resources/channel#message-object) objects on success.
   *
   * > ℹ
   * > The before, after, and around keys are mutually exclusive, only one may be passed at a time.
   *
   *     const messages = await HTTPClient.getChannelMessages("596055139760996352", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  getChannelMessages(
    channelId: Snowflake,
    query: GetChannelMessagesQuery,
  ): Promise<GetChannelMessagesBody> {
    return this.request(`/channels/${channelId}/messages`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/channel#get-channel-message
   *
   * Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Returns a [message](https://discord.dev/resources/channel#message-object) object on success.
   *
   *     const message = await HTTPClient.getChannelMessage("792717067785601024", "405348063197003776");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  getChannelMessage(
    channelId: Snowflake,
    messageId: Snowflake,
  ): Promise<GetChannelMessageBody> {
    return this.request(`/channels/${channelId}/messages/${messageId}`);
  }

  /**
   * https://discord.dev/resources/channel#create-message
   *
   * > ⚠
   * > Before using this endpoint, you must connect to and identify with a [gateway](https://discord.dev/topics/gateway#gateways) at least once.
   *
   * > ⚠
   * > Discord may strip certain characters from message content, like invalid unicode characters or characters which cause unexpected message formatting. If you are passing user-generated strings into message content, consider sanitizing the data to prevent unexpected behavior and utilizing `allowed_mentions` to prevent unexpected mentions.
   *
   * Post a message to a guild text or DM channel. Returns a [message](https://discord.dev/resources/channel#message-object) object. fires a [message create](#docs/topics/gateway#message-create) gateway event. see [message formatting](#docs/reference#message-formatting) for more information on how to properly format messages.
   *
   *     const message = await HTTPClient.createMessage("384418616331730944", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  createMessage(
    channelId: Snowflake,
    data: CreateMessageJSON,
  ): Promise<CreateMessageBody> {
    return this.request(`/channels/${channelId}/messages`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/channel#crosspost-message
   *
   * Crosspost a message in a News Channel to following channels. This endpoint requires the 'SEND_MESSAGES' permission, if the current user sent the message, or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be present for the current user.
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object.
   *
   *     const message = await HTTPClient.crosspostMessage("586990012520726528", "820815246137491456");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  crosspostMessage(
    channelId: Snowflake,
    messageId: Snowflake,
  ): Promise<CrosspostMessageBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/crosspost`,
      {
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#create-reaction
   *
   * Create a reaction for the message. This endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Additionally, if nobody else has reacted to the message using this emoji, this endpoint requires the 'ADD_REACTIONS' permission to be present on the current user. Returns a 204 empty response on success.
   * The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.
   *
   *     await HTTPClient.createReaction("125676227036971008", "216719676313436160", "test");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  createReaction(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
  ): Promise<CreateReactionBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,
      {
        method: "PUT",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-own-reaction
   *
   * Delete a reaction the current user has made for the message. Returns a 204 empty response on success.
   * The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.
   *
   *     await HTTPClient.deleteOwnReaction("282728241205084160", "151164849722753024", "test");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteOwnReaction(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
  ): Promise<DeleteOwnReactionBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-user-reaction
   *
   * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Returns a 204 empty response on success.
   * The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.
   *
   *     await HTTPClient.deleteUserReaction("762929374281334784", "772503034319077376", "test", "500094412815073280");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  deleteUserReaction(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    userId: Snowflake,
    reason?: string,
  ): Promise<DeleteUserReactionBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#get-reactions
   *
   * Get a list of users that reacted with this emoji. Returns an array of [user](https://discord.dev/resources/user#user-object) objects on success.
   * The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.
   *
   *     const users = await HTTPClient.getReactions("476710237135437824", "126563502482522112", "test", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  getReactions(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    query: GetReactionsQuery,
  ): Promise<GetReactionsBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-all-reactions
   *
   * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Fires a [Message Reaction Remove All](https://discord.dev/topics/gateway#message-reaction-remove-all) Gateway event.
   *
   *     await HTTPClient.deleteAllReactions("833027309601554432", "501060312129077248");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  deleteAllReactions(
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
  ): Promise<DeleteAllReactionsBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/reactions`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#delete-all-reactions-for-emoji
   *
   * Deletes all the reactions for a given emoji on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Fires a [Message Reaction Remove Emoji](https://discord.dev/topics/gateway#message-reaction-remove-emoji) Gateway event.
   * The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.
   *
   *     await HTTPClient.deleteAllReactionsForEmoji("837142968858050560", "836211499625086976", "test");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   * @param emoji https://discord.dev/resources/emoji#emoji-object
   */
  deleteAllReactionsForEmoji(
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    reason?: string,
  ): Promise<DeleteAllReactionsForEmojiBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#edit-message
   *
   * Edit a previously sent message. The fields `content`, `embed`, and `flags` can be edited by the original message author. Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES` permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only `flags` documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).
   *
   * When the `content` field is edited, the `mentions` array in the message object will be reconstructed from scratch based on the new content. The `allowed_mentions` field of the edit request controls how this happens. If there is no explicit `allowed_mentions` in the edit request, the content will be parsed with _default_ allowances, that is, without regard to whether or not an `allowed_mentions` was present in the request that originally created the message.
   *
   * Returns a [message](https://discord.dev/resources/channel#message-object) object. fires a [message update](#docs/topics/gateway#message-update) Gateway event.
   *
   * > ℹ
   * > For a `file` attachment, the `Content-Disposition` subpart header MUST contain a `filename` parameter.
   *
   * > ⚠
   * > This endpoint supports both `application/json` and `multipart/form-data` bodies. When uploading files the `multipart/form-data` content type must be used.
   * > Note that in multipart form data, the `embed`, `allowed_mentions`, and `attachments` fields cannot be used. You can pass a stringified JSON body as a form value as `payload_json` instead.
   * > **If you supply a `payload_json` form value, all fields except for `file` fields will be ignored in the form data**.
   *
   * > ℹ
   * > All parameters to this endpoint are optional and nullable.
   *
   *     const message = await HTTPClient.editMessage("342886720615743488", "772852898370420736", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  editMessage(
    channelId: Snowflake,
    messageId: Snowflake,
    data: EditMessageJSON,
  ): Promise<EditMessageBody> {
    return this.request(`/channels/${channelId}/messages/${messageId}`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/channel#delete-message
   *
   * Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a [Message Delete](https://discord.dev/topics/gateway#message-delete) Gateway event.
   *
   *     await HTTPClient.deleteMessage("453670309644468224", "753230454320005120");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  deleteMessage(
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
  ): Promise<DeleteMessageBody> {
    return this.request(`/channels/${channelId}/messages/${messageId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#bulk-delete-messages
   *
   * Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a [Message Delete Bulk](https://discord.dev/topics/gateway#message-delete-bulk) Gateway event.
   *
   * Any message IDs given that do not exist or are invalid will count towards the minimum and maximum message count (currently 2 and 100 respectively).
   *
   * > ⚠
   * > This endpoint will not delete messages older than 2 weeks, and will fail with a 400 BAD REQUEST if any message provided is older than that or if any duplicate message IDs are provided.
   *
   *     await HTTPClient.bulkDeleteMessages("42605839797714944", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  bulkDeleteMessages(
    channelId: Snowflake,
    data: BulkDeleteMessagesJSON,
    reason?: string,
  ): Promise<BulkDeleteMessagesBody> {
    return this.request(`/channels/${channelId}/messages/bulk-delete`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#edit-channel-permissions
   *
   * Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Only permissions your bot has in the guild or channel can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty response on success. For more information about permissions, see [permissions](https://discord.dev/topics/permissions#permissions).
   *
   *     await HTTPClient.editChannelPermissions("366192931641491456", "664979006797381632", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param overwriteId https://discord.dev/resources/channel#overwrite-object
   */
  editChannelPermissions(
    channelId: Snowflake,
    overwriteId: Snowflake,
    data: EditChannelPermissionsJSON,
    reason?: string,
  ): Promise<EditChannelPermissionsBody> {
    return this.request(`/channels/${channelId}/permissions/${overwriteId}`, {
      data,
      method: "PUT",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#get-channel-invites
   *
   * Returns a list of [invite](https://discord.dev/resources/invite#invite-object) objects (with [invite metadata](#docs/resources/invite#invite-metadata-object)) for the channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS` permission.
   *
   *     const invites = await HTTPClient.getChannelInvites("408518658692743168");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  getChannelInvites(channelId: Snowflake): Promise<GetChannelInvitesBody> {
    return this.request(`/channels/${channelId}/invites`);
  }

  /**
   * https://discord.dev/resources/channel#create-channel-invite
   *
   * Create a new [invite](https://discord.dev/resources/invite#invite-object) object for the channel. only usable for guild channels. requires the `create/instant/invite` permission. all json parameters for this route are optional, however the request body is not. if you are not sending any fields, you still have to send an empty json object (`{}`). returns an [invite](#docs/resources/invite#invite-object) object. fires an [invite create](#docs/topics/gateway#invite-create) Gateway event.
   *
   *     const invite = await HTTPClient.createChannelInvite("963474591055872", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  createChannelInvite(
    channelId: Snowflake,
    data: CreateChannelInviteJSON,
    reason?: string,
  ): Promise<CreateChannelInviteBody> {
    return this.request(`/channels/${channelId}/invites`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#delete-channel-permission
   *
   * Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. For more information about permissions, see [permissions](https://discord.dev/topics/permissions#permissions)
   *
   *     await HTTPClient.deleteChannelPermission("213822963923812352", "581520235622825984");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param overwriteId https://discord.dev/resources/channel#overwrite-object
   */
  deleteChannelPermission(
    channelId: Snowflake,
    overwriteId: Snowflake,
    reason?: string,
  ): Promise<DeleteChannelPermissionBody> {
    return this.request(`/channels/${channelId}/permissions/${overwriteId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#follow-news-channel
   *
   * Follow a News Channel to send messages to a target channel. Requires the `MANAGE_WEBHOOKS` permission in the target channel. Returns a [followed channel](https://discord.dev/resources/channel#followed-channel-object) object.
   *
   *     const followedChannel = await HTTPClient.followNewsChannel("732077681910218752", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  followNewsChannel(
    channelId: Snowflake,
    data: FollowNewsChannelJSON,
    reason?: string,
  ): Promise<FollowNewsChannelBody> {
    return this.request(`/channels/${channelId}/followers`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#trigger-typing-indicator
   *
   * Post a typing indicator for the specified channel. Generally bots should **not** implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success. Fires a [Typing Start](https://discord.dev/topics/gateway#typing-start) Gateway event.
   *
   *     await HTTPClient.triggerTypingIndicator("338772871838957568");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  triggerTypingIndicator(
    channelId: Snowflake,
  ): Promise<TriggerTypingIndicatorBody> {
    return this.request(`/channels/${channelId}/typing`, {
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/channel#get-pinned-messages
   *
   * Returns all pinned messages in the channel as an array of [message](https://discord.dev/resources/channel#message-object) objects.
   *
   *     const messages = await HTTPClient.getPinnedMessages("11334665977724928");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  getPinnedMessages(channelId: Snowflake): Promise<GetPinnedMessagesBody> {
    return this.request(`/channels/${channelId}/pins`);
  }

  /**
   * https://discord.dev/resources/channel#pin-message
   *
   * Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.
   *
   * > ⚠
   * > The max pinned messages is 50.
   *
   *     await HTTPClient.pinMessage("525863223426023424", "553854193568317440");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  pinMessage(
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
  ): Promise<PinMessageBody> {
    return this.request(`/channels/${channelId}/pins/${messageId}`, {
      method: "PUT",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#unpin-message
   *
   * Unpin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.
   *
   *     await HTTPClient.unpinMessage("542481037096124416", "549319244752355328");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  unpinMessage(
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
  ): Promise<UnpinMessageBody> {
    return this.request(`/channels/${channelId}/pins/${messageId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/channel#group-dm-add-recipient
   *
   * Adds a recipient to a Group DM using their access token.
   *
   *     await HTTPClient.groupDMAddRecipient("329796092629614592", "15480114582126592", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  groupDMAddRecipient(
    channelId: Snowflake,
    userId: Snowflake,
    data: GroupDMAddRecipientJSON,
  ): Promise<GroupDMAddRecipientBody> {
    return this.request(`/channels/${channelId}/recipients/${userId}`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/channel#group-dm-remove-recipient
   *
   * Removes a recipient from a Group DM.
   *
   *     await HTTPClient.groupDMRemoveRecipient("686177319458439168", "708369802380443648");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  groupDMRemoveRecipient(
    channelId: Snowflake,
    userId: Snowflake,
  ): Promise<GroupDMRemoveRecipientBody> {
    return this.request(`/channels/${channelId}/recipients/${userId}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/channel#start-thread-with-message
   *
   * Creates a new thread from an existing message. Returns a [channel](https://discord.dev/resources/channel#channel-object) on success, and a 400 bad request on invalid parameters. fires a [thread create](#docs/topics/gateway#thread-create) Gateway event.
   *
   * When called on a `GUILD_TEXT` channel, creates a `GUILD_PUBLIC_THREAD`. When called on a `GUILD_NEWS` channel, creates a `GUILD_NEWS_THREAD`. The id of the created thread will be the same as the id of the message, and as such a message can only have a single thread created from it.
   *
   *     const channel = await HTTPClient.startThreadWithMessage("197493091676979200", "250579872454279168", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  startThreadWithMessage(
    channelId: Snowflake,
    messageId: Snowflake,
    data: StartThreadWithMessageJSON,
  ): Promise<StartThreadWithMessageBody> {
    return this.request(
      `/channels/${channelId}/messages/${messageId}/threads`,
      {
        data,
        method: "POST",
      },
    );
  }

  /**
   * https://discord.dev/resources/channel#start-thread-without-message
   *
   * Creates a new thread that is not connected to an existing message. The created thread is always a `GUILD_PRIVATE_THREAD`. Returns a [channel](https://discord.dev/resources/channel#channel-object) on success, and a 400 bad request on invalid parameters. fires a [thread create](#docs/topics/gateway#thread-create) Gateway event.
   *
   *     const channel = await HTTPClient.startThreadWithoutMessage("307570186750263296", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  startThreadWithoutMessage(
    channelId: Snowflake,
    data: StartThreadWithoutMessageJSON,
  ): Promise<StartThreadWithoutMessageBody> {
    return this.request(`/channels/${channelId}/threads`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/channel#join-thread
   *
   * Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway event.
   *
   *     await HTTPClient.joinThread("31896308868448256");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  joinThread(channelId: Snowflake): Promise<JoinThreadBody> {
    return this.request(`/channels/${channelId}/thread-members/@me`, {
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/channel#add-thread-member
   *
   * Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway event.
   *
   *     await HTTPClient.addThreadMember("323431284313423872", "21117719952752640");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  addThreadMember(
    channelId: Snowflake,
    userId: Snowflake,
  ): Promise<AddThreadMemberBody> {
    return this.request(`/channels/${channelId}/thread-members/${userId}`, {
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/channel#leave-thread
   *
   * Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway event.
   *
   *     await HTTPClient.leaveThread("529264842792501248");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  leaveThread(channelId: Snowflake): Promise<LeaveThreadBody> {
    return this.request(`/channels/${channelId}/thread-members/@me`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/channel#remove-thread-member
   *
   * Removes another member from a thread. Requires the `MANAGE_THREADS` permission or that you are the creator of the thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](https://discord.dev/topics/gateway#thread-members-update) Gateway event.
   *
   *     await HTTPClient.removeThreadMember("50096538537426944", "121090923655331840");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  removeThreadMember(
    channelId: Snowflake,
    userId: Snowflake,
  ): Promise<RemoveThreadMemberBody> {
    return this.request(`/channels/${channelId}/thread-members/${userId}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/channel#list-thread-members
   *
   * Returns array of [thread members](https://discord.dev/resources/channel#thread-member-object) objects that are members of the thread.
   *
   * > ⚠
   * > This endpoint is restricted according to whether the `GUILD_MEMBERS` [Privileged Intent](https://discord.dev/topics/gateway#privileged-intents) is enabled for your application.
   *
   *     const threadMembers = await HTTPClient.listThreadMembers("89746101791358976");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  listThreadMembers(channelId: Snowflake): Promise<ListThreadMembersBody> {
    return this.request(`/channels/${channelId}/thread-members`);
  }

  /**
   * https://discord.dev/resources/channel#list-active-threads
   *
   * Returns all active threads in the channel, including public and private threads. Threads are ordered by their `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.
   *
   *     const activeThreads = await HTTPClient.listActiveThreads("731479136131874816");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  listActiveThreads(channelId: Snowflake): Promise<ListActiveThreadsBody> {
    return this.request(`/channels/${channelId}/threads/active`);
  }

  /**
   * https://discord.dev/resources/channel#list-public-archived-threads
   *
   * Returns archived threads in the channel that are public. When called on a `GUILD_TEXT` channel, returns threads of [type](https://discord.dev/resources/channel#channel-object-channel-types) `guild/public/thread`. when called on a `guild/news` channel returns threads of [type](#docs/resources/channel#channel-object-channel-types) `GUILD_NEWS_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.
   *
   *     const archivedThreads = await HTTPClient.listPublicArchivedThreads("105471452119040000", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  listPublicArchivedThreads(
    channelId: Snowflake,
    query: ListPublicArchivedThreadsQuery,
  ): Promise<ListPublicArchivedThreadsBody> {
    return this.request(`/channels/${channelId}/threads/archived/public`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/channel#list-private-archived-threads
   *
   * Returns archived threads in the channel that are of [type](https://discord.dev/resources/channel#channel-object-channel-types) `GUILD_PRIVATE_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires both the `READ_MESSAGE_HISTORY` and `MANAGE_THREADS` permissions.
   *
   *     const archivedThreads = await HTTPClient.listPrivateArchivedThreads("92758347756863488", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  listPrivateArchivedThreads(
    channelId: Snowflake,
    query: ListPrivateArchivedThreadsQuery,
  ): Promise<ListPrivateArchivedThreadsBody> {
    return this.request(`/channels/${channelId}/threads/archived/private`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/channel#list-joined-private-archived-threads
   *
   * Returns archived threads in the channel that are of [type](https://discord.dev/resources/channel#channel-object-channel-types) `GUILD_PRIVATE_THREAD`, and the user has joined. Threads are ordered by their `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.
   *
   *     const archivedThreads = await HTTPClient.listJoinedPrivateArchivedThreads("407267932666593280", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  listJoinedPrivateArchivedThreads(
    channelId: Snowflake,
    query: ListJoinedPrivateArchivedThreadsQuery,
  ): Promise<ListJoinedPrivateArchivedThreadsBody> {
    return this.request(
      `/channels/${channelId}/users/@me/threads/archived/private`,
      {
        query,
      },
    );
  }

  /**
   * https://discord.dev/resources/emoji#list-guild-emojis
   *
   * Returns a list of [emoji](https://discord.dev/resources/emoji#emoji-object) objects for the given guild.
   *
   *     const emojis = await HTTPClient.listGuildEmojis("474680962920218624");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  listGuildEmojis(guildId: Snowflake): Promise<ListGuildEmojisBody> {
    return this.request(`/guilds/${guildId}/emojis`);
  }

  /**
   * https://discord.dev/resources/emoji#get-guild-emoji
   *
   * Returns an [emoji](https://discord.dev/resources/emoji#emoji-object) object for the given guild and emoji IDs.
   *
   *     const emoji = await HTTPClient.getGuildEmoji("347924349732257792", "519499595911266304");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param emojiId https://discord.dev/resources/emoji#emoji-object
   */
  getGuildEmoji(
    guildId: Snowflake,
    emojiId: Snowflake,
  ): Promise<GetGuildEmojiBody> {
    return this.request(`/guilds/${guildId}/emojis/${emojiId}`);
  }

  /**
   * https://discord.dev/resources/emoji#create-guild-emoji
   *
   * Create a new emoji for the guild. Requires the `MANAGE_EMOJIS` permission. Returns the new [emoji](https://discord.dev/resources/emoji#emoji-object) object on success. fires a [guild emojis update](#docs/topics/gateway#guild-emojis-update) Gateway event.
   *
   * > ⚠
   * > Emojis and animated emojis have a maximum file size of 256kb. Attempting to upload an emoji larger than this limit will fail and return 400 Bad Request and an error message, but not a [JSON status code](https://discord.dev/topics/opcodes/and/status/codes#json).
   *
   *     const emoji = await HTTPClient.createGuildEmoji("115196835726884864", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  createGuildEmoji(
    guildId: Snowflake,
    data: CreateGuildEmojiJSON,
    reason?: string,
  ): Promise<CreateGuildEmojiBody> {
    return this.request(`/guilds/${guildId}/emojis`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/emoji#modify-guild-emoji
   *
   * Modify the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns the updated [emoji](https://discord.dev/resources/emoji#emoji-object) object on success. fires a [guild emojis update](#docs/topics/gateway#guild-emojis-update) Gateway event.
   *
   * > ℹ
   * > All parameters to this endpoint are optional.
   *
   *     const emoji = await HTTPClient.modifyGuildEmoji("98984069626331136", "172005734492405760", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param emojiId https://discord.dev/resources/emoji#emoji-object
   */
  modifyGuildEmoji(
    guildId: Snowflake,
    emojiId: Snowflake,
    data: ModifyGuildEmojiJSON,
    reason?: string,
  ): Promise<ModifyGuildEmojiBody> {
    return this.request(`/guilds/${guildId}/emojis/${emojiId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/emoji#delete-guild-emoji
   *
   * Delete the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns `204 No Content` on success. Fires a [Guild Emojis Update](https://discord.dev/topics/gateway#guild-emojis-update) Gateway event.
   *
   *     await HTTPClient.deleteGuildEmoji("537693722410745856", "348993184056999936");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param emojiId https://discord.dev/resources/emoji#emoji-object
   */
  deleteGuildEmoji(
    guildId: Snowflake,
    emojiId: Snowflake,
    reason?: string,
  ): Promise<DeleteGuildEmojiBody> {
    return this.request(`/guilds/${guildId}/emojis/${emojiId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#create-guild
   *
   * Create a new guild. Returns a [guild](https://discord.dev/resources/guild#guild-object) object on success. fires a [guild create](#docs/topics/gateway#guild-create) Gateway event.
   *
   * > ⚠
   * > This endpoint can be used only by bots in less than 10 guilds.
   *
   *     const guild = await HTTPClient.createGuild({ ... });
   */
  createGuild(data: CreateGuildJSON): Promise<CreateGuildBody> {
    return this.request("/guilds", {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild
   *
   * Returns the [guild](https://discord.dev/resources/guild#guild-object) object for the given id. If `with_counts` is set to `true`, this endpoint will also return `approximate_member_count` and `approximate_presence_count` for the guild.
   *
   *     const guild = await HTTPClient.getGuild("332258792991358976", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuild(guildId: Snowflake, query: GetGuildQuery): Promise<GetGuildBody> {
    return this.request(`/guilds/${guildId}`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-preview
   *
   * Returns the [guild preview](https://discord.dev/resources/guild#guild-preview-object) object for the given id. If the user is not in the guild, then the guild must be Discoverable.
   *
   *     const guildPreview = await HTTPClient.getGuildPreview("764775776619855872");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildPreview(guildId: Snowflake): Promise<GetGuildPreviewBody> {
    return this.request(`/guilds/${guildId}/preview`);
  }

  /**
   * https://discord.dev/resources/guild#modify-guild
   *
   * Modify a guild's settings. Requires the `MANAGE_GUILD` permission. Returns the updated [guild](https://discord.dev/resources/guild#guild-object) object on success. fires a [guild update](#docs/topics/gateway#guild-update) Gateway event.
   *
   * > ℹ
   * > All parameters to this endpoint are optional
   *
   *     const guild = await HTTPClient.modifyGuild("144338814834311168", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  modifyGuild(
    guildId: Snowflake,
    data: ModifyGuildJSON,
    reason?: string,
  ): Promise<ModifyGuildBody> {
    return this.request(`/guilds/${guildId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#delete-guild
   *
   * Delete a guild permanently. User must be owner. Returns `204 No Content` on success. Fires a [Guild Delete](https://discord.dev/topics/gateway#guild-delete) Gateway event.
   *
   *     await HTTPClient.deleteGuild("456520124602515456");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  deleteGuild(guildId: Snowflake): Promise<DeleteGuildBody> {
    return this.request(`/guilds/${guildId}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-channels
   *
   * Returns a list of guild [channel](https://discord.dev/resources/channel#channel-object) objects. Does not include threads.
   *
   *     const channels = await HTTPClient.getGuildChannels("573010992003284992");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildChannels(guildId: Snowflake): Promise<GetGuildChannelsBody> {
    return this.request(`/guilds/${guildId}/channels`);
  }

  /**
   * https://discord.dev/resources/guild#create-guild-channel
   *
   * Create a new [channel](https://discord.dev/resources/channel#channel-object) object for the guild. requires the `manage/channels` permission. if setting permission overwrites, only permissions your bot has in the guild can be allowed#denied. setting `manage/roles` permission in channels is only possible for guild administrators. returns the new [channel](#docs/resources/channel#channel-object) object on success. fires a [channel create](#docs/topics/gateway#channel-create) Gateway event.
   *
   * > ℹ
   * > All parameters to this endpoint are optional excluding 'name'
   *
   *     const channel = await HTTPClient.createGuildChannel("570397805240123392", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  createGuildChannel(
    guildId: Snowflake,
    data: CreateGuildChannelJSON,
    reason?: string,
  ): Promise<CreateGuildChannelBody> {
    return this.request(`/guilds/${guildId}/channels`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-channel-positions
   *
   * Modify the positions of a set of [channel](https://discord.dev/resources/channel#channel-object) objects for the guild. requires `manage/channels` permission. returns a 204 empty response on success. fires multiple [channel update](#docs/topics/gateway#channel-update) Gateway events.
   *
   * > ℹ
   * > Only channels to be modified are required, with the minimum being a swap between at least two channels.
   *
   * This endpoint takes a JSON array of parameters in the following format:
   *
   *     await HTTPClient.modifyGuildChannelPositions("135093432925290496", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  modifyGuildChannelPositions(
    guildId: Snowflake,
    data: ModifyGuildChannelPositionsJSON,
  ): Promise<ModifyGuildChannelPositionsBody> {
    return this.request(`/guilds/${guildId}/channels`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-member
   *
   * Returns a [guild member](https://discord.dev/resources/guild#guild-member-object) object for the specified user.
   *
   *     const guildMember = await HTTPClient.getGuildMember("401051474781536256", "496131581711220736");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  getGuildMember(
    guildId: Snowflake,
    userId: Snowflake,
  ): Promise<GetGuildMemberBody> {
    return this.request(`/guilds/${guildId}/members/${userId}`);
  }

  /**
   * https://discord.dev/resources/guild#list-guild-members
   *
   * Returns a list of [guild member](https://discord.dev/resources/guild#guild-member-object) objects that are members of the guild.
   *
   * > ⚠
   * > This endpoint is restricted according to whether the `GUILD_MEMBERS` [Privileged Intent](https://discord.dev/topics/gateway#privileged-intents) is enabled for your application.
   *
   * > ℹ
   * > All parameters to this endpoint are optional
   *
   *     const guildMembers = await HTTPClient.listGuildMembers("514411663919677440", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  listGuildMembers(
    guildId: Snowflake,
    query: ListGuildMembersQuery,
  ): Promise<ListGuildMembersBody> {
    return this.request(`/guilds/${guildId}/members`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/guild#search-guild-members
   *
   * Returns a list of [guild member](https://discord.dev/resources/guild#guild-member-object) objects whose username or nickname starts with a provided string.
   *
   * > ℹ
   * > All parameters to this endpoint except for `query` are optional
   *
   *     const guildMembers = await HTTPClient.searchGuildMembers("775503768463605760", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  searchGuildMembers(
    guildId: Snowflake,
    query: SearchGuildMembersQuery,
  ): Promise<SearchGuildMembersBody> {
    return this.request(`/guilds/${guildId}/members/search`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/guild#add-guild-member
   *
   * Adds a user to the guild, provided you have a valid oauth2 access token for the user with the `guilds.join` scope. Returns a 201 Created with the [guild member](https://discord.dev/resources/guild#guild-member-object) as the body, or 204 no content if the user is already a member of the guild. fires a [guild member add](#docs/topics/gateway#guild-member-add) Gateway event.
   *
   * For guilds with [Membership Screening](https://discord.dev/resources/guild#membership-screening-object) enabled, this endpoint will default to adding new members as `pending` in the [guild member object](#docs/resources/guild#guild-member-object). Members that are `pending` will have to complete membership screening before they become full members that can talk.
   *
   * > ℹ
   * > All parameters to this endpoint except for `access_token` are optional.
   *
   * > ℹ
   * > The Authorization header must be a Bot token (belonging to the same application used for authorization), and the bot must be a member of the guild with `CREATE_INSTANT_INVITE` permission.
   *
   *     await HTTPClient.addGuildMember("705567355396161536", "654298233803112448", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  addGuildMember(
    guildId: Snowflake,
    userId: Snowflake,
    data: AddGuildMemberJSON,
  ): Promise<AddGuildMemberBody> {
    return this.request(`/guilds/${guildId}/members/${userId}`, {
      data,
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-member
   *
   * Modify attributes of a [guild member](https://discord.dev/resources/guild#guild-member-object). returns a 200 ok with the [guild member](#docs/resources/guild#guild-member-object) as the body. fires a [guild member update](#docs/topics/gateway#guild-member-update) Gateway event. If the `channel_id` is set to null, this will force the target user to be disconnected from voice.
   *
   * > ℹ
   * > All parameters to this endpoint are optional and nullable. When moving members to channels, the API user _must_ have permissions to both connect to the channel and have the `MOVE_MEMBERS` permission.
   *
   *     const guildMember = await HTTPClient.modifyGuildMember("351717523038666752", "28526875454210048", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  modifyGuildMember(
    guildId: Snowflake,
    userId: Snowflake,
    data: ModifyGuildMemberJSON,
    reason?: string,
  ): Promise<ModifyGuildMemberBody> {
    return this.request(`/guilds/${guildId}/members/${userId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#modify-current-user-nick
   *
   * Modifies the nickname of the current user in a guild. Returns a 200 with the nickname on success. Fires a [Guild Member Update](https://discord.dev/topics/gateway#guild-member-update) Gateway event.
   *
   *     const currentUserNick = await HTTPClient.modifyCurrentUserNick("774909360424878080", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  modifyCurrentUserNick(
    guildId: Snowflake,
    data: ModifyCurrentUserNickJSON,
    reason?: string,
  ): Promise<ModifyCurrentUserNickBody> {
    return this.request(`/guilds/${guildId}/members/@me/nick`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#add-guild-member-role
   *
   * Adds a role to a [guild member](https://discord.dev/resources/guild#guild-member-object). requires the `manage/roles` permission. returns a 204 empty response on success. fires a [guild member update](#docs/topics/gateway#guild-member-update) Gateway event.
   *
   *     await HTTPClient.addGuildMemberRole("432668268478595072", "681952045074219008", "591813320055455744");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   * @param roleId https://discord.dev/topics/permissions#role-object
   */
  addGuildMemberRole(
    guildId: Snowflake,
    userId: Snowflake,
    roleId: Snowflake,
    reason?: string,
  ): Promise<AddGuildMemberRoleBody> {
    return this.request(
      `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      {
        method: "PUT",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#remove-guild-member-role
   *
   * Removes a role from a [guild member](https://discord.dev/resources/guild#guild-member-object). requires the `manage/roles` permission. returns a 204 empty response on success. fires a [guild member update](#docs/topics/gateway#guild-member-update) Gateway event.
   *
   *     await HTTPClient.removeGuildMemberRole("69789403026817024", "821524474623950848", "681766264284119040");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   * @param roleId https://discord.dev/topics/permissions#role-object
   */
  removeGuildMemberRole(
    guildId: Snowflake,
    userId: Snowflake,
    roleId: Snowflake,
    reason?: string,
  ): Promise<RemoveGuildMemberRoleBody> {
    return this.request(
      `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      {
        method: "DELETE",
        reason,
      },
    );
  }

  /**
   * https://discord.dev/resources/guild#remove-guild-member
   *
   * Remove a member from a guild. Requires `KICK_MEMBERS` permission. Returns a 204 empty response on success. Fires a [Guild Member Remove](https://discord.dev/topics/gateway#guild-member-remove) Gateway event.
   *
   *     await HTTPClient.removeGuildMember("812529310781931520", "733306006531997696");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  removeGuildMember(
    guildId: Snowflake,
    userId: Snowflake,
    reason?: string,
  ): Promise<RemoveGuildMemberBody> {
    return this.request(`/guilds/${guildId}/members/${userId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-bans
   *
   * Returns a list of [ban](https://discord.dev/resources/guild#ban-object) objects for the users banned from this guild. Requires the `BAN_MEMBERS` permission.
   *
   *     const bans = await HTTPClient.getGuildBans("464144631320281088");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildBans(guildId: Snowflake): Promise<GetGuildBansBody> {
    return this.request(`/guilds/${guildId}/bans`);
  }

  /**
   * https://discord.dev/resources/guild#get-guild-ban
   *
   * Returns a [ban](https://discord.dev/resources/guild#ban-object) object for the given user or a 404 not found if the ban cannot be found. Requires the `BAN_MEMBERS` permission.
   *
   *     const ban = await HTTPClient.getGuildBan("163224284402024448", "787601326203731968");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  getGuildBan(guildId: Snowflake, userId: Snowflake): Promise<GetGuildBanBody> {
    return this.request(`/guilds/${guildId}/bans/${userId}`);
  }

  /**
   * https://discord.dev/resources/guild#create-guild-ban
   *
   * Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the `BAN_MEMBERS` permission. Returns a 204 empty response on success. Fires a [Guild Ban Add](https://discord.dev/topics/gateway#guild-ban-add) Gateway event.
   *
   * > ℹ
   * > Supplying a reason in the JSON body will override `X-Audit-Log-Reason` header if both are provided.
   *
   *     await HTTPClient.createGuildBan("217497153126268928", "51366025530179584", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  createGuildBan(
    guildId: Snowflake,
    userId: Snowflake,
    data: CreateGuildBanJSON,
    reason?: string,
  ): Promise<CreateGuildBanBody> {
    return this.request(`/guilds/${guildId}/bans/${userId}`, {
      data,
      method: "PUT",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#remove-guild-ban
   *
   * Remove the ban for a user. Requires the `BAN_MEMBERS` permissions. Returns a 204 empty response on success. Fires a [Guild Ban Remove](https://discord.dev/topics/gateway#guild-ban-remove) Gateway event.
   *
   *     await HTTPClient.removeGuildBan("641542643825770496", "320430978000486400");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  removeGuildBan(
    guildId: Snowflake,
    userId: Snowflake,
    reason?: string,
  ): Promise<RemoveGuildBanBody> {
    return this.request(`/guilds/${guildId}/bans/${userId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-roles
   *
   * Returns a list of [role](https://discord.dev/topics/permissions#role-object) objects for the guild.
   *
   *     const roles = await HTTPClient.getGuildRoles("245512583065370624");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildRoles(guildId: Snowflake): Promise<GetGuildRolesBody> {
    return this.request(`/guilds/${guildId}/roles`);
  }

  /**
   * https://discord.dev/resources/guild#create-guild-role
   *
   * Create a new [role](https://discord.dev/topics/permissions#role-object) for the guild. requires the `manage/roles` permission. returns the new [role](#docs/topics/permissions#role-object) object on success. fires a [guild role create](#docs/topics/gateway#guild-role-create) Gateway event. All JSON params are optional.
   *
   *     const role = await HTTPClient.createGuildRole("384945839832825856", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  createGuildRole(
    guildId: Snowflake,
    data: CreateGuildRoleJSON,
    reason?: string,
  ): Promise<CreateGuildRoleBody> {
    return this.request(`/guilds/${guildId}/roles`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-role-positions
   *
   * Modify the positions of a set of [role](https://discord.dev/topics/permissions#role-object) objects for the guild. requires the `manage/roles` permission. returns a list of all of the guild's [role](#docs/topics/permissions#role-object) objects on success. fires multiple [guild role update](#docs/topics/gateway#guild-role-update) Gateway events.
   *
   * This endpoint takes a JSON array of parameters in the following format:
   *
   *     const roles = await HTTPClient.modifyGuildRolePositions("293556093366304768", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  modifyGuildRolePositions(
    guildId: Snowflake,
    data: ModifyGuildRolePositionsJSON,
  ): Promise<ModifyGuildRolePositionsBody> {
    return this.request(`/guilds/${guildId}/roles`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-role
   *
   * Modify a guild role. Requires the `MANAGE_ROLES` permission. Returns the updated [role](https://discord.dev/topics/permissions#role-object) on success. fires a [guild role update](#docs/topics/gateway#guild-role-update) Gateway event.
   *
   * > ℹ
   * > All parameters to this endpoint are optional and nullable.
   *
   *     const role = await HTTPClient.modifyGuildRole("528479561998925824", "327200364879151104", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param roleId https://discord.dev/topics/permissions#role-object
   */
  modifyGuildRole(
    guildId: Snowflake,
    roleId: Snowflake,
    data: ModifyGuildRoleJSON,
    reason?: string,
  ): Promise<ModifyGuildRoleBody> {
    return this.request(`/guilds/${guildId}/roles/${roleId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#delete-guild-role
   *
   * Delete a guild role. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a [Guild Role Delete](https://discord.dev/topics/gateway#guild-role-delete) Gateway event.
   *
   *     await HTTPClient.deleteGuildRole("200026762548084736", "637437725808525312");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param roleId https://discord.dev/topics/permissions#role-object
   */
  deleteGuildRole(
    guildId: Snowflake,
    roleId: Snowflake,
    reason?: string,
  ): Promise<DeleteGuildRoleBody> {
    return this.request(`/guilds/${guildId}/roles/${roleId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-prune-count
   *
   * Returns an object with one 'pruned' key indicating the number of members that would be removed in a prune operation. Requires the `KICK_MEMBERS` permission.
   *
   * By default, prune will not remove users with roles. You can optionally include specific roles in your prune by providing the `include_roles` parameter. Any inactive user that has a subset of the provided role(s) will be counted in the prune and users with additional roles will not.
   *
   *     const guildPruneCount = await HTTPClient.getGuildPruneCount("569317367142678528", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildPruneCount(
    guildId: Snowflake,
    query: GetGuildPruneCountQuery,
  ): Promise<GetGuildPruneCountBody> {
    return this.request(`/guilds/${guildId}/prune`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/guild#begin-guild-prune
   *
   * Begin a prune operation. Requires the `KICK_MEMBERS` permission. Returns an object with one 'pruned' key indicating the number of members that were removed in the prune operation. For large guilds it's recommended to set the `compute_prune_count` option to `false`, forcing 'pruned' to `null`. Fires multiple [Guild Member Remove](https://discord.dev/topics/gateway#guild-member-remove) Gateway events.
   *
   * By default, prune will not remove users with roles. You can optionally include specific roles in your prune by providing the `include_roles` parameter. Any inactive user that has a subset of the provided role(s) will be included in the prune and users with additional roles will not.
   *
   * > ℹ
   * > Supplying a reason in the JSON body will override `X-Audit-Log-Reason` header if both are provided.
   *
   *     const guildPruneCount = await HTTPClient.beginGuildPrune("339917049763463168", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  beginGuildPrune(
    guildId: Snowflake,
    data: BeginGuildPruneJSON,
    reason?: string,
  ): Promise<BeginGuildPruneBody> {
    return this.request(`/guilds/${guildId}/prune`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-voice-regions
   *
   * Returns a list of [voice region](https://discord.dev/resources/voice#voice-region-object) objects for the guild. Unlike the similar `/voice` route, this returns VIP servers when the guild is VIP-enabled.
   *
   *     const voiceRegions = await HTTPClient.getGuildVoiceRegions("468466064020209664");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildVoiceRegions(guildId: Snowflake): Promise<GetGuildVoiceRegionsBody> {
    return this.request(`/guilds/${guildId}/regions`);
  }

  /**
   * https://discord.dev/resources/guild#get-guild-invites
   *
   * Returns a list of [invite](https://discord.dev/resources/invite#invite-object) objects (with [invite metadata](#docs/resources/invite#invite-metadata-object)) for the guild. Requires the `MANAGE_GUILD` permission.
   *
   *     const invites = await HTTPClient.getGuildInvites("102388855193206784");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildInvites(guildId: Snowflake): Promise<GetGuildInvitesBody> {
    return this.request(`/guilds/${guildId}/invites`);
  }

  /**
   * https://discord.dev/resources/guild#get-guild-integrations
   *
   * Returns a list of [integration](https://discord.dev/resources/guild#integration-object) objects for the guild. Requires the `MANAGE_GUILD` permission.
   *
   *     const integrations = await HTTPClient.getGuildIntegrations("81004670364942336");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildIntegrations(guildId: Snowflake): Promise<GetGuildIntegrationsBody> {
    return this.request(`/guilds/${guildId}/integrations`);
  }

  /**
   * https://discord.dev/resources/guild#delete-guild-integration
   *
   * Delete the attached [integration](https://discord.dev/resources/guild#integration-object) object for the guild. deletes any associated webhooks and kicks the associated bot if there is one. requires the `manage/guild` permission. returns a 204 empty response on success. fires a [guild integrations update](#docs/topics/gateway#guild-integrations-update) Gateway event.
   *
   *     await HTTPClient.deleteGuildIntegration("796589722200702976", "189718634086531072");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param integrationId https://discord.dev/resources/guild#integration-object
   */
  deleteGuildIntegration(
    guildId: Snowflake,
    integrationId: Snowflake,
    reason?: string,
  ): Promise<DeleteGuildIntegrationBody> {
    return this.request(`/guilds/${guildId}/integrations/${integrationId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-widget-settings
   *
   * Returns a [guild widget](https://discord.dev/resources/guild#guild-widget-object) object. Requires the `MANAGE_GUILD` permission.
   *
   *     const guildWidget = await HTTPClient.getGuildWidgetSettings("261202561661403136");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildWidgetSettings(
    guildId: Snowflake,
  ): Promise<GetGuildWidgetSettingsBody> {
    return this.request(`/guilds/${guildId}/widget`);
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-widget
   *
   * Modify a [guild widget](https://discord.dev/resources/guild#guild-widget-object) object for the guild. all attributes may be passed in with json and modified. requires the `manage/guild` permission. returns the updated [guild widget](#docs/resources/guild#guild-widget-object) object.
   *
   *     const guildWidget = await HTTPClient.modifyGuildWidget("147078936759631872", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  modifyGuildWidget(
    guildId: Snowflake,
    data: ModifyGuildWidgetJSON,
    reason?: string,
  ): Promise<ModifyGuildWidgetBody> {
    return this.request(`/guilds/${guildId}/widget`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-widget
   *
   * Returns the widget for the guild.
   *
   *     const guildWidget = await HTTPClient.getGuildWidget("240482982601687040");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildWidget(guildId: Snowflake): Promise<GetGuildWidgetBody> {
    return this.request(`/guilds/${guildId}/widget.json`);
  }

  /**
   * https://discord.dev/resources/guild#get-guild-vanity-url
   *
   * Returns a partial [invite](https://discord.dev/resources/invite#invite-object) object for guilds with that feature enabled. Requires the `MANAGE_GUILD` permission. `code` will be null if a vanity url for the guild is not set.
   *
   *     const guildVanityURL = await HTTPClient.getGuildVanityURL("375084212627177472");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildVanityURL(guildId: Snowflake): Promise<GetGuildVanityURLBody> {
    return this.request(`/guilds/${guildId}/vanity-url`);
  }

  /**
   * https://discord.dev/resources/guild#get-guild-widget-image
   *
   * Returns a PNG image widget for the guild. Requires no permissions or authentication.
   *
   * > ℹ
   * > All parameters to this endpoint are optional.
   *
   *     const string = await HTTPClient.getGuildWidgetImage("448713208656560128", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildWidgetImage(
    guildId: Snowflake,
    query: GetGuildWidgetImageQuery,
  ): Promise<GetGuildWidgetImageBody> {
    return this.request(`/guilds/${guildId}/widget.png`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/guild#get-guild-welcome-screen
   *
   * Returns the [Welcome Screen](https://discord.dev/resources/guild#welcome-screen-object) object for the guild.
   *
   *     const welcomeScreen = await HTTPClient.getGuildWelcomeScreen("565076433295114240");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildWelcomeScreen(
    guildId: Snowflake,
  ): Promise<GetGuildWelcomeScreenBody> {
    return this.request(`/guilds/${guildId}/welcome-screen`);
  }

  /**
   * https://discord.dev/resources/guild#modify-guild-welcome-screen
   *
   * Modify the guild's [Welcome Screen](https://discord.dev/resources/guild#welcome-screen-object). requires the `manage/guild` permission. returns the updated [welcome screen](#docs/resources/guild#welcome-screen-object) object.
   *
   * > ℹ
   * > All parameters to this endpoint are optional and nullable
   *
   *     const welcomeScreen = await HTTPClient.modifyGuildWelcomeScreen("387682756240343040", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  modifyGuildWelcomeScreen(
    guildId: Snowflake,
    data: ModifyGuildWelcomeScreenJSON,
  ): Promise<ModifyGuildWelcomeScreenBody> {
    return this.request(`/guilds/${guildId}/welcome-screen`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild#update-current-user-voice-state
   *
   * Updates the current user's voice state.
   *
   *     await HTTPClient.updateCurrentUserVoiceState("346685193190375424", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  updateCurrentUserVoiceState(
    guildId: Snowflake,
    data: UpdateCurrentUserVoiceStateJSON,
  ): Promise<UpdateCurrentUserVoiceStateBody> {
    return this.request(`/guilds/${guildId}/voice-states/@me`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild#update-user-voice-state
   *
   * Updates another user's voice state.
   *
   *     await HTTPClient.updateUserVoiceState("389717692275228672", "461584037882888192", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param userId https://discord.dev/resources/user#user-object
   */
  updateUserVoiceState(
    guildId: Snowflake,
    userId: Snowflake,
    data: UpdateUserVoiceStateJSON,
    reason?: string,
  ): Promise<UpdateUserVoiceStateBody> {
    return this.request(`/guilds/${guildId}/voice-states/${userId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/guild-template#get-guild-template
   *
   * Returns a [guild template](https://discord.dev/resources/guild/template#guild-template-object) object for the given code.
   *
   *     const guildTemplate = await HTTPClient.getGuildTemplate("test");
   *
   * @param templateCode https://discord.dev/resources/guild/template#guild-template-object
   */
  getGuildTemplate(templateCode: string): Promise<GetGuildTemplateBody> {
    return this.request(`/guilds/templates/${templateCode}`);
  }

  /**
   * https://discord.dev/resources/guild-template#create-guild-from-guild-template
   *
   * Create a new guild based on a template. Returns a [guild](https://discord.dev/resources/guild#guild-object) object on success. fires a [guild create](#docs/topics/gateway#guild-create) Gateway event.
   *
   * > ⚠
   * > This endpoint can be used only by bots in less than 10 guilds.
   *
   *     const guild = await HTTPClient.createGuildFromGuildTemplate("test", { ... });
   *
   * @param templateCode https://discord.dev/resources/guild/template#guild-template-object
   */
  createGuildFromGuildTemplate(
    templateCode: string,
    data: CreateGuildFromGuildTemplateJSON,
  ): Promise<CreateGuildFromGuildTemplateBody> {
    return this.request(`/guilds/templates/${templateCode}`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/guild-template#get-guild-templates
   *
   * Returns an array of [guild template](https://discord.dev/resources/guild/template#guild-template-object) objects. Requires the `MANAGE_GUILD` permission.
   *
   *     const guildTemplates = await HTTPClient.getGuildTemplates("179172423545913344");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildTemplates(guildId: Snowflake): Promise<GetGuildTemplatesBody> {
    return this.request(`/guilds/${guildId}/templates`);
  }

  /**
   * https://discord.dev/resources/guild-template#create-guild-template
   *
   * Creates a template for the guild. Requires the `MANAGE_GUILD` permission. Returns the created [guild template](https://discord.dev/resources/guild/template#guild-template-object) object on success.
   *
   *     const guildTemplate = await HTTPClient.createGuildTemplate("324591599130509312", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  createGuildTemplate(
    guildId: Snowflake,
    data: CreateGuildTemplateJSON,
  ): Promise<CreateGuildTemplateBody> {
    return this.request(`/guilds/${guildId}/templates`, {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/guild-template#sync-guild-template
   *
   * Syncs the template to the guild's current state. Requires the `MANAGE_GUILD` permission. Returns the [guild template](https://discord.dev/resources/guild/template#guild-template-object) object on success.
   *
   *     const guildTemplate = await HTTPClient.syncGuildTemplate("184874592840450048", "test");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param templateCode https://discord.dev/resources/guild/template#guild-template-object
   */
  syncGuildTemplate(
    guildId: Snowflake,
    templateCode: string,
  ): Promise<SyncGuildTemplateBody> {
    return this.request(`/guilds/${guildId}/templates/${templateCode}`, {
      method: "PUT",
    });
  }

  /**
   * https://discord.dev/resources/guild-template#modify-guild-template
   *
   * Modifies the template's metadata. Requires the `MANAGE_GUILD` permission. Returns the [guild template](https://discord.dev/resources/guild/template#guild-template-object) object on success.
   *
   *     const guildTemplate = await HTTPClient.modifyGuildTemplate("116123924512636928", "test", { ... });
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param templateCode https://discord.dev/resources/guild/template#guild-template-object
   */
  modifyGuildTemplate(
    guildId: Snowflake,
    templateCode: string,
    data: ModifyGuildTemplateJSON,
  ): Promise<ModifyGuildTemplateBody> {
    return this.request(`/guilds/${guildId}/templates/${templateCode}`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/guild-template#delete-guild-template
   *
   * Deletes the template. Requires the `MANAGE_GUILD` permission. Returns the deleted [guild template](https://discord.dev/resources/guild/template#guild-template-object) object on success.
   *
   *     const guildTemplate = await HTTPClient.deleteGuildTemplate("258010296646369280", "test");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   * @param templateCode https://discord.dev/resources/guild/template#guild-template-object
   */
  deleteGuildTemplate(
    guildId: Snowflake,
    templateCode: string,
  ): Promise<DeleteGuildTemplateBody> {
    return this.request(`/guilds/${guildId}/templates/${templateCode}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/invite#get-invite
   *
   * Returns an [invite](https://discord.dev/resources/invite#invite-object) object for the given code.
   *
   *     const invite = await HTTPClient.getInvite("test", { ... });
   *
   * @param inviteCode https://discord.dev/resources/invite#invite-object
   */
  getInvite(inviteCode: string, query: GetInviteQuery): Promise<GetInviteBody> {
    return this.request(`/invites/${inviteCode}`, {
      query,
    });
  }

  /**
   * https://discord.dev/resources/invite#delete-invite
   *
   * Delete an invite. Requires the `MANAGE_CHANNELS` permission on the channel this invite belongs to, or `MANAGE_GUILD` to remove any invite across the guild. Returns an [invite](https://discord.dev/resources/invite#invite-object) object on success. fires a [invite delete](#docs/topics/gateway#invite-delete) Gateway event.
   *
   *     await HTTPClient.deleteInvite("test");
   *
   * @param inviteCode https://discord.dev/resources/invite#invite-object
   */
  deleteInvite(inviteCode: string, reason?: string): Promise<DeleteInviteBody> {
    return this.request(`/invites/${inviteCode}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/stage-instance#create-stage-instance
   *
   * Creates a new Stage instance associated to a Stage channel.
   *
   * Requires the user to be a moderator of the Stage channel.
   *
   *     const stageInstance = await HTTPClient.createStageInstance({ ... });
   */
  createStageInstance(
    data: CreateStageInstanceJSON,
  ): Promise<CreateStageInstanceBody> {
    return this.request("/stage-instances", {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/stage-instance#get-stage-instance
   *
   * Gets the stage instance associated with the Stage channel, if it exists.
   *
   *     const stageInstance = await HTTPClient.getStageInstance("29034218080174080");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  getStageInstance(channelId: Snowflake): Promise<GetStageInstanceBody> {
    return this.request(`/stage-instances/${channelId}`);
  }

  /**
   * https://discord.dev/resources/stage-instance#update-stage-instance
   *
   * Updates fields of an existing Stage instance.
   *
   * Requires the user to be a moderator of the Stage channel.
   *
   *     const stageInstance = await HTTPClient.updateStageInstance("146282572857475072", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  updateStageInstance(
    channelId: Snowflake,
    data: UpdateStageInstanceJSON,
  ): Promise<UpdateStageInstanceBody> {
    return this.request(`/stage-instances/${channelId}`, {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/stage-instance#delete-stage-instance
   *
   * Deletes the Stage instance.
   *
   * Requires the user to be a moderator of the Stage channel.
   *
   *     await HTTPClient.deleteStageInstance("229243498648305664");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  deleteStageInstance(channelId: Snowflake): Promise<DeleteStageInstanceBody> {
    return this.request(`/stage-instances/${channelId}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/user#get-current-user
   *
   * Returns the [user](https://discord.dev/resources/user#user-object) object of the requester's account. For OAuth2, this requires the `identify` scope, which will return the object _without_ an email, and optionally the `email` scope, which returns the object _with_ an email.
   *
   *     const user = await HTTPClient.getCurrentUser();
   */
  getCurrentUser(): Promise<GetCurrentUserBody> {
    return this.request("/users/@me");
  }

  /**
   * https://discord.dev/resources/user#get-user
   *
   * Returns a [user](https://discord.dev/resources/user#user-object) object for a given user ID.
   *
   *     const user = await HTTPClient.getUser("807145593964068864");
   *
   * @param userId https://discord.dev/resources/user#user-object
   */
  getUser(userId: Snowflake): Promise<GetUserBody> {
    return this.request(`/users/${userId}`);
  }

  /**
   * https://discord.dev/resources/user#modify-current-user
   *
   * Modify the requester's user account settings. Returns a [user](https://discord.dev/resources/user#user-object) object on success.
   *
   * > ℹ
   * > All parameters to this endpoint are optional.
   *
   *     const user = await HTTPClient.modifyCurrentUser({ ... });
   */
  modifyCurrentUser(
    data: ModifyCurrentUserJSON,
  ): Promise<ModifyCurrentUserBody> {
    return this.request("/users/@me", {
      data,
      method: "PATCH",
    });
  }

  /**
   * https://discord.dev/resources/user#get-current-user-guilds
   *
   * Returns a list of partial [guild](https://discord.dev/resources/guild#guild-object) objects the current user is a member of. Requires the `guilds` OAuth2 scope.
   *
   *     const guilds = await HTTPClient.getCurrentUserGuilds({ ... });
   */
  getCurrentUserGuilds(
    query: GetCurrentUserGuildsQuery,
  ): Promise<GetCurrentUserGuildsBody> {
    return this.request("/users/@me/guilds", {
      query,
    });
  }

  /**
   * https://discord.dev/resources/user#leave-guild
   *
   * Leave a guild. Returns a 204 empty response on success.
   *
   *     await HTTPClient.leaveGuild("26320468956938240");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  leaveGuild(guildId: Snowflake): Promise<LeaveGuildBody> {
    return this.request(`/users/@me/guilds/${guildId}`, {
      method: "DELETE",
    });
  }

  /**
   * https://discord.dev/resources/user#create-dm
   *
   * Create a new DM channel with a user. Returns a [DM channel](https://discord.dev/resources/channel#channel-object) object.
   *
   * > ⚠
   * > You should not use this endpoint to DM everyone in a server about something. DMs should generally be initiated by a user action. If you open a significant amount of DMs too quickly, your bot may be rate limited or blocked from opening new ones.
   *
   *     const channel = await HTTPClient.createDM({ ... });
   */
  createDM(data: CreateDMJSON): Promise<CreateDMBody> {
    return this.request("/users/@me/channels", {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/user#create-group-dm
   *
   * Create a new group DM channel with multiple users. Returns a [DM channel](https://discord.dev/resources/channel#channel-object) object. This endpoint was intended to be used with the now-deprecated GameBridge SDK. DMs created with this endpoint will not be shown in the Discord client
   *
   * > ⚠
   * > This endpoint is limited to 10 active group DMs.
   *
   *     const channel = await HTTPClient.createGroupDM({ ... });
   */
  createGroupDM(data: CreateGroupDMJSON): Promise<CreateGroupDMBody> {
    return this.request("/users/@me/channels", {
      data,
      method: "POST",
    });
  }

  /**
   * https://discord.dev/resources/user#get-user-connections
   *
   * Returns a list of [connection](https://discord.dev/resources/user#connection-object) objects. Requires the `connections` OAuth2 scope.
   *
   *     const connections = await HTTPClient.getUserConnections();
   */
  getUserConnections(): Promise<GetUserConnectionsBody> {
    return this.request("/users/@me/connections");
  }

  /**
   * https://discord.dev/resources/voice#list-voice-regions
   *
   * Returns an array of [voice region](https://discord.dev/resources/voice#voice-region-object) objects that can be used when creating servers.
   *
   *     const voiceRegions = await HTTPClient.listVoiceRegions();
   */
  listVoiceRegions(): Promise<ListVoiceRegionsBody> {
    return this.request("/voice/regions");
  }

  /**
   * https://discord.dev/resources/webhook#create-webhook
   *
   * Create a new webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns a [webhook](https://discord.dev/resources/webhook#webhook-object) object on success. webhook names follow our naming restrictions that can be found in our [usernames and nicknames](#docs/resources/user#usernames-and-nicknames) documentation, with the following additional stipulations:
   *
   * - Webhook names cannot be: 'clyde'
   *
   *     const webhook = await HTTPClient.createWebhook("657415524220665856", { ... });
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  createWebhook(
    channelId: Snowflake,
    data: CreateWebhookJSON,
    reason?: string,
  ): Promise<CreateWebhookBody> {
    return this.request(`/channels/${channelId}/webhooks`, {
      data,
      method: "POST",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#get-channel-webhooks
   *
   * Returns a list of channel [webhook](https://discord.dev/resources/webhook#webhook-object) objects. Requires the `MANAGE_WEBHOOKS` permission.
   *
   *     const webhooks = await HTTPClient.getChannelWebhooks("190752484434640896");
   *
   * @param channelId https://discord.dev/resources/channel#channel-object
   */
  getChannelWebhooks(channelId: Snowflake): Promise<GetChannelWebhooksBody> {
    return this.request(`/channels/${channelId}/webhooks`);
  }

  /**
   * https://discord.dev/resources/webhook#get-guild-webhooks
   *
   * Returns a list of guild [webhook](https://discord.dev/resources/webhook#webhook-object) objects. Requires the `MANAGE_WEBHOOKS` permission.
   *
   *     const webhooks = await HTTPClient.getGuildWebhooks("173832780151521280");
   *
   * @param guildId https://discord.dev/resources/guild#guild-object
   */
  getGuildWebhooks(guildId: Snowflake): Promise<GetGuildWebhooksBody> {
    return this.request(`/guilds/${guildId}/webhooks`);
  }

  /**
   * https://discord.dev/resources/webhook#get-webhook
   *
   * Returns the new [webhook](https://discord.dev/resources/webhook#webhook-object) object for the given id.
   *
   *     const webhook = await HTTPClient.getWebhook("5295692947914752");
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   */
  getWebhook(webhookId: Snowflake): Promise<GetWebhookBody> {
    return this.request(`/webhooks/${webhookId}`);
  }

  /**
   * https://discord.dev/resources/webhook#get-webhook-with-token
   *
   * Same as above, except this call does not require authentication and returns no user in the webhook object.
   *
   *     const webhook = await HTTPClient.getWebhookWithToken("255079981992902656", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4");
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  getWebhookWithToken(
    webhookId: Snowflake,
    webhookToken: string,
  ): Promise<GetWebhookWithTokenBody> {
    return this.request(`/webhooks/${webhookId}/${webhookToken}`);
  }

  /**
   * https://discord.dev/resources/webhook#modify-webhook
   *
   * Modify a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated [webhook](https://discord.dev/resources/webhook#webhook-object) object on success.
   *
   * > ℹ
   * > All parameters to this endpoint are optional
   *
   *     const webhook = await HTTPClient.modifyWebhook("203535192411865088", { ... });
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   */
  modifyWebhook(
    webhookId: Snowflake,
    data: ModifyWebhookJSON,
    reason?: string,
  ): Promise<ModifyWebhookBody> {
    return this.request(`/webhooks/${webhookId}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#modify-webhook-with-token
   *
   * Same as above, except this call does not require authentication, does not accept a `channel_id` parameter in the body, and does not return a user in the webhook object.
   *
   *     const webhook = await HTTPClient.modifyWebhookWithToken("595525632499122176", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... });
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  modifyWebhookWithToken(
    webhookId: Snowflake,
    webhookToken: string,
    data: ModifyWebhookWithTokenJSON,
    reason?: string,
  ): Promise<ModifyWebhookWithTokenBody> {
    return this.request(`/webhooks/${webhookId}/${webhookToken}`, {
      data,
      method: "PATCH",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#delete-webhook
   *
   * Delete a webhook permanently. Requires the `MANAGE_WEBHOOKS` permission. Returns a 204 NO CONTENT response on success.
   *
   *     await HTTPClient.deleteWebhook("245322393218711552");
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   */
  deleteWebhook(
    webhookId: Snowflake,
    reason?: string,
  ): Promise<DeleteWebhookBody> {
    return this.request(`/webhooks/${webhookId}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#delete-webhook-with-token
   *
   * Same as above, except this call does not require authentication.
   *
   *     await HTTPClient.deleteWebhookWithToken("332458661429379072", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4");
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  deleteWebhookWithToken(
    webhookId: Snowflake,
    webhookToken: string,
    reason?: string,
  ): Promise<DeleteWebhookWithTokenBody> {
    return this.request(`/webhooks/${webhookId}/${webhookToken}`, {
      method: "DELETE",
      reason,
    });
  }

  /**
   * https://discord.dev/resources/webhook#execute-webhook
   *
   * > ℹ
   * > Note that when sending a message, you must provide a value for at **least one of** `content`, `embeds`, or `file`.
   *
   * > ℹ
   * > For a `file` attachment, the `Content-Disposition` subpart header MUST contain a `filename` parameter.
   *
   * > ⚠
   * > This endpoint supports both `application/json` and `multipart/form-data` bodies. When uploading files the `multipart/form-data` content type must be used.
   * > Note that in multipart form data, the `embed` and `allowed_mentions` fields cannot be used. You can pass a stringified JSON body as a form value as `payload_json` instead.
   * > **If you supply a `payload_json` form value, all fields except for `file` fields will be ignored in the form data**.
   *
   *     const message = await HTTPClient.executeWebhook("207057295606022144", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... }, { ... });
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeWebhook(
    webhookId: Snowflake,
    webhookToken: string,
    data: ExecuteWebhookJSON,
    query: ExecuteWebhookQuery,
  ): Promise<ExecuteWebhookBody> {
    return this.request(`/webhooks/${webhookId}/${webhookToken}`, {
      data,
      method: "POST",
      query,
    });
  }

  /**
   * https://discord.dev/resources/webhook#execute-slack-compatible-webhook
   *
   * Refer to [Slack's documentation](https://api.slack.com/incoming-webhooks) for more information. We do not support Slack's `channel`, `icon_emoji`, `mrkdwn`, or `mrkdwn_in` properties.
   *
   *     const message = await HTTPClient.executeSlackCompatibleWebhook("240858068009615360", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... });
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeSlackCompatibleWebhook(
    webhookId: Snowflake,
    webhookToken: string,
    query: ExecuteSlackCompatibleWebhookQuery,
  ): Promise<ExecuteSlackCompatibleWebhookBody> {
    return this.request(`/webhooks/${webhookId}/${webhookToken}/slack`, {
      method: "POST",
      query,
    });
  }

  /**
   * https://discord.dev/resources/webhook#execute-github-compatible-webhook
   *
   * Add a new webhook to your GitHub repo (in the repo's settings), and use this endpoint as the "Payload URL." You can choose what events your Discord channel receives by choosing the "Let me select individual events" option and selecting individual events for the new webhook you're configuring.
   *
   *     const message = await HTTPClient.executeGitHubCompatibleWebhook("716600522680827904", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", { ... });
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   */
  executeGitHubCompatibleWebhook(
    webhookId: Snowflake,
    webhookToken: string,
    query: ExecuteGitHubCompatibleWebhookQuery,
  ): Promise<ExecuteGitHubCompatibleWebhookBody> {
    return this.request(`/webhooks/${webhookId}/${webhookToken}/github`, {
      method: "POST",
      query,
    });
  }

  /**
   * https://discord.dev/resources/webhook#get-webhook-message
   *
   * Returns a previously-sent webhook message from the same token. Returns a [message](https://discord.dev/resources/channel#message-object) object on success.
   *
   *     const message = await HTTPClient.getWebhookMessage("169173484641976320", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", "41903598514208768");
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  getWebhookMessage(
    webhookId: Snowflake,
    webhookToken: string,
    messageId: Snowflake,
  ): Promise<GetWebhookMessageBody> {
    return this.request(
      `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
    );
  }

  /**
   * https://discord.dev/resources/webhook#edit-webhook-message
   *
   * Edits a previously-sent webhook message from the same token. Returns a [message](https://discord.dev/resources/channel#message-object) object on success.
   *
   * When the `content` field is edited, the `mentions` array in the message object will be reconstructed from scratch based on the new content. The `allowed_mentions` field of the edit request controls how this happens. If there is no explicit `allowed_mentions` in the edit request, the content will be parsed with _default_ allowances, that is, without regard to whether or not an `allowed_mentions` was present in the request that originally created the message.
   *
   * > ℹ
   * > For a `file` attachment, the `Content-Disposition` subpart header MUST contain a `filename` parameter.
   *
   * > ⚠
   * > This endpoint supports both `application/json` and `multipart/form-data` bodies. When uploading files the `multipart/form-data` content type must be used.
   * > Note that in multipart form data, the `embed`, `allowed_mentions`, and `attachments` fields cannot be used. You can pass a stringified JSON body as a form value as `payload_json` instead.
   * > **If you supply a `payload_json` form value, all fields except for `file` fields will be ignored in the form data**.
   *
   * > ℹ
   * > All parameters to this endpoint are optional and nullable.
   *
   *     const message = await HTTPClient.editWebhookMessage("339138596353081344", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", "667245033350496256", { ... });
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  editWebhookMessage(
    webhookId: Snowflake,
    webhookToken: string,
    messageId: Snowflake,
    data: EditWebhookMessageJSON,
  ): Promise<EditWebhookMessageBody> {
    return this.request(
      `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
      {
        data,
        method: "PATCH",
      },
    );
  }

  /**
   * https://discord.dev/resources/webhook#delete-webhook-message
   *
   * Deletes a message that was created by the webhook. Returns a 204 NO CONTENT response on success.
   *
   *     await HTTPClient.deleteWebhookMessage("153105832177827840", "MjM4NDk0NzU2NTIxMzc3Nzky.CunGFQ.wUILz7z6HoJzVeq6pyHPmVgQgV4", "175920662584492032");
   *
   * @param webhookId https://discord.dev/resources/webhook#webhook-object
   * @param webhookToken https://discord.dev/resources/webhook#webhook-object
   * @param messageId https://discord.dev/resources/channel#message-object
   */
  deleteWebhookMessage(
    webhookId: Snowflake,
    webhookToken: string,
    messageId: Snowflake,
  ): Promise<DeleteWebhookMessageBody> {
    return this.request(
      `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
      {
        method: "DELETE",
      },
    );
  }

  /**
   * https://discord.dev/topics/gateway#get-gateway
   *
   * > ℹ
   * > This endpoint does not require authentication.
   *
   * Returns an object with a single valid WSS URL, which the client can use for [Connecting](https://discord.dev/topics/gateway#connecting). Clients **should** cache this value and only call this endpoint to retrieve a new URL if they are unable to properly establish a connection using the cached version of the URL.
   *
   *     const gateway = await HTTPClient.getGateway();
   */
  getGateway(): Promise<GetGatewayBody> {
    return this.request("/gateway");
  }

  /**
   * https://discord.dev/topics/gateway#get-gateway-bot
   *
   * > ⚠
   * > This endpoint requires authentication using a valid bot token.
   *
   * Returns an object based on the information in [Get Gateway](https://discord.dev/topics/gateway#get-gateway), plus additional metadata that can help during the operation of large or [sharded](#docs/topics/gateway#sharding) bots. unlike the [get gateway](#docs/topics/gateway#get-gateway), this route should not be cached for extended periods of time as the value is not guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.
   *
   *     const gatewayBot = await HTTPClient.getGatewayBot();
   */
  getGatewayBot(): Promise<GetGatewayBotBody> {
    return this.request("/gateway/bot");
  }

  /**
   * https://discord.dev/topics/oauth2#get-current-bot-application-information
   *
   * Returns the bot's [application](https://discord.dev/resources/application#application-object) object without `flags`.
   *
   *     const application = await HTTPClient.getCurrentBotApplicationInformation();
   */
  getCurrentBotApplicationInformation(): Promise<
    GetCurrentBotApplicationInformationBody
  > {
    return this.request("/oauth2/applications/@me");
  }

  /**
   * https://discord.dev/topics/oauth2#get-current-authorization-information
   *
   * Returns info about the current authorization. Requires authentication with a bearer token.
   *
   *     const currentAuthorizationInformation = await HTTPClient.getCurrentAuthorizationInformation();
   */
  getCurrentAuthorizationInformation(): Promise<
    GetCurrentAuthorizationInformationBody
  > {
    return this.request("/oauth2/@me");
  }
}
