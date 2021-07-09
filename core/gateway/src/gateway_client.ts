import type {
  GatewayVersions,
  GetGatewayBotBody,
  IdentifyPayloadData as _c,
} from "../../types/src/topics/gateway.ts";
import { GatewayEvents } from "../../types/src/topics/gateway.ts";
import { AsyncEventTarget } from "../../util/src/async_event_target.ts";
import { RateLimitBucket } from "../../util/src/rate_limit_bucket.ts";
import type { PartialKeys } from "../../util/src/types.ts";
import {
  GATEWAY_VERSION as _a,
  SHARD_CONCURRENCY_DELAY as _b,
} from "./constants.ts";
import { Shard } from "./shard.ts";

/** Gateway client connect data */
export interface GatewayClientConnectData
  extends PartialKeys<GetGatewayBotBody, "session_start_limit"> {
  /** The index to start the iteration shard spawning process */
  firstShardId?: number;
  /** The shard spawning terminator index */
  lastShardId?: number;
  /** Gateway version */
  version?: GatewayVersions;
}

/** Gateway client */
export class GatewayClient extends AsyncEventTarget {
  bucket?: RateLimitBucket;
  /** Shards controlled by the gateway client */
  shards: Shard[] = [];

  /**
   * @param token Authentication bot token
   */
  constructor(public token: string) {
    super();
  }

  /** Connect shards */
  connect(_data: GatewayClientConnectData) {
  }

  /** Disconnect every shard */
  disconnect() {
  }

  /** Disconnect and connect every shard in sequential order */
  reconnect() {
  }

  /** Connect a shard */
  connectShard() {
  }

  /** Create a shard  */
  createShard() {
  }

  /** Disconnect a shard */
  disconnectShard() {
  }

  /** Reconnect a shard */
  reconnectShard() {
  }

  //#region gateway event listeners
  onReady() {
    return this.listen(GatewayEvents.Ready);
  }

  onResumed() {
    return this.listen(GatewayEvents.Resumed);
  }

  onApplicationCommandCreate() {
    return this.listen(GatewayEvents.ApplicationCommandCreate);
  }

  onApplicationCommandUpdate() {
    return this.listen(GatewayEvents.ApplicationCommandUpdate);
  }

  onApplicationCommandDelete() {
    return this.listen(GatewayEvents.ApplicationCommandDelete);
  }

  onChannelCreate() {
    return this.listen(GatewayEvents.ChannelCreate);
  }

  onChannelUpdate() {
    return this.listen(GatewayEvents.ChannelUpdate);
  }

  onChannelDelete() {
    return this.listen(GatewayEvents.ChannelDelete);
  }

  onChannelPinsUpdate() {
    return this.listen(GatewayEvents.ChannelPinsUpdate);
  }

  onThreadCreate() {
    return this.listen(GatewayEvents.ThreadCreate);
  }

  onThreadUpdate() {
    return this.listen(GatewayEvents.ThreadUpdate);
  }

  onThreadDelete() {
    return this.listen(GatewayEvents.ThreadDelete);
  }

  onThreadListSync() {
    return this.listen(GatewayEvents.ThreadListSync);
  }

  onThreadMemberUpdate() {
    return this.listen(GatewayEvents.ThreadMemberUpdate);
  }

  onThreadMembersUpdate() {
    return this.listen(GatewayEvents.ThreadMembersUpdate);
  }

  onGuildCreate() {
    return this.listen(GatewayEvents.GuildCreate);
  }

  onGuildUpdate() {
    return this.listen(GatewayEvents.GuildUpdate);
  }

  onGuildDelete() {
    return this.listen(GatewayEvents.GuildDelete);
  }

  onGuildBanAdd() {
    return this.listen(GatewayEvents.GuildBanAdd);
  }

  onGuildBanRemove() {
    return this.listen(GatewayEvents.GuildBanRemove);
  }

  onGuildEmojisUpdate() {
    return this.listen(GatewayEvents.GuildEmojisUpdate);
  }

  onGuildIntegrationsUpdate() {
    return this.listen(GatewayEvents.GuildIntegrationsUpdate);
  }

  onGuildMemberAdd() {
    return this.listen(GatewayEvents.GuildMemberAdd);
  }

  onGuildMemberRemove() {
    return this.listen(GatewayEvents.GuildMemberRemove);
  }

  onGuildMemberUpdate() {
    return this.listen(GatewayEvents.GuildMemberUpdate);
  }

  onGuildMembersChunk() {
    return this.listen(GatewayEvents.GuildMembersChunk);
  }

  onGuildRoleCreate() {
    return this.listen(GatewayEvents.GuildRoleCreate);
  }

  onGuildRoleUpdate() {
    return this.listen(GatewayEvents.GuildRoleUpdate);
  }

  onGuildRoleDelete() {
    return this.listen(GatewayEvents.GuildRoleDelete);
  }

  onIntegrationCreate() {
    return this.listen(GatewayEvents.IntegrationCreate);
  }

  onIntegrationUpdate() {
    return this.listen(GatewayEvents.IntegrationUpdate);
  }

  onIntegrationDelete() {
    return this.listen(GatewayEvents.IntegrationDelete);
  }

  onInteractionCreate() {
    return this.listen(GatewayEvents.InteractionCreate);
  }

  onInviteCreate() {
    return this.listen(GatewayEvents.InviteCreate);
  }

  onInviteDelete() {
    return this.listen(GatewayEvents.InviteDelete);
  }

  onMessageCreate() {
    return this.listen(GatewayEvents.MessageCreate);
  }

  onMessageUpdate() {
    return this.listen(GatewayEvents.MessageUpdate);
  }

  onMessageDelete() {
    return this.listen(GatewayEvents.MessageDelete);
  }

  onMessageDeleteBulk() {
    return this.listen(GatewayEvents.MessageDeleteBulk);
  }

  onMessageReactionAdd() {
    return this.listen(GatewayEvents.MessageReactionAdd);
  }

  onMessageReactionRemove() {
    return this.listen(GatewayEvents.MessageReactionRemove);
  }

  onMessageReactionRemoveAll() {
    return this.listen(GatewayEvents.MessageReactionRemoveAll);
  }

  onMessageReactionRemoveEmoji() {
    return this.listen(GatewayEvents.MessageReactionRemoveEmoji);
  }

  onPresenceUpdate() {
    return this.listen(GatewayEvents.PresenceUpdate);
  }

  onStageInstanceCreate() {
    return this.listen(GatewayEvents.StageInstanceCreate);
  }

  onStageInstanceDelete() {
    return this.listen(GatewayEvents.StageInstanceDelete);
  }

  onStageInstanceUpdate() {
    return this.listen(GatewayEvents.StageInstanceUpdate);
  }

  onTypingStart() {
    return this.listen(GatewayEvents.TypingStart);
  }

  onUserUpdate() {
    return this.listen(GatewayEvents.UserUpdate);
  }

  onVoiceStateUpdate() {
    return this.listen(GatewayEvents.VoiceStateUpdate);
  }

  onVoiceServerUpdate() {
    return this.listen(GatewayEvents.VoiceServerUpdate);
  }

  onWebhooksUpdate() {
    return this.listen(GatewayEvents.WebhooksUpdate);
  }
  //#endregion gateway event listeners
}
