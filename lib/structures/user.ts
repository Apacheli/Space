import { APIUser } from "../../deps.ts";
import Structure from "./structure.ts";
import Client from "../client/client.ts";
import {
  CDNFormatURL,
  defaultUserAvatarURL,
  ImageFormats,
  userAvatarURL,
} from "../util/mod.ts";

export class User extends Structure {
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
    super.update(data);

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

  avatarURL(format?: ImageFormats, size?: number) {
    return this.avatar &&
      CDNFormatURL(userAvatarURL(this.id, this.avatar), format, size);
  }

  defaultAvatarURL(format?: ImageFormats, size?: number) {
    return CDNFormatURL(
      defaultUserAvatarURL(`${parseInt(this.discriminator) % 5}`),
      format,
      size,
    );
  }
}

export default User;
