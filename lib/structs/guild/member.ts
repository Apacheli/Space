import { APIGuildMember } from "../../../deps.ts";
import Client from "../../client/client.ts";
import Struct from "../struct.ts";
import { RequiredKeys } from "../../util/mod.ts";

export class Member extends Struct {
  user: APIGuildMember["user"];
  joinedAt: number;

  nick: APIGuildMember["nick"];
  roles?: bigint[];
  premiumSince: APIGuildMember["premium_since"];
  deaf!: APIGuildMember["deaf"];
  mute!: APIGuildMember["mute"];
  pending: APIGuildMember["pending"];
  // permissions;

  constructor(data: RequiredKeys<APIGuildMember, "user">, client: Client) {
    super({ id: data.user.id, ...data }, client);

    this.user = data.user;
    this.joinedAt = Date.parse(data.joined_at);
  }

  update(data: APIGuildMember) {
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

export default Member;
