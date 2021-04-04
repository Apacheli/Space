import { APIEmoji } from "../../../deps.ts";
import Struct from "../struct.ts";

export class Emoji extends Struct {
  name!: APIEmoji["name"];
  roles: APIEmoji["roles"];
  user: APIEmoji["user"];
  requireColons: APIEmoji["require_colons"];
  managed: APIEmoji["managed"];
  animated: APIEmoji["animated"];
  available: APIEmoji["available"];

  update(data: APIEmoji) {
    this.name = data.name;
    this.roles = data.roles;
    this.user = data.user;
    this.requireColons = data.require_colons;
    this.managed = data.managed;
    this.animated = data.animated;
    this.available = data.available;
  }

  get mention() {
    return `<${this.animated ? "a" : ""}:${this.name}:${this.id}>`;
  }
}

export default Emoji;
