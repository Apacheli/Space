# Space HTTP

Handles Discord's HTTP API.

### Install

```ts
export * from "https://deno.land/x/space@0.9.0-alpha/lib/api/http/mod.ts";
```

### Getting Started

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

See the documentation
[here](https://doc.deno.land/https/deno.land/x/space@0.9.0-alpha/lib/api/http/mod.ts).
