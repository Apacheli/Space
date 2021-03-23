import {
  GatewayApplicationCommandCreateDispatchData,
  GatewayApplicationCommandDeleteDispatchData,
  GatewayApplicationCommandUpdateDispatchData,
  GatewayChannelCreateDispatchData,
  GatewayChannelDeleteDispatchData,
  GatewayChannelPinsUpdateDispatchData,
  GatewayChannelUpdateDispatchData,
  GatewayGuildBanAddDispatchData,
  GatewayGuildBanRemoveDispatchData,
  GatewayGuildCreateDispatchData,
  GatewayGuildDeleteDispatchData,
  GatewayGuildEmojisUpdateDispatchData,
  GatewayGuildIntegrationsUpdateDispatchData,
  GatewayGuildMemberAddDispatchData,
  GatewayGuildMemberRemoveDispatchData,
  GatewayGuildMembersChunkDispatchData,
  GatewayGuildMemberUpdateDispatchData,
  GatewayGuildRoleCreateDispatchData,
  GatewayGuildRoleDeleteDispatchData,
  GatewayGuildRoleUpdateDispatchData,
  GatewayGuildUpdateDispatchData,
  GatewayInteractionCreateDispatchData,
  GatewayInviteCreateDispatchData,
  GatewayInviteDeleteDispatchData,
  GatewayMessageCreateDispatchData,
  GatewayMessageDeleteBulkDispatchData,
  GatewayMessageDeleteDispatchData,
  GatewayMessageReactionAddDispatchData,
  GatewayMessageReactionRemoveAllDispatchData,
  GatewayMessageReactionRemoveDispatchData,
  GatewayMessageReactionRemoveEmojiDispatchData,
  GatewayMessageUpdateDispatchData,
  GatewayPresenceUpdateDispatchData,
  GatewayReadyDispatchData,
  // GatewayResumedDispatchData,
  GatewayTypingStartDispatchData,
  GatewayUserUpdateDispatchData,
  GatewayVoiceServerUpdateDispatchData,
  GatewayVoiceStateUpdateDispatchData,
  GatewayWebhooksUpdateDispatchData,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Client from "./Client.ts";

export const onApplicationCommandCreate = (
  client: Client,
  data: GatewayApplicationCommandCreateDispatchData,
) => {
};

export const onApplicationCommandUpdate = (
  client: Client,
  data: GatewayApplicationCommandUpdateDispatchData,
) => {
};

export const onApplicationCommandDelete = (
  client: Client,
  data: GatewayApplicationCommandDeleteDispatchData,
) => {
};

export const onChannelCreate = (
  client: Client,
  data: GatewayChannelCreateDispatchData,
) => {
};

export const onChannelDelete = (
  client: Client,
  data: GatewayChannelDeleteDispatchData,
) => {
};

export const onChannelPinsUpdate = (
  client: Client,
  data: GatewayChannelPinsUpdateDispatchData,
) => {
};

export const onChannelUpdate = (
  client: Client,
  data: GatewayChannelUpdateDispatchData,
) => {
};

export const onGuildBanAdd = (
  client: Client,
  data: GatewayGuildBanAddDispatchData,
) => {
};

export const onGuildBanRemove = (
  client: Client,
  data: GatewayGuildBanRemoveDispatchData,
) => {
};

export const onGuildCreate = (
  client: Client,
  data: GatewayGuildCreateDispatchData,
) => {
};

export const onGuildDelete = (
  client: Client,
  data: GatewayGuildDeleteDispatchData,
) => {
};

export const onGuildEmojisUpdate = (
  client: Client,
  data: GatewayGuildEmojisUpdateDispatchData,
) => {
};

export const onGuildIntegrationsUpdate = (
  client: Client,
  data: GatewayGuildIntegrationsUpdateDispatchData,
) => {
};

export const onGuildMemberAdd = (
  client: Client,
  data: GatewayGuildMemberAddDispatchData,
) => {
};

export const onGuildMemberRemove = (
  client: Client,
  data: GatewayGuildMemberRemoveDispatchData,
) => {
};

export const onGuildMembersChunk = (
  client: Client,
  data: GatewayGuildMembersChunkDispatchData,
) => {
};

export const onGuildMemberUpdate = (
  client: Client,
  data: GatewayGuildMemberUpdateDispatchData,
) => {
};

export const onGuildRoleCreate = (
  client: Client,
  data: GatewayGuildRoleCreateDispatchData,
) => {
};

export const onGuildRoleDelete = (
  client: Client,
  data: GatewayGuildRoleDeleteDispatchData,
) => {
};

export const onGuildRoleUpdate = (
  client: Client,
  data: GatewayGuildRoleUpdateDispatchData,
) => {
};

export const onGuildUpdate = (
  client: Client,
  data: GatewayGuildUpdateDispatchData,
) => {
};

export const onInteractionCreate = (
  client: Client,
  data: GatewayInteractionCreateDispatchData,
) => {
};

export const onInviteCreate = (
  client: Client,
  data: GatewayInviteCreateDispatchData,
) => {
};

export const onInviteDelete = (
  client: Client,
  data: GatewayInviteDeleteDispatchData,
) => {
};

export const onMessageCreate = (
  client: Client,
  data: GatewayMessageCreateDispatchData,
) => {
};

export const onMessageDelete = (
  client: Client,
  data: GatewayMessageDeleteDispatchData,
) => {
};

export const onMessageDeleteBulk = (
  client: Client,
  data: GatewayMessageDeleteBulkDispatchData,
) => {
};

export const onMessageReactionAdd = (
  client: Client,
  data: GatewayMessageReactionAddDispatchData,
) => {
};

export const onMessageReactionRemove = (
  client: Client,
  data: GatewayMessageReactionRemoveDispatchData,
) => {
};

export const onMessageReactionRemoveAll = (
  client: Client,
  data: GatewayMessageReactionRemoveAllDispatchData,
) => {
};

export const onMessageReactionRemoveEmoji = (
  client: Client,
  data: GatewayMessageReactionRemoveEmojiDispatchData,
) => {
};

export const onMessageUpdate = (
  client: Client,
  data: GatewayMessageUpdateDispatchData,
) => {
};

export const onPresenceUpdate = (
  client: Client,
  data: GatewayPresenceUpdateDispatchData,
) => {
};

export const onReady = (client: Client, data: GatewayReadyDispatchData) => {
};

export const onResumed = (
  client: Client,
  data: never, // GatewayResumedDispatchData
) => {
};

export const onTypingStart = (
  client: Client,
  data: GatewayTypingStartDispatchData,
) => {
};

export const onUserUpdate = (
  client: Client,
  data: GatewayUserUpdateDispatchData,
) => {
};

export const onVoiceServerUpdate = (
  client: Client,
  data: GatewayVoiceServerUpdateDispatchData,
) => {
};

export const onVoiceStateUpdate = (
  client: Client,
  data: GatewayVoiceStateUpdateDispatchData,
) => {
};

export const onWebhooksUpdate = (
  client: Client,
  data: GatewayWebhooksUpdateDispatchData,
) => {
};
