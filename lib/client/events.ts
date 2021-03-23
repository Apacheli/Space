import {
  GatewayApplicationCommandCreateDispatch,
  GatewayApplicationCommandDeleteDispatch,
  GatewayApplicationCommandUpdateDispatch,
  GatewayChannelCreateDispatch,
  GatewayChannelDeleteDispatch,
  GatewayChannelPinsUpdateDispatch,
  GatewayChannelUpdateDispatch,
  GatewayGuildBanAddDispatch,
  GatewayGuildBanRemoveDispatch,
  GatewayGuildCreateDispatch,
  GatewayGuildDeleteDispatch,
  GatewayGuildEmojisUpdateDispatch,
  GatewayGuildIntegrationsUpdateDispatch,
  GatewayGuildMemberAddDispatch,
  GatewayGuildMemberRemoveDispatch,
  GatewayGuildMembersChunkDispatch,
  GatewayGuildMemberUpdateDispatch,
  GatewayGuildRoleCreateDispatch,
  GatewayGuildRoleDeleteDispatch,
  GatewayGuildRoleUpdateDispatch,
  GatewayGuildUpdateDispatch,
  GatewayInteractionCreateDispatch,
  GatewayInviteCreateDispatch,
  GatewayInviteDeleteDispatch,
  GatewayMessageCreateDispatch,
  GatewayMessageDeleteBulkDispatch,
  GatewayMessageDeleteDispatch,
  GatewayMessageReactionAddDispatch,
  GatewayMessageReactionRemoveAllDispatch,
  GatewayMessageReactionRemoveDispatch,
  GatewayMessageReactionRemoveEmojiDispatch,
  GatewayMessageUpdateDispatch,
  GatewayPresenceUpdateDispatch,
  GatewayReadyDispatch,
  GatewayResumedDispatch,
  GatewayTypingStartDispatch,
  GatewayUserUpdateDispatch,
  GatewayVoiceServerUpdateDispatch,
  GatewayVoiceStateUpdateDispatch,
  GatewayWebhooksUpdateDispatch,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Client from "./Client.ts";

export const onApplicationCommandCreate = (
  client: Client,
  data: GatewayApplicationCommandCreateDispatch,
) => {
};

export const onApplicationCommandUpdate = (
  client: Client,
  data: GatewayApplicationCommandUpdateDispatch,
) => {
};

export const onApplicationCommandDelete = (
  client: Client,
  data: GatewayApplicationCommandDeleteDispatch,
) => {
};

export const onChannelCreate = (
  client: Client,
  data: GatewayChannelCreateDispatch,
) => {
};

export const onChannelDelete = (
  client: Client,
  data: GatewayChannelDeleteDispatch,
) => {
};

export const onChannelPinsUpdate = (
  client: Client,
  data: GatewayChannelPinsUpdateDispatch,
) => {
};

export const onChannelUpdate = (
  client: Client,
  data: GatewayChannelUpdateDispatch,
) => {
};

export const onGuildBanAdd = (
  client: Client,
  data: GatewayGuildBanAddDispatch,
) => {
};

export const onGuildBanRemove = (
  client: Client,
  data: GatewayGuildBanRemoveDispatch,
) => {
};

export const onGuildCreate = (
  client: Client,
  data: GatewayGuildCreateDispatch,
) => {
};

export const onGuildDelete = (
  client: Client,
  data: GatewayGuildDeleteDispatch,
) => {
};

export const onGuildEmojisUpdate = (
  client: Client,
  data: GatewayGuildEmojisUpdateDispatch,
) => {
};

export const onGuildIntegrationsUpdate = (
  client: Client,
  data: GatewayGuildIntegrationsUpdateDispatch,
) => {
};

export const onGuildMemberAdd = (
  client: Client,
  data: GatewayGuildMemberAddDispatch,
) => {
};

export const onGuildMemberRemove = (
  client: Client,
  data: GatewayGuildMemberRemoveDispatch,
) => {
};

export const onGuildMembersChunk = (
  client: Client,
  data: GatewayGuildMembersChunkDispatch,
) => {
};

export const onGuildMemberUpdate = (
  client: Client,
  data: GatewayGuildMemberUpdateDispatch,
) => {
};

export const onGuildRoleCreate = (
  client: Client,
  data: GatewayGuildRoleCreateDispatch,
) => {
};

export const onGuildRoleDelete = (
  client: Client,
  data: GatewayGuildRoleDeleteDispatch,
) => {
};

export const onGuildRoleUpdate = (
  client: Client,
  data: GatewayGuildRoleUpdateDispatch,
) => {
};

export const onGuildUpdate = (
  client: Client,
  data: GatewayGuildUpdateDispatch,
) => {
};

export const onInteractionCreate = (
  client: Client,
  data: GatewayInteractionCreateDispatch,
) => {
};

export const onInviteCreate = (
  client: Client,
  data: GatewayInviteCreateDispatch,
) => {
};

export const onInviteDelete = (
  client: Client,
  data: GatewayInviteDeleteDispatch,
) => {
};

export const onMessageCreate = (
  client: Client,
  data: GatewayMessageCreateDispatch,
) => {
};

export const onMessageDelete = (
  client: Client,
  data: GatewayMessageDeleteDispatch,
) => {
};

export const onMessageDeleteBulk = (
  client: Client,
  data: GatewayMessageDeleteBulkDispatch,
) => {
};

export const onMessageReactionAdd = (
  client: Client,
  data: GatewayMessageReactionAddDispatch,
) => {
};

export const onMessageReactionRemove = (
  client: Client,
  data: GatewayMessageReactionRemoveDispatch,
) => {
};

export const onMessageReactionRemoveAll = (
  client: Client,
  data: GatewayMessageReactionRemoveAllDispatch,
) => {
};

export const onMessageReactionRemoveEmoji = (
  client: Client,
  data: GatewayMessageReactionRemoveEmojiDispatch,
) => {
};

export const onMessageUpdate = (
  client: Client,
  data: GatewayMessageUpdateDispatch,
) => {
};

export const onPresenceUpdate = (
  client: Client,
  data: GatewayPresenceUpdateDispatch,
) => {
};

export const onReady = (client: Client, data: GatewayReadyDispatch) => {
};

export const onResumed = (client: Client, data: GatewayResumedDispatch) => {
};

export const onTypingStart = (
  client: Client,
  data: GatewayTypingStartDispatch,
) => {
};

export const onUserUpdate = (
  client: Client,
  data: GatewayUserUpdateDispatch,
) => {
};

export const onVoiceServerUpdate = (
  client: Client,
  data: GatewayVoiceServerUpdateDispatch,
) => {
};

export const onVoiceStateUpdate = (
  client: Client,
  data: GatewayVoiceStateUpdateDispatch,
) => {
};

export const onWebhooksUpdate = (
  client: Client,
  data: GatewayWebhooksUpdateDispatch,
) => {
};
