import type { Channel } from "./channel.ts";
import type { Guild } from "./guild.ts";
import type { User } from "./user.ts";
import type { Application } from "../topics/oauth2.ts";

// https://discord.dev/docs/resources/invite

/** https://discord.dev/resources/invite#invite-object */
export interface Invite {
  /** the invite code (unique ID) */
  code: string;
  /** the guild this invite is for */
  guild?: Partial<Guild>;
  /** the channel this invite is for */
  channel?: Partial<Channel>;
  /** the user who created the invite */
  inviter?: User;
  /** the [type of target](https://discord.dev/resources/invite#invite-object-invite-target-types) for this voice channel invite */
  target_type?: InviteTargetTypes;
  /** the user whose stream to display for this voice channel stream invite */
  target_user?: User;
  /** the embedded application to open for this voice channel embedded application invite */
  target_application?: Application;
  /** approximate count of online members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true` */
  approximate_presence_count?: number;
  /** approximate count of total members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true` */
  approximate_member_count?: number;
  /** the expiration date of this invite, returned from the `GET /invites/<code>` endpoint when `with_expiration` is `true` */
  expires_at?: string | null;
}

/** https://discord.dev/resources/invite#invite-object-invite-target-types */
export enum InviteTargetTypes {
  STREAM = 1,
  EMBEDDED_APPLICATION,
}

/** https://discord.dev/resources/invite#invite-metadata-object */
export interface InviteMetadata {
  /** number of times this invite has been used */
  uses: number;
  /** max number of times this invite can be used */
  max_uses: number;
  /** duration (in seconds) after which the invite expires */
  max_age: number;
  /** whether this invite only grants temporary membership */
  temporary: boolean;
  /** when this invite was created */
  created_at: string;
}

/** https://discord.dev/docs/resources/invite#get-invite */
export interface GetInviteQuery {
  with_counts?: boolean;
}

/** https://discord.dev/docs/resources/invite#get-invite */
export type GetInviteBody = Invite;

/** https://discord.dev/resources/invite#delete-invite */
export type DeleteInviteBody = void;
