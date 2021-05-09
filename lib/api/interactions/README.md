# Space Interactions

Handles Discord's
[interactions and slash commands](https://discord.com/developers/docs/interactions/slash-commands)
API.

```ts
import { InteractionResponseType, Server } from "./deps.ts";

const publicKey = Deno.env.get("PUBLIC_KEY");
const server = new Server(publicKey);

server.connect(1337);

for await (const [interaction, respond] of server.listen("COMMAND")) {
  if (interaction.data.name === "ping") {
    respond({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: { content: "pong" },
    });
  }
}
```
