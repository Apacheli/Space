import {
  Client,
  onChannelCreate,
  onChannelDelete,
  onChannelUpdate,
  onGuildCreate,
  onGuildDelete,
} from "../../lib/mod.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.gateway.listen(
  "CHANNEL_CREATE",
  (channel) => onChannelCreate(client, channel),
  (channel) => console.log(channel),
);

client.gateway.listen(
  "CHANNEL_DELETE",
  (channel) => onChannelDelete(client, channel),
  (channel) => console.log(channel),
);

client.gateway.listen(
  "CHANNEL_UPDATE",
  (channel) => onChannelUpdate(client, channel),
  (channel) => console.log(channel),
);

client.gateway.listen("GUILD_CREATE", (guild) => onGuildCreate(client, guild));
client.gateway.listen("GUILD_DELETE", (guild) => onGuildDelete(client, guild));

client.connect({
  intents: 1 << 0,
});
