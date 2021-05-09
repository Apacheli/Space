# Space Gateway

Handles Discord's gateway API.

```ts
import { GatewayClient, GatewayIntentBits } from "./deps.ts";

const token = Deno.env.get("TOKEN");
const client = new GatewayClient(`Bot ${token}`);

client.connect({
  intents: GatewayIntentBits.GUILD_MESSAGES,
  shards: 1,
  url: "wss://gateway.discord.gg",
});
```
