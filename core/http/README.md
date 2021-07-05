# Space HTTP

A low-level implementation of the Discord HTTP API.

### Install

```ts
export * from "https://deno.land/x/space@0.11.0-alpha/core/http/mod.ts";
```

### Getting Started

```ts
import { HTTPClient } from "./deps.ts";

const token = Deno.env.get("BOT_TOKEN") ?? prompt("bot token:");
if (!token) {
  throw new TypeError("An invalid bot token was provided.");
}

const client = new HTTPClient(`Bot ${token}`);

const message = await client.createMessage(826605722397442089n, {
  content: "Hello, World!",
});
```
