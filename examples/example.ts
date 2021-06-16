import { Client, GatewayIntents } from "../core/client/mod.ts";

const token = Deno.env.get("BOT_TOKEN") ?? prompt("bot token:");
if (!token) {
  throw new TypeError("An invalid bot token was provided.");
}

const client = new Client(`Bot ${token}`);

(async () => {
  for await (const [message] of client.gateway.messageCreate()) {
    if (message.content === "!ping") {
      client.http.createMessage(message.channelId, {
        content: "pong!",
      });
    }
  }
})();

client.gateway.connect({
  intents: GatewayIntents.GuildMessages,
});
