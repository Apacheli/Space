import type {
  RESTGetAPIAuditLogQuery,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTGetAPIChannelMessagesQuery,
  RESTGetAPIGuildPruneCountQuery,
  RESTPatchAPIChannelJSONBody,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPatchAPICurrentGuildMemberNicknameJSONBody,
  RESTPatchAPIGuildChannelPositionsJSONBody,
  RESTPatchAPIGuildEmojiJSONBody,
  RESTPatchAPIGuildJSONBody,
  RESTPatchAPIGuildMemberJSONBody,
  RESTPatchAPIGuildRoleJSONBody,
  RESTPatchAPIGuildRolePositionsJSONBody,
  RESTPatchAPIGuildTemplateJSONBody,
  RESTPatchAPIGuildWelcomeScreenJSONBody,
  RESTPatchAPIGuildWidgetSettingsJSONBody,
  RESTPatchAPIWebhookJSONBody,
  RESTPostAPIChannelFollowersJSONBody,
  RESTPostAPIChannelInviteJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  RESTPostAPIChannelWebhookJSONBody,
  RESTPostAPIGuildChannelJSONBody,
  RESTPostAPIGuildEmojiJSONBody,
  RESTPostAPIGuildPruneJSONBody,
  RESTPostAPIGuildRoleJSONBody,
  RESTPostAPIGuildTemplatesJSONBody,
  RESTPutAPIChannelPermissionJSONBody,
  RESTPutAPIGuildBanJSONBody,
  RESTPutAPIGuildMemberJSONBody,
} from "./deps.ts";
import {
  channelPermissionsDecorator,
  Client,
  guildPermissionsDecorator,
} from "./mod.ts";
import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";
import { ActualSnowflake } from "../util/mod.ts";

// deno-lint-ignore no-empty-interface
export interface RESTClientOptions extends HTTPClientOptions {
}

export class RESTClient extends HTTPClient {
  constructor(
    public client: Client,
    token: string,
    options?: RESTClientOptions,
  ) {
    super(token, options);
  }

  @guildPermissionsDecorator(["VIEW_AUDIT_LOG"])
  getGuildAuditLog(guildID: ActualSnowflake, query: RESTGetAPIAuditLogQuery) {
    return super.getGuildAuditLog(guildID, query);
  }

  // getChannel

  @channelPermissionsDecorator(["MANAGE_CHANNELS", "VIEW_CHANNEL"])
  editChannel(
    channelID: ActualSnowflake,
    data: RESTPatchAPIChannelJSONBody,
    reason?: string,
  ) {
    return super.editChannel(channelID, data, reason);
  }

  @channelPermissionsDecorator(["MANAGE_CHANNELS", "VIEW_CHANNEL"])
  deleteChannel(channelID: ActualSnowflake, reason?: string) {
    return super.deleteChannel(channelID, reason);
  }

  @channelPermissionsDecorator(["VIEW_CHANNEL"])
  getChannelMessages(
    channelID: ActualSnowflake,
    query: RESTGetAPIChannelMessagesQuery,
  ) {
    return super.getChannelMessages(channelID, query);
  }

  @channelPermissionsDecorator(["VIEW_CHANNEL"])
  getChannelMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.getChannelMessage(channelID, messageID);
  }

  @channelPermissionsDecorator(["SEND_MESSAGES", "VIEW_CHANNEL"])
  createMessage(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessageJSONBody,
    files?: File[],
  ) {
    return super.createMessage(channelID, data, files);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "SEND_MESSAGES",
    "VIEW_CHANNEL",
  ])
  crosspostMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.crosspostMessage(channelID, messageID);
  }

  @channelPermissionsDecorator([
    "ADD_REACTIONS",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  createReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return super.createReaction(channelID, messageID, emoji);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  deleteOwnReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return super.deleteOwnReaction(channelID, messageID, emoji);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteUserReaction(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
    userID: ActualSnowflake,
  ) {
    return super.deleteUserReaction(channelID, messageID, emoji, userID);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getReactions(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ) {
    return super.getReactions(channelID, messageID, emoji, query);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteAllReactions(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.deleteAllReactions(channelID, messageID);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteAllReactionsforEmoji(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    emoji: string,
  ) {
    return super.deleteAllReactionsforEmoji(channelID, messageID, emoji);
  }

  @channelPermissionsDecorator([
    /* "MANAGE_MESSAGES", */
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  editMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    data: RESTPatchAPIChannelMessageJSONBody,
  ) {
    // TODO: Check flag edits
    return super.editMessage(channelID, messageID, data);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  deleteMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.deleteMessage(channelID, messageID);
  }

  @channelPermissionsDecorator([
    "MANAGE_MESSAGES",
    "READ_MESSAGE_HISTORY",
    "VIEW_CHANNEL",
  ])
  bulkDeleteMessages(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessagesBulkDeleteJSONBody,
  ) {
    return super.bulkDeleteMessages(channelID, data);
  }

  @channelPermissionsDecorator([
    "MANAGE_CHANNELS",
    "MANAGE_ROLES",
    "VIEW_CHANNEL",
  ])
  editChannelPermissions(
    channelID: ActualSnowflake,
    overwriteID: ActualSnowflake,
    data: RESTPutAPIChannelPermissionJSONBody,
    reason?: string,
  ) {
    return super.editChannelPermissions(channelID, overwriteID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_CHANNELS", "VIEW_CHANNEL"])
  getChannelInvites(channelID: ActualSnowflake) {
    return super.getChannelInvites(channelID);
  }

  @guildPermissionsDecorator(["CREATE_INSTANT_INVITE", "VIEW_CHANNEL"])
  createChannelInvite(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelInviteJSONBody,
    reason?: string,
  ) {
    return super.createChannelInvite(channelID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES", "VIEW_CHANNEL"])
  deleteChannelPermission(
    channelID: ActualSnowflake,
    overwriteID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deleteChannelPermission(channelID, overwriteID, reason);
  }

  @channelPermissionsDecorator(["MANAGE_WEBHOOKS", "VIEW_CHANNEL"])
  followNewsChannel(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelFollowersJSONBody,
  ) {
    return super.followNewsChannel(channelID, data);
  }

  @channelPermissionsDecorator(["SEND_MESSAGES", "VIEW_CHANNEL"])
  triggerTypingIndicator(channelID: ActualSnowflake) {
    return super.triggerTypingIndicator(channelID);
  }

  // getPinnedMessages

  @channelPermissionsDecorator(["MANAGE_MESSAGES", "VIEW_CHANNEL"])
  addPinnedChannelMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    reason?: string,
  ) {
    return super.addPinnedChannelMessage(channelID, messageID, reason);
  }

  @channelPermissionsDecorator(["MANAGE_MESSAGES", "VIEW_CHANNEL"])
  deletePinnedChannelMessage(
    channelID: ActualSnowflake,
    messageID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deletePinnedChannelMessage(channelID, messageID, reason);
  }

  // groupPrivateChannelAddRecipient
  // groupPrivateChannelRemoveRecipient
  // startPublicThread
  // startaprivatethread
  // joinThread
  // addUsertoThread
  // leaveThread
  // removeUserfromThread
  // getThreadMembers

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getActiveThreads(channelID: ActualSnowflake, data: unknown) {
    return super.getActiveThreads(channelID, data);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getPublicArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return super.getPublicArchivedThreads(channelID, data);
  }

  @channelPermissionsDecorator(["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"])
  getJoinedPrivateArchivedThreads(channelID: ActualSnowflake, data: unknown) {
    return super.getJoinedPrivateArchivedThreads(channelID, data);
  }

  // getGuildEmojis
  // getGuildEmoji

  @guildPermissionsDecorator(["MANAGE_EMOJIS"])
  createGuildEmoji(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return super.createGuildEmoji(guildID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_EMOJIS"])
  editGuildEmoji(
    guildID: ActualSnowflake,
    emojiID: ActualSnowflake,
    data: RESTPatchAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return super.editGuildEmoji(guildID, emojiID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_EMOJIS"])
  deleteGuildEmoji(
    guildID: ActualSnowflake,
    emojiID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deleteGuildEmoji(guildID, emojiID, reason);
  }

  // createGuild
  // getGuild
  // getGuildPreview

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  editGuild(guildID: ActualSnowflake, data: RESTPatchAPIGuildJSONBody) {
    return super.editGuild(guildID, data);
  }

  // deleteGuild
  // getGuildChannels

  @guildPermissionsDecorator(["MANAGE_CHANNELS"])
  createGuildChannel(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildChannelJSONBody,
    reason?: string,
  ) {
    return super.createGuildChannel(guildID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_CHANNELS"])
  editGuildChannelPositions(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildChannelPositionsJSONBody,
  ) {
    return super.editGuildChannelPositions(guildID, data);
  }

  // getGuildMember
  // getGuildMembers
  // searchGuildMember

  @guildPermissionsDecorator(["CREATE_INSTANT_INVITE"])
  addGuildMember(
    guildID: bigint,
    userID: ActualSnowflake,
    data: RESTPutAPIGuildMemberJSONBody,
  ) {
    return super.addGuildMember(guildID, userID, data);
  }

  @guildPermissionsDecorator(["MOVE_MEMBERS", "MUTE_MEMBERS", "DEAFEN_MEMBERS"])
  editGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPatchAPIGuildMemberJSONBody,
    reason?: string,
  ) {
    return super.editGuildMember(guildID, userID, data, reason);
  }

  @guildPermissionsDecorator(["CHANGE_NICKNAME"])
  editCurrentUserNick(
    guildID: ActualSnowflake,
    data: RESTPatchAPICurrentGuildMemberNicknameJSONBody,
  ) {
    return super.editCurrentUserNick(guildID, data);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES"])
  addGuildMemberRole(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return super.addGuildMemberRole(guildID, userID, roleID, reason);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES"])
  removeGuildMemberRole(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return super.removeGuildMemberRole(guildID, userID, roleID, reason);
  }

  @guildPermissionsDecorator(["KICK_MEMBERS"])
  removeGuildMember(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    reason?: string,
  ) {
    return super.removeGuildMember(guildID, userID, reason);
  }

  @guildPermissionsDecorator(["BAN_MEMBERS"])
  getGuildBans(guildID: ActualSnowflake) {
    return super.getGuildBans(guildID);
  }

  @guildPermissionsDecorator(["BAN_MEMBERS"])
  getGuildBan(guildID: ActualSnowflake, userID: ActualSnowflake) {
    return super.getGuildBan(guildID, userID);
  }

  @guildPermissionsDecorator(["BAN_MEMBERS"])
  createGuildBan(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    data: RESTPutAPIGuildBanJSONBody,
    reason?: string,
  ) {
    return super.createGuildBan(guildID, userID, data, reason);
  }

  @guildPermissionsDecorator(["BAN_MEMBERS"])
  removeGuildBan(
    guildID: ActualSnowflake,
    userID: ActualSnowflake,
    reason?: string,
  ) {
    return super.removeGuildBan(guildID, userID, reason);
  }

  // getGuildRoles

  @guildPermissionsDecorator(["MANAGE_ROLES"])
  createGuildRole(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildRoleJSONBody,
    reason?: string,
  ) {
    return super.createGuildRole(guildID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES"])
  editGuildRolePositions(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildRolePositionsJSONBody,
  ) {
    return super.editGuildRolePositions(guildID, data);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES"])
  editGuildRole(
    guildID: ActualSnowflake,
    roleID: ActualSnowflake,
    data: RESTPatchAPIGuildRoleJSONBody,
    reason?: string,
  ) {
    return super.editGuildRole(guildID, roleID, data, reason);
  }

  @guildPermissionsDecorator(["MANAGE_ROLES"])
  deleteGuildRole(
    guildID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deleteGuildRole(guildID, roleID, reason);
  }

  @guildPermissionsDecorator(["KICK_MEMBERS"])
  getGuildPruneCount(
    guildID: ActualSnowflake,
    query: RESTGetAPIGuildPruneCountQuery,
  ) {
    return super.getGuildPruneCount(guildID, query);
  }

  @guildPermissionsDecorator(["KICK_MEMBERS"])
  beginGuildPrune(
    guildID: ActualSnowflake,
    query: RESTPostAPIGuildPruneJSONBody,
    reason?: string,
  ) {
    return super.beginGuildPrune(guildID, query, reason);
  }

  // getGuildVoiceRegions

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  getGuildInvites(guildID: ActualSnowflake) {
    return super.getGuildInvites(guildID);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  getGuildIntegrations(guildID: ActualSnowflake) {
    return super.getGuildIntegrations(guildID);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  deleteGuildIntegration(
    guildID: ActualSnowflake,
    integrationID: ActualSnowflake,
    reason?: string,
  ) {
    return super.deleteGuildIntegration(guildID, integrationID, reason);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  getGuildWidgetSettings(guildID: ActualSnowflake) {
    return super.getGuildWidgetSettings(guildID);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  editGuildWidget(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildWidgetSettingsJSONBody,
  ) {
    return super.editGuildWidget(guildID, data);
  }

  // getGuildWidget

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  getGuildVanityURL(guildID: ActualSnowflake) {
    return super.getGuildVanityURL(guildID);
  }

  // getGuildWidgetImage
  // getGuildWelcomeScreen

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  editGuildWelcomeScreen(
    guildID: ActualSnowflake,
    data: RESTPatchAPIGuildWelcomeScreenJSONBody,
    reason?: string,
  ) {
    return super.editGuildWelcomeScreen(guildID, data, reason);
  }

  // updateCurrentUserVoiceState
  // updateUserVoiceState
  // getInvite

  @guildPermissionsDecorator(["MANAGE_CHANNELS" /* , "MANAGE_GUILD" */])
  deleteInvite(inviteCode: string, reason?: string) {
    return super.deleteInvite(inviteCode, reason);
  }

  // getGuildTemplate
  // createGuildfromTemplate

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  getGuildTemplates(guildID: ActualSnowflake) {
    return super.getGuildTemplates(guildID);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  createGuildTemplate(
    guildID: ActualSnowflake,
    data: RESTPostAPIGuildTemplatesJSONBody,
  ) {
    return super.createGuildTemplate(guildID, data);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  syncGuildTemplate(guildID: ActualSnowflake, templateCode: string) {
    return super.syncGuildTemplate(guildID, templateCode);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  editGuildTemplate(
    guildID: ActualSnowflake,
    templateCode: string,
    data: RESTPatchAPIGuildTemplateJSONBody,
  ) {
    return super.editGuildTemplate(guildID, templateCode, data);
  }

  @guildPermissionsDecorator(["MANAGE_GUILD"])
  deleteGuildTemplate(guildID: ActualSnowflake, templateCode: string) {
    return super.deleteGuildTemplate(guildID, templateCode);
  }

  // getCurrentUser
  // getUser
  // editCurrentUser
  // getCurrentUserGuilds
  // leaveGuild
  // createPrivateChannel
  // createGroupPrivateChannel
  // getUserConnections
  // getVoiceRegions

  @guildPermissionsDecorator(["MANAGE_WEBHOOKS"])
  createWebhook(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelWebhookJSONBody,
  ) {
    return super.createWebhook(channelID, data);
  }

  @guildPermissionsDecorator(["MANAGE_WEBHOOKS"])
  getChannelWebhooks(channelID: ActualSnowflake) {
    return super.getChannelWebhooks(channelID);
  }

  @guildPermissionsDecorator(["MANAGE_WEBHOOKS"])
  getGuildWebhooks(guildID: ActualSnowflake) {
    return super.getGuildWebhooks(guildID);
  }

  // getWebhook
  // gerWebhookwithToken

  @guildPermissionsDecorator(["MANAGE_WEBHOOKS"])
  editWebhook(
    webhookID: ActualSnowflake,
    data: RESTPatchAPIWebhookJSONBody,
    reason?: string,
  ) {
    return super.editWebhook(webhookID, data, reason);
  }

  // editWebhookwithToken

  @guildPermissionsDecorator(["MANAGE_WEBHOOKS"])
  deleteWebhook(webhookID: ActualSnowflake, reason?: string) {
    return super.deleteWebhook(webhookID, reason);
  }

  // deleteWebhookwithToken
  // executeWebhook
  // executeSlackCompatibleWebhook
  // executeGitHubCompatibleWebhook
  // getWebhookMessage
  // editWebhookMessage
  // deleteWebhookMessage
  // getGateway
  // getGatewayBot
  // getCurrentBotApplicationInformation
  // getCurrentAuthorizationInformation
}
