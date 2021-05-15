import type { Snowflake } from "../reference.ts";
import { PresenceUpdate } from "../topics/gateway.ts";
import { Application } from "./application.ts";
import { Channel } from "./channel.ts";
import { Emoji } from "./emoji.ts";
import { User } from "./user.ts";
import { VoiceRegion, VoiceState } from "./voice.ts";

export interface Guild {
  id: Snowflake;
  name: string;
  icon: string | null;
  icon_hash?: string | null;
  splash: string | null;
  discovery_splash: string | null;
  owner?: boolean;
  owner_id: Snowflake;
  permissions?: string;
  region: VoiceRegion;
  afk_channel_id: Snowflake | null;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: Snowflake | null;
  verification_level: VerificationLevel;
  default_message_notifications: DefaultMessageNotificationLevel;
  explicit_content_filter: ExplicitContentFilterLevel;
  roles: Snowflake[];
  emojis: Emoji[];
  features: GuildFeatures[];
  mfa_level: MFALevel;
  application_id: Snowflake | null;
  system_channel_id: Snowflake | null;
  system_channel_flags: SystemChannelFlags;
  rules_channel_id: Snowflake | null;
  joined_at?: string;
  large?: boolean;
  unavailable?: boolean;
  member_count?: boolean;
  voice_states?: Partial<VoiceState>[];
  members?: GuildMember[];
  channels?: Channel[];
  threads?: Channel[];
  presences?: PresenceUpdate[];
  max_presences?: number | null;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: PremiumTier;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: Snowflake | null;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreen;
  nsfw: boolean;
}

export enum DefaultMessageNotificationLevel {
  AllMessages,
  OnlyMentions,
}

export enum ExplicitContentFilterLevel {
  Disabled,
  MembersWithoutRoles,
  AllMembers,
}

export enum MFALevel {
  None,
  Elevated,
}

export enum VerificationLevel {
  None,
  Low,
  Medium,
  High,
  VeryHigh,
}

export enum PremiumTier {
  None,
  Tier1,
  Tier2,
  Tier3,
}

export enum SystemChannelFlags {
  SuppressJoinNotifications = 1 << 0,
  SuppressPremiumSubscriptions = 1 << 1,
  SuppressGuildReminderNotifications = 1 << 2,
}

export type GuildFeatures =
  | "ANIMATED_ICON"
  | "BANNER"
  | "COMMERCE"
  | "COMMUNITY"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITE_SPLASH"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "NEWS"
  | "PARTNERED"
  | "PREVIEW_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED";

export interface GuildPreview {
  id: Snowflake;
  name: string;
  icon: string | null;
  splash: string | null;
  discovery_splash: string | null;
  emojis: Emoji[];
  features: GuildFeatures[];
  approximate_member_count: number;
  approximate_presence_count: number;
  description: string | null;
}

export interface GuildWidget {
  enabled: boolean;
  channel_id: Snowflake | null;
}

export interface GuildMember {
  user?: User;
  nick?: string | null;
  roles: Snowflake[];
  joined_at: string;
  premium_since?: string | null;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
}

export interface Integration {
  id: Snowflake;
  name: string;
  type: IntegrationType;
  enabled: boolean;
  syncing?: boolean;
  role_id?: Snowflake;
  enable_emoticons?: boolean;
  expire_behavior?: IntegrationExpireBehaviors;
  expire_grace_period?: number;
  user?: User;
  account: IntegrationAccount;
  synced_at?: string;
  subscriber_count?: number;
  revoked?: boolean;
  application?: Application;
}

export type IntegrationType = "twitch" | "youtube" | "discord";

export enum IntegrationExpireBehaviors {
  RemoveRole,
  Kick,
}

export interface IntegrationAccount {
  id: string;
  name: string;
}

export interface IntegrationApplication {
  id: Snowflake;
  name: string;
  icon: string | null;
  description: string;
  summary: string;
  bot?: User;
}

export interface Ban {
  reason: string | null;
  user: User;
}

export interface WelcomeScreen {
  description: string | null;
  welcome_screen: WelcomeScreenChannel[];
}

export interface WelcomeScreenChannel {
  channel_id: Snowflake;
  description: string;
  emoji_id: Snowflake | null;
  emoji_name: string | null;
}
