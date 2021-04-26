import type {
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
} from "./deps.ts";
import type { Client } from "./mod.ts";
import { channelFromType, Message } from "../structures/mod.ts";
import type { RequiredKeys } from "../util/mod.ts";

export const onApplicationCommandCreate = (
  _client: Client,
  _data: GatewayApplicationCommandCreateDispatchData,
) => {
};

export const onApplicationCommandUpdate = (
  _client: Client,
  _data: GatewayApplicationCommandUpdateDispatchData,
) => {
};

export const onApplicationCommandDelete = (
  _client: Client,
  _data: GatewayApplicationCommandDeleteDispatchData,
) => {
};

export const onChannelCreate = async (
  client: Client,
  data: GatewayChannelCreateDispatchData,
) => {
  const channel = channelFromType(data, client);
  return data.guild_id
    ? (await client.guilds?.get(data.guild_id))
      ?.channels?.add(channel)
    : channel;
};

export const onChannelDelete = async (
  client: Client,
  data: GatewayChannelDeleteDispatchData,
) => {
  return data.guild_id
    ? (await client.guilds?.get(data.guild_id))
      ?.channels?.remove(data.id)
    : data;
};

export const onChannelPinsUpdate = (
  _client: Client,
  _data: GatewayChannelPinsUpdateDispatchData,
) => {
};

export const onChannelUpdate = async (
  client: Client,
  data: GatewayChannelUpdateDispatchData,
) => {
  return data.guild_id
    ? (await client.guilds?.get(data.guild_id))
      ?.channels?.update(data)
    : data;
};

export const onGuildBanAdd = (
  client: Client,
  data: GatewayGuildBanAddDispatchData,
) => {
  return onGuildMemberRemove(client, data);
};

export const onGuildBanRemove = (
  _client: Client,
  _data: GatewayGuildBanRemoveDispatchData,
) => {
};

export const onGuildCreate = async (
  client: Client,
  data: GatewayGuildCreateDispatchData,
) => {
  return await client.guilds?.has(data.id)
    ? client.guilds?.update(data)
    : client.guilds?.add(data);
};

export const onGuildDelete = (
  client: Client,
  data: GatewayGuildDeleteDispatchData,
) => {
  return (data.unavailable
    ? client.guilds?.update(data)
    : client.guilds?.remove(data.id)) ?? data;
};

export const onGuildEmojisUpdate = (
  _client: Client,
  _data: GatewayGuildEmojisUpdateDispatchData,
) => {
};

export const onGuildIntegrationsUpdate = (
  _client: Client,
  _data: GatewayGuildIntegrationsUpdateDispatchData,
) => {
};

export const onGuildMemberAdd = async (
  client: Client,
  data: RequiredKeys<GatewayGuildMemberAddDispatchData, "user">,
) => {
  return (await client.guilds?.get(data.guild_id))
    ?.members?.add({ id: data.user.id, ...data }) ?? data;
};

export const onGuildMemberRemove = async (
  client: Client,
  data: GatewayGuildMemberRemoveDispatchData,
) => {
  return (await client.guilds?.get(data.guild_id))
    ?.members?.remove(data.user.id) ?? data;
};

export const onGuildMembersChunk = (
  _client: Client,
  _data: GatewayGuildMembersChunkDispatchData,
) => {
};

export const onGuildMemberUpdate = async (
  client: Client,
  data: RequiredKeys<GatewayGuildMemberUpdateDispatchData, "user">,
) => {
  return (await client.guilds?.get(data.guild_id))
    ?.members?.update({ id: data.user.id, ...data }) ?? data;
};

export const onGuildRoleCreate = async (
  client: Client,
  data: GatewayGuildRoleCreateDispatchData,
) => {
  return (await client.guilds?.get(data.guild_id))
    ?.roles?.add(data.role) ?? data;
};

export const onGuildRoleDelete = async (
  client: Client,
  data: GatewayGuildRoleDeleteDispatchData,
) => {
  return (await client.guilds?.get(data.guild_id))
    ?.roles?.remove(data.role_id) ?? data;
};

export const onGuildRoleUpdate = (
  _client: Client,
  _data: GatewayGuildRoleUpdateDispatchData,
) => {
};

export const onGuildUpdate = (
  client: Client,
  data: GatewayGuildUpdateDispatchData,
) => {
  return client.guilds?.update(data) ?? data;
};

export const onInteractionCreate = (
  _client: Client,
  _data: GatewayInteractionCreateDispatchData,
) => {
};

export const onInviteCreate = (
  _client: Client,
  _data: GatewayInviteCreateDispatchData,
) => {
};

export const onInviteDelete = (
  _client: Client,
  _data: GatewayInviteDeleteDispatchData,
) => {
};

export const onMessageCreate = (
  client: Client,
  data: GatewayMessageCreateDispatchData,
) => {
  const message = new Message(data, client);
  message.update(data);
  return message;
};

export const onMessageDelete = (
  _client: Client,
  _data: GatewayMessageDeleteDispatchData,
) => {
};

export const onMessageDeleteBulk = (
  _client: Client,
  _data: GatewayMessageDeleteBulkDispatchData,
) => {
};

export const onMessageReactionAdd = (
  _client: Client,
  _data: GatewayMessageReactionAddDispatchData,
) => {
};

export const onMessageReactionRemove = (
  _client: Client,
  _data: GatewayMessageReactionRemoveDispatchData,
) => {
};

export const onMessageReactionRemoveAll = (
  _client: Client,
  _data: GatewayMessageReactionRemoveAllDispatchData,
) => {
};

export const onMessageReactionRemoveEmoji = (
  _client: Client,
  _data: GatewayMessageReactionRemoveEmojiDispatchData,
) => {
};

export const onMessageUpdate = (
  _client: Client,
  _data: GatewayMessageUpdateDispatchData,
) => {
};

export const onPresenceUpdate = (
  _client: Client,
  _data: GatewayPresenceUpdateDispatchData,
) => {
};

export const onReady = async (
  client: Client,
  data: GatewayReadyDispatchData,
) => {
  client.application ??= data.application;
  return client.user?.update(data.user) ??
    (client.user ??= await client.users?.add(data.user)) ?? data.user;
};

export const onResumed = (
  _client: Client,
  _data: never, // GatewayResumedDispatchData
) => {
};

export const onTypingStart = (
  _client: Client,
  _data: GatewayTypingStartDispatchData,
) => {
};

export const onUserUpdate = (
  _client: Client,
  _data: GatewayUserUpdateDispatchData,
) => {
};

export const onVoiceServerUpdate = (
  _client: Client,
  _data: GatewayVoiceServerUpdateDispatchData,
) => {
};

export const onVoiceStateUpdate = (
  _client: Client,
  _data: GatewayVoiceStateUpdateDispatchData,
) => {
};

export const onWebhooksUpdate = (
  _client: Client,
  __data: GatewayWebhooksUpdateDispatchData,
) => {
};
