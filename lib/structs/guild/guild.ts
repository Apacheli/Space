import { APIGuild } from "../../../deps.ts";
import {
  channelFromType,
  Emoji,
  GuildChannel,
  Member,
  Role,
  Struct,
} from "../mod.ts";
import Client, { APIPresence } from "../../client/client.ts";
import {
  Cache,
  CDNFormatURL,
  guildIconURL,
  ImageFormats,
  Storable,
} from "../../util/mod.ts";

export class Guild extends Struct {
  owner;
  permissions;

  joinedAt;
  large;
  unavailable;
  memberCount;
  // voiceStates;
  members: Storable<Member>;
  channels: Storable<GuildChannel>;
  presences: Storable<APIPresence>;

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
  roles: Storable<Role>;
  emojis: Storable<Emoji>;
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

  constructor(data: APIGuild, client: Client) {
    super(data, client);

    this.owner = data.owner;
    this.permissions = data.permissions;

    this.joinedAt = data.joined_at;
    this.large = data.large;
    this.unavailable = data.unavailable;
    this.memberCount = data.member_count;
    // this.voiceStates = data.voice_states;
    this.members = new Cache<Member>(client, Member);
    data.members?.forEach((member) => {
      if (member.user) {
        this.members.add({ id: member.user.id, ...member });
        client.users.update(member.user);
      }
    });
    this.channels = new Cache<GuildChannel>(client, GuildChannel);
    data.channels?.forEach((channel) =>
      this.channels.add(channelFromType(channel, client))
    );
    this.roles = new Cache<Role>(client, Role);
    data.roles?.forEach((role) => this.roles.add(role));
    this.emojis = new Cache<Emoji>(client, Emoji);
    data.emojis?.forEach((emoji: any) => this.emojis.add(emoji));
    this.presences = new Cache<APIPresence>(client);
    data.presences?.forEach(async (presence) =>
      this.presences.add(
        await client.presences.update({ id: presence.user.id, ...presence }),
      )
    );
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
  }

  getAFKChannel() {
    return this.afkChannelID && this.channels.get(this.afkChannelID);
  }

  getWidgetChannel() {
    return this.widgetChannelID && this.channels.get(this.widgetChannelID);
  }

  getSystemChannel() {
    return this.systemChannelID && this.channels.get(this.systemChannelID);
  }

  getRulesChannel() {
    return this.rulesChannelID && this.channels.get(this.rulesChannelID);
  }

  getPublicUpdatesChannel() {
    return this.publicUpdatesChannelID &&
      this.channels.get(this.publicUpdatesChannelID);
  }

  getIconURL(format?: ImageFormats, size?: number) {
    return this.icon && guildIconURL(`${this.id}`, this.icon);
  }
}

export default Guild;
