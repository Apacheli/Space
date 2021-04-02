import { APIUser } from "../../deps.ts";
import Struct from "./struct.ts";

export class User extends Struct {
  username!: APIUser["username"];
  discriminator!: APIUser["discriminator"];
  avatar!: APIUser["avatar"] | null;
  bot: APIUser["bot"];
  system: APIUser["system"];
  public publicFlags: APIUser["public_flags"];

  update(data: APIUser) {
    this.username = data.username;
    this.discriminator = data.discriminator;
    this.avatar = data.avatar;
    this.bot = data.bot;
    this.system = data.system;
    this.publicFlags = data.public_flags;
  }

  get mention() {
    return `<@${this.id}>`;
  }

  get tag() {
    return `${this.username}#${this.discriminator}`;
  }
}

export default User;
