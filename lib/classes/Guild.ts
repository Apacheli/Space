import { APIGuild } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Base from "./Base.ts";
import Client from "../client/Client.ts";

export default class Guild extends Base {
  constructor(data: APIGuild, client: Client) {
    super(data.id, client);
  }

  update() {
  }
}
