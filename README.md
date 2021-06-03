# Space

[![](https://github.com/Apacheli/Space/actions/workflows/ci.yaml/badge.svg)](https://github.com/Apacheli/Space/actions/workflows/ci.yaml)
[![](https://canary.discord.com/api/guilds/812458966357377067/widget.png)](https://discord.gg/UQuA3EwXCV)

<img align=right src=assets/space_logo.png height=150px>

**Space is currently in heavy development. Please do not use this for
production. If you would like to help contribute to this project, feel free to
[join our Discord server](https://discord.gg/UQuA3EwXCV).**

A low-level [Deno](https://deno.land/) module for interacting with
[Discord](https://discord.com/).

### Features

- Secure by default. Client-side checks prevent
  [`4xx`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)s
  from occuring.
- Written purely in TypeScript to guarantee type safety.
- Standalone API modules (See the entire ecosystem
  [here](https://github.com/Cosdromeda/Space/tree/dev/libs)).
- Built-in utilities such as event logging and custom caching.
- 100% coverage over Discord's HTTP and websocket APIs.

### Install

To install the whole package, add this into your `deps.ts` script:

```ts
export * from "https://deno.land/x/space@0.10.1-alpha/mod.ts";
```

See the [release notes](RELEASES.md) for all available versions.

### Resources

- [Deno](https://deno.land/)
- [Discord Developer Documentation](https://discord.dev/)
- [TypeScript](https://www.typescriptlang.org/)
