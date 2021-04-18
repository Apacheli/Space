import {
  Client,
  GatewayDispatchEvents,
  GatewayIntentBits,
  Message,
  onMessageCreate,
} from "../../mod.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.gateway.listen(
  GatewayDispatchEvents.MessageCreate,
  async (_message) => {
    const message = await onMessageCreate(client, _message);
    const messageFromStructure = new Message(_message, client);
    message.update(_message);
    messageFromStructure.update(_message);
    console.log(message.content, messageFromStructure.content);

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
