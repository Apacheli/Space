# Space Interactions

Handles Discord's
[interactions and slash commands](https://discord.dev/interactions/slash-commands)
API.

### Install

```ts
export * from "https://deno.land/x/space@0.8.0-alpha/lib/api/interactions/mod.ts";
```

### Getting Started

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
