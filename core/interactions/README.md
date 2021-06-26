# Space Interactions

### Install

```ts
export * from "https://deno.land/x/space@0.11.0-alpha/core/interactions/mod.ts";
```

### Getting Started

Example program using [`std/http`](https://deno.land/std@0.99.0/http) in
conjunction with Space Interactions and [Space Util/hex_codec](../util):

```ts
import type { ServerRequest } from "./deps.ts";
import { handle, hexDecode, serve } from "./deps.ts";

let PUBLIC_KEY = Deno.env.get("BOT_PUBLIC_KEY") ?? prompt("bot public key:");
if (!PUBLIC_KEY) {
  throw new Error("An invalid bot public key was provided.");
}
PUBLIC_KEY = hexDecode(PUBLIC_KEY);

const handleRequest = async (request: ServerRequest) => {
  const { interaction, respond } = await handle(PUBLIC_KEY, request) ?? {};
  if (interaction?.data?.name === "ping") {
    respond?.({
      content: "pong",
    });
  }
};

(async () => {
  const server = serve({ port: 1337 });
  for await (const request of server) {
    handleRequest(request);
  }
})();
```
