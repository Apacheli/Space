import { APIGuild } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Structure from "./Structure.ts";
import Client from "../client/Client.ts";

export default class Guild extends Structure {
  constructor(data: APIGuild, client: Client) {
    super(data.id, client);
  }

  update() {
  }
}
