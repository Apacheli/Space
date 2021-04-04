import { APIWebhook } from "../../../deps.ts";
import Client from "../../client/client.ts";
import Struct from "../struct.ts";

export default class Webhook extends Struct {
  guildID;
  applicationID;

  type!: APIWebhook["type"];
  channelID!: bigint;
  user: APIWebhook["user"];
  name!: APIWebhook["name"];
  avatar!: APIWebhook["avatar"];
  token: APIWebhook["token"];

  constructor(data: APIWebhook, client: Client) {
    super(data, client);

    this.guildID = data.guild_id && BigInt(data.guild_id);
    this.applicationID = data.application_id && BigInt(data.application_id);
  }

  update(data: APIWebhook) {
    super.update(data);

    this.type = data.type;
    this.channelID = BigInt(data.channel_id);
    this.user = data.user;
    this.name = data.name;
    this.avatar = data.avatar;
    this.token = data.token;
  }
}
