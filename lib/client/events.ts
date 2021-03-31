import {
  ChannelType,
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
} from "../deps.ts";
import { Client } from "./mod.ts";
import { fromType, Member } from "../structs/mod.ts";
import { RequiredKeys } from "../util/mod.ts";

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

export const onChannelCreate = async (
  client: Client,
  data: GatewayChannelCreateDispatchData,
) => {
  const channel = fromType(data, client);
  if (data.guild_id) {
    const guild = await client.guilds.get(data.guild_id);
    // @ts-ignore: fix later
    return guild?.channels.add(channel);
  }
  return channel;
};

export const onChannelDelete = async (
  client: Client,
  data: GatewayChannelDeleteDispatchData,
) => {
  if (data.guild_id) {
    const guild = await client.guilds.get(data.guild_id);
    return guild?.channels.remove(data.id);
  }
  return data;
};

export const onChannelPinsUpdate = (
  client: Client,
  data: GatewayChannelPinsUpdateDispatchData,
) => {
};

export const onChannelUpdate = async (
  client: Client,
  data: GatewayChannelUpdateDispatchData,
) => {
  if (data.guild_id) {
    const guild = await client.guilds.get(data.guild_id);
    return guild?.channels.update(data);
  }
  return data;
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

export const onGuildCreate = async (
  client: Client,
  data: GatewayGuildCreateDispatchData,
) => {
  return await client.guilds.has(data.id)
    ? client.guilds.update(data)
    : client.guilds.add(data);
};

export const onGuildDelete = (
  client: Client,
  data: GatewayGuildDeleteDispatchData,
) => {
  return data.unavailable
    ? client.guilds.update(data)
    : client.guilds.remove(data.id);
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

export const onGuildMemberAdd = async (
  client: Client,
  data: RequiredKeys<GatewayGuildMemberAddDispatchData, "user">,
) => {
  return (await client.guilds.get(data.guild_id))
    ?.members.add({ id: data.user.id, ...data }) ??
    new Member({ id: data.user.id, ...data }, client);
};

export const onGuildMemberRemove = async (
  client: Client,
  data: GatewayGuildMemberRemoveDispatchData,
) => {
  return (await client.guilds.get(data.guild_id))
    ?.members.remove(data.user.id) ?? data;
};

export const onGuildMembersChunk = (
  client: Client,
  data: GatewayGuildMembersChunkDispatchData,
) => {
};

export const onGuildMemberUpdate = async (
  client: Client,
  data: RequiredKeys<GatewayGuildMemberUpdateDispatchData, "user">,
) => {
  return (await client.guilds.get(data.guild_id))
    ?.members.update({ id: data.user.id, ...data });
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
