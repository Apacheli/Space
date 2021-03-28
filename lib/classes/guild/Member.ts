import { APIGuildMember } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Structure from "../Structure.ts";
import Client from "../../client/Client.ts";

export default class Member extends Structure {
  user?: APIGuildMember["user"];

  constructor(data: APIGuildMember, client: Client) {
    super(data, client);
  }

  update(data: APIGuildMember) {
    this.user = data.user;
  }
}
