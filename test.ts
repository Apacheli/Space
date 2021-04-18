import {
  Client,
  GatewayDispatchEvents,
  GatewayIntentBits,
  Message,
  onMessageCreate,
} from "./mod.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.gateway.listen(
  GatewayDispatchEvents.MessageCreate,
  (message) => onMessageCreate(client, message),
  (message: Message) => {
    if (message.content === "!ping") {
      client.rest.createMessage(message.channelID, {
        content: "pong!",
      });
    }
  },
);

client.connect({
  intents: GatewayIntentBits.GUILD_MESSAGES,
});
