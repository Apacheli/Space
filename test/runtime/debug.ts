import { Client, onGuildCreate } from "../../lib/mod.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.gateway.listen("GUILD_CREATE", (guild) => onGuildCreate(client, guild));

client.gateway.listen("MESSAGE_CREATE", async (message) => {
  if (message.author.id !== "460612586061430806") {
    return;
  }
  if (!message.content.startsWith("===ts ")) {
    return;
  }
  const code = message.content.slice(6);
  let result;
  try {
    result = await eval(code);
  } catch (error) {
    result = `${error}`;
  }
  client.rest.createMessage(message.channel_id, {
    content: `\`\`\`ts\n${Deno.inspect(result, { depth: 0 })}\n\`\`\``,
  });
});
