import { Client, onGuildCreate, onGuildDelete } from "../../lib/mod.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.gateway.listen(
  "GUILD_CREATE",
  (guild) => onGuildCreate(client, guild),
  (guild) => console.log(guild),
);

client.gateway.listen(
  "GUILD_DELETE",
  (guild) => onGuildDelete(client, guild),
  (guild) => console.log(guild),
);

client.gateway.listen("MESSAGE_CREATE", (message) => {
  if (message.author.id === "460612586061430806" && message.content === "!") {
    console.log(client);
  }
});

client.connect({
  intents: 1 << 0 | 1 << 9,
});
