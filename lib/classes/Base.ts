import { Snowflake } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Client from "../client/Client.ts";

export const DISCORD_EPOCH = 1420070400000; // 2015-01-01
export const TIMESTAMP_SHIFT = 4194304;

export default class Base {
  constructor(public id: Snowflake, public client: Client) {
  }

  get createdAt() {
    return parseInt(this.id) / TIMESTAMP_SHIFT + DISCORD_EPOCH;
  }
}
