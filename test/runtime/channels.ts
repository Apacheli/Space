import {
  Client,
  onChannelCreate,
  onChannelDelete,
  onChannelUpdate,
  onGuildCreate,
  onGuildDelete,
} from "../../lib/mod.ts";

const token = prompt("token -");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.gateway.listen(
  "CHANNEL_CREATE",
  ({ data }) => onChannelCreate(client, data),
  (channel) => console.log(channel),
);

client.gateway.listen(
  "CHANNEL_DELETE",
  ({ data }) => onChannelDelete(client, data),
  (channel) => console.log(channel),
);

client.gateway.listen(
  "CHANNEL_UPDATE",
  ({ data }) => onChannelUpdate(client, data),
  (channel) => console.log(channel),
);

client.gateway.listen(
  "GUILD_CREATE",
  ({ data }) => onGuildCreate(client, data),
  (guild) => console.log(guild),
);

client.gateway.listen(
  "GUILD_DELETE",
  ({ data }) => onGuildDelete(client, data),
  (guild) => console.log(guild),
);

client.connect({
  intents: (1 << 1),
});
