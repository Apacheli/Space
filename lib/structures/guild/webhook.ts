import { APIWebhook } from "../../../deps.ts";
import Client from "../../client/client.ts";
import { CDNFormatURL, ImageFormats, userAvatarURL } from "../../util/cdn.ts";
import Structure from "../structure.ts";

export default class Webhook extends Structure {
  type;
  guildID;
  applicationID;

  channelID!: bigint;
  user: APIWebhook["user"];
  name!: APIWebhook["name"];
  avatar!: APIWebhook["avatar"];
  token: APIWebhook["token"];

  constructor(data: APIWebhook, client: Client) {
    super(data, client);

    this.type = data.type;
    this.guildID = data.guild_id && BigInt(data.guild_id);
    this.applicationID = data.application_id && BigInt(data.application_id);
  }

  update(data: APIWebhook) {
    super.update(data);

    this.channelID = BigInt(data.channel_id);
    this.user = data.user;
    this.name = data.name;
    this.avatar = data.avatar;
    this.token = data.token;
  }

  avatarURL(format?: ImageFormats, size?: number) {
    return this.avatar &&
      CDNFormatURL(userAvatarURL(this.id, this.avatar), format, size);
  }
}
