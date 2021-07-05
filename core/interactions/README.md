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

An example program using [`std/http`](https://deno.land/std@0.100.0/http) in
conjunction with Space Interactions:

```ts
import {
  InteractionCallbackType,
  InteractionRequestType,
  InteractionsClient,
  serve,
} from "./deps.ts";

const PUBLIC_KEY = Deno.env.get("BOT_PUBLIC_KEY") ?? prompt("bot public key:");
if (!PUBLIC_KEY) {
  throw new Error("An invalid bot public key was provided.");
}

const client = new InteractionsClient(PUBLIC_KEY);

(async (event) => {
  for await (const [callback, interaction] of client.listen(event)) {
    if (interaction.data.name === "ping") {
      callback(InteractionCallbackType.ChannelMessageWithSource, {
        content: "pong",
      });
    }
  }
})(InteractionRequestType.ApplicationCommand);

(async () => {
  for await (const request of serve({ port: 1337 })) {
    client.handleRequest(request);
  }
})();
```
