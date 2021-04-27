import type {
  APIGuild,
  APIGuildWidgetSettings,
  GatewayPresenceUpdate,
  GatewayVoiceStateUpdateDispatchData,
  RESTGetAPIAuditLogQuery,
  RESTGetAPIGuildMembersQuery,
  RESTGetAPIGuildMembersSearchQuery,
  RESTGetAPIGuildPruneCountQuery,
  RESTGetAPIGuildWidgetImageQuery,
  RESTPatchAPICurrentGuildMemberNicknameJSONBody,
  RESTPatchAPIGuildChannelPositionsJSONBody,
  RESTPatchAPIGuildEmojiJSONBody,
  RESTPatchAPIGuildJSONBody,
  RESTPatchAPIGuildMemberJSONBody,
  RESTPatchAPIGuildRoleJSONBody,
  RESTPatchAPIGuildRolePositionsJSONBody,
  RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody,
  RESTPatchAPIGuildVoiceStateUserJSONBody,
  RESTPatchAPIGuildWelcomeScreenJSONBody,
  RESTPostAPIApplicationCommandsJSONBody,
  RESTPostAPIGuildChannelJSONBody,
  RESTPostAPIGuildEmojiJSONBody,
  RESTPostAPIGuildPruneJSONBody,
  RESTPostAPIGuildRoleJSONBody,
  RESTPostAPIGuildTemplatesJSONBody,
  RESTPutAPIApplicationCommandPermissionsJSONBody,
  RESTPutAPIApplicationCommandsJSONBody,
  RESTPutAPIGuildApplicationCommandsPermissionsJSONBody,
  RESTPutAPIGuildBanJSONBody,
  RESTPutAPIGuildMemberJSONBody,
  Snowflake,
} from "../deps.ts";
import {
  APIGuildMemberExtra,
  channelFromType,
  Emoji,
  GuildChannel,
  Member,
  Role,
  Structure,
} from "../mod.ts";
import { cacheCheck, Client } from "../../client/client.ts";
import {
  ActualSnowflake,
  Cache,
  CDNFormatURL,
  computePermissions,
  guildBannerURL,
  guildDiscoverySplashURL,
  guildIconURL,
  guildSplashURL,
  ImageFormats,
  Storable,
} from "../../util/mod.ts";

export interface APIPresence extends GatewayPresenceUpdate {
  id: Snowflake;
}

// https://github.com/discord/discord-api-docs/pull/2751
export interface APIVoiceState extends GatewayVoiceStateUpdateDispatchData {
  id: Snowflake;
  // request_to_speak_timestamp: number | null;
}

export class Guild extends Structure {
  owner;
  permissions;

  joinedAt;
  large;
  unavailable;
  memberCount;
  voiceStates?: Storable<APIVoiceState>;
  members?: Storable<Member>;
  channels?: Storable<GuildChannel>;
  roles?: Storable<Role>;
  emojis?: Storable<Emoji>;
  presences?: Storable<APIPresence>;

  name!: APIGuild["name"];
  icon!: APIGuild["icon"];
  iconHash: APIGuild["icon_hash"];
  splash!: APIGuild["splash"];
  discoverySplash!: APIGuild["discovery_splash"];
  ownerID!: bigint;
  region!: APIGuild["region"];
  afkChannelID!: bigint | null;
  afkTimeout!: APIGuild["afk_timeout"];
  widgetEnabled: APIGuild["widget_enabled"];
  widgetChannelID?: bigint | null;
  verificationLevel!: APIGuild["verification_level"];
  defaultMessageNotifications!: APIGuild["default_message_notifications"];
  explicitContentFilter!: APIGuild["explicit_content_filter"];
  features!: APIGuild["features"];
  mfaLevel!: APIGuild["mfa_level"];
  applicationID!: bigint | null;
  systemChannelID!: bigint | null;
  systemChannelFlags!: APIGuild["system_channel_flags"];
  rulesChannelID!: bigint | null;
  maxPresences: APIGuild["max_presences"];
  maxMembers: APIGuild["max_members"];
  vanityURLCode!: APIGuild["vanity_url_code"];
  description!: APIGuild["description"];
  banner!: APIGuild["banner"];
  premiumTier!: APIGuild["premium_tier"];
  premiumSubscriptionCount: APIGuild["premium_subscription_count"];
  preferredLocale!: APIGuild["preferred_locale"];
  public publicUpdatesChannelID!: bigint | null;
  maxVideoChannelUsers: APIGuild["max_video_channel_users"];
  approximateMemberCount: APIGuild["approximate_member_count"];
  approximatePresenceCount: APIGuild["approximate_presence_count"];
  welcomeScreen: APIGuild["welcome_screen"];
  nsfw?: APIGuild["nsfw"];

  constructor(data: APIGuild, client: Client) {
    super(data, client);

    this.owner = data.owner;
    this.permissions = data.permissions;

    this.joinedAt = data.joined_at;
    this.large = data.large;
    this.unavailable = data.unavailable;
    this.memberCount = data.member_count;

    const cache = client.options?.cache?.guilds;

    this.voiceStates = cacheCheck(cache?.voiceStates);
    data.voice_states?.forEach((voiceState) =>
      this.voiceStates?.add({ id: voiceState.user_id, ...voiceState })
    );

    this.members = cacheCheck(cache?.members, client, Member);
    if (this.members) {
      data.members?.forEach((member) => {
        if (member.user) {
          (member as APIGuildMemberExtra).guild_id = data.id;
          this.members?.add({ id: member.user.id, ...member });
          client.users?.update(member.user);
        }
      });
    }

    this.channels = cacheCheck(cache?.channels, client, GuildChannel);
    if (this.channels) {
      data.channels?.forEach((channel) => {
        channel.guild_id = data.id;
        const notRawChannel = channelFromType(channel, client);
        notRawChannel.update(channel);
        this.channels?.add(notRawChannel);
        client.channels?.add(notRawChannel);
      });
    }

    this.roles = cacheCheck(cache?.roles, client, Role);
    if (this.roles) {
      data.roles?.forEach((role) => this.roles?.add(role));
    }

    this.emojis = cacheCheck(cache?.emojis, client, Emoji);
    if (this.emojis) {
      data.emojis?.forEach((emoji) =>
        this.emojis?.add({ ...emoji, id: emoji.id! })
      );
    }

    this.presences = new Cache<APIPresence>(client);
    if (this.presences) {
      data.presences?.forEach((presence) =>
        this.presences?.add({ id: presence.user.id, ...presence })
      );
    }
  }

  update(data: APIGuild) {
    super.update(data);

    this.name = data.name;
    this.icon = data.icon;
    this.iconHash = data.icon_hash;
    this.splash = data.splash;
    this.discoverySplash = data.discovery_splash;
    this.ownerID = BigInt(data.owner_id);
    this.region = data.region;
    this.afkChannelID = data.afk_channel_id && BigInt(data.afk_channel_id);
    this.afkTimeout = data.afk_timeout;
    this.widgetEnabled = data.widget_enabled;
    this.widgetChannelID = data.widget_channel_id &&
      BigInt(data.widget_channel_id);
    this.verificationLevel = data.verification_level;
    this.defaultMessageNotifications = data.default_message_notifications;
    this.explicitContentFilter = data.explicit_content_filter;
    this.features = data.features;
    this.mfaLevel = data.mfa_level;
    this.applicationID = data.application_id && BigInt(data.application_id);
    this.systemChannelID = data.system_channel_id &&
      BigInt(data.system_channel_id);
    this.systemChannelFlags = data.system_channel_flags;
    this.rulesChannelID = data.rules_channel_id &&
      BigInt(data.rules_channel_id);
    this.maxPresences = data.max_presences;
    this.maxMembers = data.max_members;
    this.vanityURLCode = data.vanity_url_code;
    this.description = data.description;
    this.banner = data.banner;
    this.premiumTier = data.premium_tier;
    this.premiumSubscriptionCount = data.premium_subscription_count;
    this.preferredLocale = data.preferred_locale;
    this.publicUpdatesChannelID = data.public_updates_channel_id &&
      BigInt(data.public_updates_channel_id);
    this.maxVideoChannelUsers = data.max_video_channel_users;
    this.approximateMemberCount = data.approximate_member_count;
    this.approximatePresenceCount = data.approximate_presence_count;
    this.welcomeScreen = data.welcome_screen;
    this.nsfw = data.nsfw;
  }

  iconURL(format?: ImageFormats, size?: number) {
    return this.icon &&
      CDNFormatURL(guildIconURL(this.id, this.icon), format, size);
  }

  splashURL(format?: ImageFormats, size?: number) {
    return this.splash &&
      CDNFormatURL(guildSplashURL(this.id, this.splash), format, size);
  }

  discoverySplashURL(format?: ImageFormats, size?: number) {
    return this.discoverySplash &&
      CDNFormatURL(
        guildDiscoverySplashURL(this.id, this.discoverySplash),
        format,
        size,
      );
  }

  bannerURL(format?: ImageFormats, size?: number) {
    return this.banner &&
      CDNFormatURL(guildBannerURL(this.id, this.banner), format, size);
  }

  /**
   * Computes a member's permissions. If `channel` is provided, then it will
   * also compute their overwrites.
   */
  computePermissions(member: Member, channel?: GuildChannel) {
    return computePermissions(member, this, channel);
  }

  getGuildApplicationCommands(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.client.rest.getGuildApplicationCommand(
      applicationID,
      this.id,
      commandID,
    );
  }

  createApplicationCommand(
    applicationID: ActualSnowflake,
    data: RESTPostAPIApplicationCommandsJSONBody,
  ) {
    return this.client.rest.createGuildApplicationCommand(
      applicationID,
      this.id,
      data,
    );
  }

  getApplicationCommand(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.client.rest.getGuildApplicationCommand(
      applicationID,
      this.id,
      commandID,
    );
  }

  editApplicationCommand(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
    data: Partial<RESTPostAPIApplicationCommandsJSONBody>,
  ) {
    return this.client.rest.editGuildApplicationCommand(
      applicationID,
      this.id,
      commandID,
      data,
    );
  }

  deleteApplicationCommand(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.client.rest.deleteGuildApplicationCommand(
      applicationID,
      this.id,
      commandID,
    );
  }

  bulkOverwriteApplicationCommands(
    applicationID: ActualSnowflake,
    data: RESTPutAPIApplicationCommandsJSONBody,
  ) {
    return this.client.rest.bulkOverwriteGuildApplicationCommands(
      applicationID,
      this.id,
      data,
    );
  }

  getGuildApplicationCommandPermissions(applicationID: ActualSnowflake) {
    return this.client.rest.getGuildApplicationCommandPermissions(
      applicationID,
      this.id,
    );
  }

  getApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
  ) {
    return this.client.rest.getApplicationCommandPermissions(
      applicationID,
      this.id,
      commandID,
    );
  }

  editApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    commandID: ActualSnowflake,
    data: RESTPutAPIApplicationCommandPermissionsJSONBody,
  ) {
    return this.client.rest.editApplicationCommandPermissions(
      applicationID,
      this.id,
      commandID,
      data,
    );
  }

  batchEditApplicationCommandPermissions(
    applicationID: ActualSnowflake,
    data: RESTPutAPIGuildApplicationCommandsPermissionsJSONBody,
  ) {
    return this.client.rest.batchEditApplicationCommandPermissions(
      applicationID,
      this.id,
      data,
    );
  }

  getAuditLog(query: RESTGetAPIAuditLogQuery) {
    return this.client.rest.getGuildAuditLog(this.id, query);
  }

  getEmojis() {
    return this.client.rest.getGuildEmojis(this.id);
  }

  getEmoji(emojiID: ActualSnowflake) {
    return this.client.rest.getGuildEmoji(this.id, emojiID);
  }

  createEmoji(data: RESTPostAPIGuildEmojiJSONBody, reason?: string) {
    return this.client.rest.createGuildEmoji(this.id, data, reason);
  }

  editEmoji(
    emojiID: ActualSnowflake,
    data: RESTPatchAPIGuildEmojiJSONBody,
    reason?: string,
  ) {
    return this.client.rest.editGuildEmoji(this.id, emojiID, data, reason);
  }

  deleteEmoji(emojiID: ActualSnowflake, reason?: string) {
    return this.client.rest.deleteGuildEmoji(this.id, emojiID, reason);
  }

  getPreview() {
    return this.client.rest.getGuildPreview(this.id);
  }

  edit(data: RESTPatchAPIGuildJSONBody) {
    return this.client.rest.editGuild(this.id, data);
  }

  delete() {
    return this.client.rest.deleteGuild(this.id);
  }

  getChannels() {
    return this.client.rest.getGuildChannels(this.id);
  }

  createChannel(data: RESTPostAPIGuildChannelJSONBody, reason?: string) {
    return this.client.rest.createGuildChannel(this.id, data, reason);
  }

  editChannelPositions(data: RESTPatchAPIGuildChannelPositionsJSONBody) {
    return this.client.rest.editGuildChannelPositions(this.id, data);
  }

  getMember(userID: ActualSnowflake) {
    return this.client.rest.getGuildMember(this.id, userID);
  }

  getMembers(query: RESTGetAPIGuildMembersQuery) {
    return this.client.rest.getGuildMembers(this.id, query);
  }

  searchMembers(query: RESTGetAPIGuildMembersSearchQuery) {
    return this.client.rest.searchGuildMembers(this.id, query);
  }

  addMember(userID: ActualSnowflake, data: RESTPutAPIGuildMemberJSONBody) {
    return this.client.rest.addGuildMember(this.id, userID, data);
  }

  editMember(
    userID: ActualSnowflake,
    data: RESTPatchAPIGuildMemberJSONBody,
    reason?: string,
  ) {
    return this.client.rest.editGuildMember(this.id, userID, data, reason);
  }

  editCurrentUserNick(data: RESTPatchAPICurrentGuildMemberNicknameJSONBody) {
    return this.client.rest.editCurrentUserNick(this.id, data);
  }

  addMemberRole(
    userID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return this.client.rest.addGuildMemberRole(this.id, userID, roleID, reason);
  }

  removeMemberRole(
    userID: ActualSnowflake,
    roleID: ActualSnowflake,
    reason?: string,
  ) {
    return this.client.rest.removeGuildMemberRole(
      this.id,
      userID,
      roleID,
      reason,
    );
  }

  removeMember(userID: ActualSnowflake, reason?: string) {
    return this.client.rest.removeGuildMember(this.id, userID, reason);
  }
  kickMember = this.removeMember;

  getBans() {
    return this.client.rest.getGuildBans(this.id);
  }

  getBan(userID: ActualSnowflake) {
    return this.client.rest.getGuildBan(this.id, userID);
  }

  createBan(
    userID: ActualSnowflake,
    data: RESTPutAPIGuildBanJSONBody,
    reason?: string,
  ) {
    return this.client.rest.createGuildBan(this.id, userID, data, reason);
  }
  ban = this.createBan;

  removeBan(userID: ActualSnowflake, reason?: string) {
    return this.client.rest.removeGuildBan(this.id, userID, reason);
  }
  unban = this.removeBan;

  getRoles() {
    return this.client.rest.getGuildRoles(this.id);
  }

  createRole(data: RESTPostAPIGuildRoleJSONBody, reason?: string) {
    return this.client.rest.createGuildRole(this.id, data, reason);
  }

  editRolePositions(data: RESTPatchAPIGuildRolePositionsJSONBody) {
    return this.client.rest.editGuildRolePositions(this.id, data);
  }

  editRole(
    roleID: ActualSnowflake,
    data: RESTPatchAPIGuildRoleJSONBody,
    reason?: string,
  ) {
    return this.client.rest.editGuildRole(this.id, roleID, data, reason);
  }

  deleteRole(roleID: ActualSnowflake, reason?: string) {
    return this.client.rest.deleteGuildRole(this.id, roleID, reason);
  }

  getPruneCount(query: RESTGetAPIGuildPruneCountQuery) {
    return this.client.rest.getGuildPruneCount(this.id, query);
  }

  beginPrune(query: RESTPostAPIGuildPruneJSONBody, reason?: string) {
    return this.client.rest.beginGuildPrune(this.id, query, reason);
  }

  getVoiceRegions() {
    return this.client.rest.getGuildVoiceRegions(this.id);
  }

  getInvites() {
    return this.client.rest.getGuildInvites(this.id);
  }

  getIntegrations() {
    return this.client.rest.getGuildIntegrations(this.id);
  }

  deleteIntegration(integrationID: ActualSnowflake, reason?: string) {
    return this.client.rest.deleteGuildIntegration(
      this.id,
      integrationID,
      reason,
    );
  }

  getWidgetSettings() {
    return this.client.rest.getGuildWidgetSettings(this.id);
  }

  editWidget(data: Partial<APIGuildWidgetSettings>) {
    return this.client.rest.editGuildWidget(this.id, data);
  }

  getWidget() {
    return this.client.rest.getGuildWidget(this.id);
  }

  getVanityURL() {
    return this.client.rest.getGuildVanityURL(this.id);
  }

  getWidgetImage(query: RESTGetAPIGuildWidgetImageQuery) {
    return this.client.rest.getGuildWidgetImage(this.id, query);
  }

  getWelcomeScreen() {
    return this.client.rest.getGuildWelcomeScreen(this.id);
  }

  editWelcomeScreen(
    data: RESTPatchAPIGuildWelcomeScreenJSONBody,
    reason?: string,
  ) {
    return this.client.rest.editGuildWelcomeScreen(this.id, data, reason);
  }

  updateCurrentUserVoiceState(
    data: RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody,
  ) {
    return this.client.rest.updateCurrentUserVoiceState(this.id, data);
  }

  updateUserVoiceState(
    userID: ActualSnowflake,
    data: RESTPatchAPIGuildVoiceStateUserJSONBody,
    reason?: string,
  ) {
    return this.client.rest.updateUserVoiceState(this.id, userID, data, reason);
  }

  getTemplates() {
    return this.client.rest.getGuildTemplates(this.id);
  }

  createTemplate(data: RESTPostAPIGuildTemplatesJSONBody) {
    return this.client.rest.createGuildTemplate(this.id, data);
  }

  syncTemplate(templateCode: string) {
    return this.client.rest.syncGuildTemplate(this.id, templateCode);
  }

  editTemplate(
    templateCode: string,
    data: Partial<RESTPostAPIGuildTemplatesJSONBody>,
  ) {
    return this.client.rest.editGuildTemplate(this.id, templateCode, data);
  }

  deleteTemplate(templateCode: string) {
    return this.client.rest.deleteGuildTemplate(this.id, templateCode);
  }

  leave() {
    return this.client.rest.leaveGuild(this.id);
  }

  getWebhooks() {
    return this.client.rest.getGuildWebhooks(this.id);
  }
}
