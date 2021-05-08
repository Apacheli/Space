# Space

[![](https://github.com/Apacheli/Space/actions/workflows/deno.yaml/badge.svg)](https://github.com/Apacheli/Space/actions/workflows/deno.yaml)
[![](https://canary.discord.com/api/guilds/812458966357377067/widget.png)](https://discord.gg/UQuA3EwXCV)

<img align=right src=assets/space_logo.png height=150px>

A low-level [Deno](https://deno.land/) module for interacting with
[Discord](https://discord.com/).

### Features

- Secure by default. Client-side checks prevent
  [`4xx`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)s
  from occuring.
- Written purely in TypeScript to guarantee type safety.
- Standalone API modules ([HTTP](lib/api/http),
  [interactions](lib/api/interactions), [websocket](lib/api/websocket)).
- Built-in utilities such as event logging and custom caching.
- 100% coverage over Discord's HTTP and websocket APIs.

### Install

```ts
export * from "https://deno.land/x/space@0.8.0-alpha/mod.ts";
```

See the [release notes](RELEASES.md) for all available versions.

### Getting Started

Simple program to get started:

```ts
import { Client, GatewayIntentBits, onMessageCreate } from "./deps.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(`Bot ${token}`);

client.connect({
  intents: GatewayIntentBits.GUILD_MESSAGES,
});

for await (const [data, shard] of client.gateway.listen("MESSAGE_CREATE")) {
  const message = await onMessageCreate(client, data);
  if (message.content === "!ping") {
    client.rest.createMessage(message.channelID, {
      content: "pong!",
    });
  }
}
```

Simple interactions program:

```ts
import { InteractionResponseType, Server } from "./deps.ts";

const publicKey = prompt("public key:");
if (!publicKey) {
  throw new Error("bad public key");
}

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

See the
[documentation](https://doc.deno.land/https//deno.land/x/space@0.8.0-alpha/mod.ts)
for reference.

### Resources

- [Deno](https://deno.land/)
- [Discord API Types](https://github.com/discordjs/discord-api-types/tree/main/deno)
- [Discord Developer Documentation](https://discord.dev/)
- [TypeScript](https://www.typescriptlang.org/)
