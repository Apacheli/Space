# Space

**Space is currently under heavy development and is therefore highly
unrecommended for production. Any contributions are greatly appreciated. The
[contributing guide](CONTRIBUTING.md) contains further instructions.**

Space is a collection of fast, scalable, low-level [Deno](https://deno.land/)
modules for interacting with the [Discord API](https://discord.dev/).

### Table of Contents

- [Install](#install)
- [Getting Started](#getting-started)
- [Resources](#resources)
- [Contributing Guide](CONTRIBUTING.md)
- [License](LICENSE.txt)

### Install

Each module must be imported individually. For most end-users, importing the
[`client`](core/client) module should be sufficient. For more proficient users,
the core modules are public and available for use. They can be viewed
[here](core).

The [Deno manual](https://deno.land/manual/examples/manage_dependencies)
provides a more in-depth explanation about dependency management in Deno.

```ts
export * from "https://deno.land/x/space@0.11.0-alpha/core/client/mod.ts";
```

The [release notes](RELEASES.md) contains all available versions.

Latest (not recommended for production):

```ts
export * from "https://github.com/Cosdromeda/Space/raw/dev/core/client/mod.ts";
```

### Getting Started

Run an [example](examples/example.ts) directly from the CLI:

```sh
deno run --allow-env --allow-net https://deno.land/x/space@0.11.0-alpha/examples/example.ts
```

More examples are available [here](examples).

A simple program using Space to power a Discord bot:

```ts
import { Client, GatewayIntents } from "./deps.ts";

const token = Deno.env.get("BOT_TOKEN") ?? prompt("bot token:");
if (!token) {
  throw new TypeError("An invalid bot token was provided.");
}

const client = new Client(`Bot ${token}`);

(async () => {
  for await (const [message, shard] of client.gateway.messageCreate()) {
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
```

To run it:

```sh
deno run --allow-env --allow-net main.ts
```

The module reference is available at the
[Space documentation](https://olykir.dev/) or
[generated documentation](https://doc.deno.land/https/deno.land/x/space@0.11.0-alpha/core/client/mod.ts).

### Resources

- [Deno](https://deno.land/)
- [Discord Developer Documentation](https://discord.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)

The [Space Discord server](https://discord.gg/UQuA3EwXCV) is a great place to
ask general questions. All participating members must abide by the terms of the
[Space code of conduct](CODE_OF_CONDUCT.md).
