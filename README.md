# Space

[![](https://canary.discord.com/api/guilds/812458966357377067/widget.png)](https://discord.gg/UQuA3EwXCV)

<img align=right src=assets/space_logo.png height=150px>

A low-level [Deno](https://deno.land/) module for interacting with
[Discord](https://discord.com/).

### Features

- 100% coverage over Discord's HTTP and websocket APIs.
- Secure by default. Client-side checks prevent `4xx`s from occuring.
- Written purely in TypeScript to guarantee type safety.
- Built-in utilities such as event logging and custom caching.

### Install

```ts
export * from "https://deno.land/x/space@0.6.1-alpha/mod.ts";
```

If you only want to use HTTP:

```ts
export * from "https://deno.land/x/space@0.6.1-alpha/lib/api/http/mod.ts";
```

If you only want to use interactions:

```ts
export * from "https://deno.land/x/space@0.6.1-alpha/lib/api/interactions/mod.ts";
```

If you only want to use the Gateway:

```ts
export * from "https://deno.land/x/space@0.6.1-alpha/lib/api/websocket/mod.ts";
```

See the [release notes](RELEASES.md) for all available versions.

### Getting Started

Simple program to get started:

```ts
import {
  Client,
  GatewayDispatchEvents,
  GatewayIntentBits,
  Message,
  onMessageCreate,
} from "./deps.ts";

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
```

Simple interactions program:

```ts
import { InteractionResponseType, Server } from "./deps.ts";

const publicKey = prompt("public key:");
if (!publicKey) {
  throw new Error("bad public key");
}

const server = new Server(publicKey);

server.listen(GatewayDispatchEvents.InteractionCreate, (interaction) => {
  if (interaction.data.name === "ping") {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: { content: "pong" },
    };
  }
});

server.connect(8080);
```

See the
[documentation](https://doc.deno.land/https//deno.land/x/space@0.6.1-alpha/mod.ts)
for reference.

### Resources

- [Deno](https://deno.land/)
- [Discord API Types](https://github.com/discordjs/discord-api-types/tree/main/deno)
- [Discord Developer Documentation](https://discord.dev/)
- [TypeScript](https://www.typescriptlang.org/)
