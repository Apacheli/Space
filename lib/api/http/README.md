# Space HTTP

Handles Discord's HTTP API.

```ts
import { HTTPClient } from "./deps.ts";

const token = Deno.env.get("TOKEN");
const client = new HTTPClient(`Bot ${token}`);

const channelID = Deno.env.get("CHANNEL_ID");
const message = await client.createMessage(channelID, {
  content: "Hello, World!",
});
console.log(message);
```
