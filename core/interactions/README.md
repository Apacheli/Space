# Space Interactions

### Install

```ts
export * from "https://deno.land/x/space@0.11.0-alpha/core/interactions/mod.ts";
```

### Getting Started

Example program using [`std/http`](https://deno.land/std@0.99.0/http) in
conjunction with Space Interactions:

```ts
import type { ServerRequest } from "./deps.ts";
import { handle, hexDecode, InteractionCallbackType, serve } from "./deps.ts";

const PUBLIC_KEY = Deno.env.get("BOT_PUBLIC_KEY") ?? prompt("bot public key:");
if (!PUBLIC_KEY) {
  throw new Error("An invalid bot public key was provided.");
}

const handleRequest = async (publicKey: Uint8Array, request: ServerRequest) => {
  const { interaction, respond } = await handle(publicKey, request) ?? {};
  if (interaction?.data?.name === "ping") {
    respond?.(InteractionCallbackType.ChannelMessageWithSource, {
      content: "pong",
    });
  }
};

(async (publicKey) => {
  const server = serve({ port: 1337 });
  for await (const request of server) {
    handleRequest(publicKey, request);
  }
})(hexDecode(PUBLIC_KEY));
```
