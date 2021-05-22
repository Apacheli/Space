// deno-lint-ignore-file camelcase

// https://discord.dev/topics/teams

import type { Snowflake } from "../reference.ts";
import type { User } from "../resources/user.ts";

/** https://discord.dev/topics/teams#data-models-team-object */
export interface Team {
  /** a hash of the image of the team's icon */
  icon: string | null;
  /** the unique id of the team */
  id: Snowflake;
  /** the members of the team */
  members: TeamMember[];
  /** the name of the team */
  name: string;
  /** the user id of the current team owner */
  owner_user_id: Snowflake;
}

/** https://discord.dev/topics/teams#data-models-team-members-object */
export interface TeamMember {
  /** the user's [membership state](https://discord.dev/topics/teams#data-models-membership-state-enum) on the team */
  membership_state: MembershipState;
  /** will always be `["*"]` */
  permissions: string[];
  /** 	the id of the parent team of which they are a member */
  team_id: Snowflake;
  /** the avatar, discriminator, id, and username of the user */
  user: Partial<User>;
}

/** https://discord.dev/topics/teams#data-models-membership-state-enum */
export enum MembershipState {
  Invited = 1,
  Accepted,
}
