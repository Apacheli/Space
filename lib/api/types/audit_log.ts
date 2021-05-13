import { Snowflake } from "./discord.ts";
import { User } from "./user.ts";
import { Webhook } from "./webhook.ts";

// https://discord.dev/resources/audit-log

/** https://discord.dev/resources/audit-log#audit-log-object-audit-log-structure */
export interface AuditLog {
  /** list of webhooks found in the audit log */
  webhooks: Webhook[];
  /** list of users found in the audit log */
  users: User[];
  /** list of audit log entries */
  audit_log_entries: AuditLogEntry[];
  /** list of partial integration objects */
  integrations: Integration[];
}

/** https://discord.dev/resources/audit-log#audit-log-entry-object-audit-log-entry-structure */
export interface AuditLogEntry {
  /** id of the affected entity (webhook, user, role, etc.) */
  target_id: string | null;
  /** changes made to the target_id */
  changes?: AuditLogChange;
  /** the user who made the changes */
  user_id: Snowflake | null;
  /** id of the entry  */
  id: Snowflake;
  /** type of action that occurred */
  action_type: AuditLogEvents;
  /** additional info for certain action types */
  options?: OptionalAuditLogInfo;
  /** the reason for the change (0-512 characters) */
  reason?: string;
}

/** https://discord.dev/resources/audit-log#audit-log-entry-object-audit-log-events */
export enum AuditLogEvents {
  GuildUpdate = 1,
  ChannelCreate = 10,
  ChannelUpdate,
  ChannelDelete,
  ChannelOverwriteCreate,
  ChannelOverwriteUpdate,
  ChannelOverwriteDelete,
  MemberKick = 20,
  MemberPrune,
  MemberBanAdd,
  MemberBanRemove,
  MemberUpdate,
  MemberRoleUpdate,
  MemberMove,
  MemberDisconnect,
  BotAdd,
  RoleCreate = 30,
  RoleUpdate,
  RoleDelete,
  InviteCreate = 40,
  InviteUpdate,
  InviteDelete,
  WebhookCreate = 50,
  WebhookUpdate,
  WebhookDelete,
  EmojiCreate = 60,
  EmojiUpdate,
  EmojiDelete,
  MessageDelete = 72,
  MessageBulkDelete,
  MessagePin,
  MessageUnpin,
  IntegrationCreate,
  IntegrationUpdate,
  IntegrationDelete,
}

/** https://discord.dev/resources/audit-log#audit-log-entry-object-optional-audit-entry-info */
export interface OptionalAuditLogInfo {
  /** number of days after which inactive members were kicked */
  delete_member_days?: string;
  /** number of members removed by the prune */
  members_removed?: string;
  /** channel in which the entities were targeted */
  channel_id: Snowflake;
  /** id of the message that was targeted */
  guild_id: Snowflake;
  /** number of entities that were targeted */
  count: string;
  /** id of the overwritten entity */
  id: Snowflake;
  /** type of overwritten entity - "0" for "role" or "1" for "member" */
  type: string;
  /** name of the role if type is "0" (not present if type is "1") */
  role_name: string;
}

/** https://discord.dev/resources/audit-log#audit-log-change-object-audit-log-change-structure */
export interface AuditLogChange {
  new_value?: unknown;
  old_value?: unknown;
  key: string;
}

/** https://discord.dev/resources/audit-log#get-guild-audit-log */
export interface GetGuildAuditLogQuery {
  /** filter the log for actions made by a user */
  user_id: Snowflake;
  /** the type of [audit log event](https://discord.dev/resources/audit-log#audit-log-entry-object-audit-log-events) */
  action_type: AuditLogEvents;
  /** filter the log before a certain entry id */
  before: Snowflake;
  /** how many entries are returned (default 50, minimum 1, maximum 100) */
  limit: number;
}
