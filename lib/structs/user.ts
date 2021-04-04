import { APIUser } from "../../deps.ts";
import Client from "../client/client.ts";
import Struct from "./struct.ts";

export class User extends Struct {
  bot;
  system;

  username!: APIUser["username"];
  discriminator!: APIUser["discriminator"];
  avatar!: APIUser["avatar"] | null;
  public publicFlags: APIUser["public_flags"];

  constructor(data: APIUser, client: Client) {
    super(data, client);

    this.bot = data.bot;
    this.system = data.system;
  }

  update(data: APIUser) {
    this.username = data.username;
    this.discriminator = data.discriminator;
    this.avatar = data.avatar;
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
