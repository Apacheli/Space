import {
  APIGuild,
  GatewayPresenceUpdate,
  GatewayVoiceStateUpdateDispatchData,
  Snowflake,
} from "../deps.ts";
import {
  channelFromType,
  Emoji,
  GuildChannel,
  Member,
  Role,
  Structure,
} from "../mod.ts";
import Client, { cacheCheck } from "../../client/client.ts";
import {
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
          this.members?.add({ id: member.user.id, ...member });
          client.users?.update(member.user);
        }
      });
    }

    this.channels = cacheCheck(cache?.channels, client, GuildChannel);
    if (this.channels) {
      data.channels?.forEach((channel) => {
        const c = channelFromType({ guild_id: data.id, ...channel }, client);
        c.update(channel);
        this.channels?.add(c);
      });
    }

    this.roles = cacheCheck(cache?.roles, client, Role);
    if (this.roles) {
      data.roles?.forEach((role) => this.roles?.add(role));
    }

    this.emojis = cacheCheck(cache?.emojis, client, Emoji);
    if (this.emojis) {
      data.emojis?.forEach((emoji: any) => this.emojis?.add(emoji));
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
}

export default Guild;
