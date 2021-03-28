import { APIGuildMember } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Structure from "../Structure.ts";

export default class Member extends Structure {
  user?: APIGuildMember["user"];
  nick: APIGuildMember["nick"];
  roles!: APIGuildMember["roles"];
  joinedAt!: APIGuildMember["joined_at"];
  premiumSince: APIGuildMember["premium_since"];
  deaf!: APIGuildMember["deaf"];
  mute!: APIGuildMember["mute"];
  pending: APIGuildMember["pending"];
  // permissions;

  update(data: APIGuildMember) {
    this.user = data.user;
    this.nick = data.nick;
    this.roles = data.roles;
    this.joinedAt = data.joined_at;
    this.premiumSince = data.premium_since;
    this.deaf = data.deaf;
    this.mute = data.mute;
    this.pending = data.pending;
    // this.permissions = data.permissions;
  }
}
