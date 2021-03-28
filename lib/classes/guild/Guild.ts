import { APIGuild } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Structure from "../Structure.ts";
import Client from "../../client/Client.ts";

export default class Guild extends Structure {
  owner;
  permissions;

  joinedAt;
  large;
  unavailable;
  memberCount;
  // voiceStates;
  // members;
  // channels;
  // presences;

  name!: APIGuild["name"];
  icon!: APIGuild["icon"];
  iconHash?: APIGuild["icon_hash"];
  splash!: APIGuild["splash"];
  discoverySplash!: APIGuild["discovery_splash"];
  ownerID!: APIGuild["owner_id"];
  region!: APIGuild["region"];
  afkChannelID!: APIGuild["afk_channel_id"];
  afkTimeout!: APIGuild["afk_timeout"];
  widgetEnabled?: APIGuild["widget_enabled"];
  widgetChannelID?: APIGuild["widget_channel_id"];
  verificationLevel!: APIGuild["verification_level"];
  defaultMessageNotifications!: APIGuild["default_message_notifications"];
  explicitContentFilter!: APIGuild["explicit_content_filter"];
  // roles;
  // emojis;
  features!: APIGuild["features"];
  mfaLevel!: APIGuild["mfa_level"];
  applicationID!: APIGuild["application_id"];
  systemChannelID!: APIGuild["system_channel_id"];
  systemChannelFlags!: APIGuild["system_channel_flags"];
  rulesChannelID!: APIGuild["rules_channel_id"];
  maxPresences?: APIGuild["max_presences"];
  maxMembers?: APIGuild["max_members"];
  vanityURLCode!: APIGuild["vanity_url_code"];
  description!: APIGuild["description"];
  banner!: APIGuild["banner"];
  premiumTier!: APIGuild["premium_tier"];
  premiumSubscriptionCount?: APIGuild["premium_subscription_count"];
  preferredLocale!: APIGuild["preferred_locale"];
  public publicUpdatesChannelID!: APIGuild["public_updates_channel_id"];
  maxVideoChannelUsers?: APIGuild["max_video_channel_users"];
  approximateMemberCount?: APIGuild["approximate_member_count"];
  approximatePresenceCount?: APIGuild["approximate_presence_count"];
  welcomeScreen?: APIGuild["welcome_screen"];

  constructor(data: APIGuild, client: Client) {
    super(data, client);

    this.owner = data.owner;
    this.permissions = data.permissions;

    this.joinedAt = data.joined_at;
    this.large = data.large;
    this.unavailable = data.unavailable;
    this.memberCount = data.member_count;
    // this.voiceStates = data.voice_states;
    // this.members = data.members;
    // this.channels = data.channels;
    // this.presences = data.presences;
  }

  update(data: APIGuild) {
    super.update(data);

    this.name = data.name;
    this.icon = data.icon;
    this.iconHash = data.icon_hash;
    this.splash = data.splash;
    this.discoverySplash = data.discovery_splash;
    this.ownerID = data.owner_id;
    this.region = data.region;
    this.afkChannelID = data.afk_channel_id;
    this.afkTimeout = data.afk_timeout;
    this.widgetEnabled = data.widget_enabled;
    this.widgetChannelID = data.widget_channel_id;
    this.verificationLevel = data.verification_level;
    this.defaultMessageNotifications = data.default_message_notifications;
    this.explicitContentFilter = data.explicit_content_filter;
    // this.roles = data.roles;
    // this.emojis = data.emojis;
    this.features = data.features;
    this.mfaLevel = data.mfa_level;
    this.applicationID = data.application_id;
    this.systemChannelID = data.system_channel_id;
    this.systemChannelFlags = data.system_channel_flags;
    this.rulesChannelID = data.rules_channel_id;
    this.maxPresences = data.max_presences;
    this.maxMembers = data.max_members;
    this.vanityURLCode = data.vanity_url_code;
    this.description = data.description;
    this.banner = data.banner;
    this.premiumTier = data.premium_tier;
    this.premiumSubscriptionCount = data.premium_subscription_count;
    this.preferredLocale = data.preferred_locale;
    this.publicUpdatesChannelID = data.public_updates_channel_id;
    this.maxVideoChannelUsers = data.max_video_channel_users;
    this.approximateMemberCount = data.approximate_member_count;
    this.approximatePresenceCount = data.approximate_presence_count;
    this.welcomeScreen = data.welcome_screen;
  }
}
