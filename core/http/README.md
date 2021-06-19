# Space HTTP

A low-level implementation of the Discord HTTP API.

### Install

```ts
export * from "https://deno.land/x/space@0.11.0-alpha/core/http/mod.ts";
```

### Getting Started

```ts
import { RESTClient } from "./deps.ts";

const token = Deno.env.get("BOT_TOKEN");
const client = new RESTClient(`Bot ${token}`);

const message = await client.createMessage(826605722397442089n, {
  content: "Hello, World!",
});
```
