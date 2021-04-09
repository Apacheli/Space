# Space

[![](https://canary.discord.com/api/guilds/812458966357377067/widget.png)](https://discord.gg/UQuA3EwXCV)

<img align=right src=assets/space_logo.png height=150px>

A [Discord API](https://discord.dev/) library for [Deno](https://deno.land/).

### Features

- 100% coverage over Discord's rest and websocket APIs.
- Secure by default. Client-side checks are in place to prevent `4xx`s.
- Written in TypeScript to guarantee type safety.
- Built-in logger with colors, unless explicitly disabled (`--no-logs`).

### Install

```ts
export * from "https://deno.land/x/space@0.5.0-alpha/mod.ts";
```

[Read the release notes](RELEASES.md) to see all available versions.

### Getting Started

Basic program to get you started:

```ts
import { Client, GatewayIntentsBits, onMessageCreate } from "./deps.ts";

const token = prompt("token:");
if (!token) {
  throw new Error("bad token");
}

const client = new Client(token);

client.gateway.listen(
  "MESSAGE_CREATE",
  (data) => onMessageCreate(client, data),
  (message) => {
    if (message.content === "!ping") {
      client.rest.createMessage(message.channelID, {
        content: "pong!",
      });
    }
  },
);

client.connect({
  intents: GatewayIntentsBits.GUILD_MESSAGES,
});
```

### Resources

- [Deno](https://deno.land/)
- [Discord API Types](https://github.com/discordjs/discord-api-types)
- [Discord Developer Documentation](https://discord.dev/)
- [Discord Server](https://discord.gg/UQuA3EwXCV)
- [Documentation](https://doc.deno.land/https://deno.land/x/space@0.5.0-alpha/mod.ts)
- [TypeScript](https://www.typescriptlang.org/)
