# Space

[![](https://canary.discord.com/api/guilds/812458966357377067/widget.png)](https://discord.gg/UQuA3EwXCV)

<img align=right src=assets/space_logo.png height=150px>

A [Discord API](https://discord.dev/) library for [Deno](https://deno.land/).

### Features

- 100% coverage over Discord's HTTP and websocket APIs.
- Secure by default. Client-side checks prevent `4xx`s for occuring.
- Written in TypeScript to guarantee type safety.
- Built-in utilities such as a colorful logger.

### Install

```ts
export * from "https://deno.land/x/space@0.5.0-alpha/mod.ts";
```

[See the release notes](RELEASES.md) for all available versions.

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

See the
[documentation](https://doc.deno.land/https://deno.land/x/space@0.5.0-alpha/mod.ts)
for reference.

### Resources

- [Deno](https://deno.land/)
- [Discord API Types](https://github.com/discordjs/discord-api-types)
- [Discord Developer Documentation](https://discord.dev/)
- [TypeScript](https://www.typescriptlang.org/)
