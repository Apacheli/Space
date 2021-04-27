import type { APIGuildMember, Snowflake } from "../deps.ts";
import { Structure } from "../structure.ts";
import type { Client } from "../../client/client.ts";
import type { RequiredKeys } from "../../util/mod.ts";

export type APIGuildMemberExtra = RequiredKeys<APIGuildMember, "user"> & {
  guild_id?: Snowflake;
};

export class Member extends Structure {
  user;
  joinedAt;
  guildID;

  nick: APIGuildMember["nick"];
  roles?: bigint[];
  premiumSince: APIGuildMember["premium_since"];
  deaf!: APIGuildMember["deaf"];
  mute!: APIGuildMember["mute"];
  pending: APIGuildMember["pending"];
  // permissions;

  constructor(data: APIGuildMemberExtra, client: Client) {
    super({ id: data.user.id, ...data }, client);

    this.user = data.user;
    this.joinedAt = Date.parse(data.joined_at);
    this.guildID = data.guild_id && BigInt(data.guild_id);
  }

  update(data: APIGuildMember) {
    super.update(data);

    this.nick = data.nick;
    this.roles = data.roles.map(BigInt);
    this.premiumSince = data.premium_since;
    this.deaf = data.deaf;
    this.mute = data.mute;
    this.pending = data.pending;
    // this.permissions = data.permissions;
  }

  get mention() {
    return `<@${this.nick ? "!" : ""}${this.id}>`;
  }
}
