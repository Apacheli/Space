# Space Interactions

A module that helps with building components (looks more visually appealing but
entirely optional) and serverless interactions (such as
[validating](https://discord.dev/interactions/slash-commands#security-and-authorization)
and PONGing).

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
const publicKey = hexDecode(PUBLIC_KEY);

const handleRequest = async (request: ServerRequest) => {
  const { callback, interaction } = await handle(publicKey, request) ?? {};
  if (interaction?.data?.name === "ping") {
    callback?.(InteractionCallbackType.ChannelMessageWithSource, {
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
