# Space Gateway

Handles Discord's gateway API.

### Install

```ts
export * from "https://deno.land/x/space@0.9.0-alpha/lib/api/websocket/mod.ts";
```

### Getting Started

```ts
import { GatewayClient, GatewayIntentBits } from "./deps.ts";

const token = Deno.env.get("TOKEN");
const client = new GatewayClient(`Bot ${token}`);

client.connect({
  intents: GatewayIntentBits.GUILD_MESSAGES,
  shards: 1,
  url: "wss://gateway.discord.gg", // HTTPClient.getGatewayBot()
});
```
