import { APIEmoji } from "../../../deps.ts";
import Structure from "../structure.ts";
import { CDNFormatURL, customEmojiURL, ImageFormats } from "../../util/mod.ts";

export class Emoji extends Structure {
  name!: APIEmoji["name"];
  roles?: bigint[];
  user: APIEmoji["user"];
  requireColons: APIEmoji["require_colons"];
  managed: APIEmoji["managed"];
  animated: APIEmoji["animated"];
  available: APIEmoji["available"];

  update(data: APIEmoji) {
    super.update(data);

    this.name = data.name;
    this.roles = data.roles?.map(BigInt);
    this.user = data.user;
    this.requireColons = data.require_colons;
    this.managed = data.managed;
    this.animated = data.animated;
    this.available = data.available;
  }

  get mention() {
    return `<${this.animated ? "a" : ""}:${this.name}:${this.id}>`;
  }

  cdnURL(format?: ImageFormats, size?: number) {
    return CDNFormatURL(customEmojiURL(this.id), format, size);
  }
}

export default Emoji;
