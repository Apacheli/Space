# Space Releases

This document contains notable changes throughout Space's development.

| **0-alpha**<sup>Current</sup>            |
| ---------------------------------------- |
| [0.10.1-alpha](#0101-alpha---2021-06-02) |
| [0.10.0-alpha](#0100-alpha---2021-06-02) |
| [0.9.0-alpha](#090-alpha---2021-05-16)   |
| [0.8.0-alpha](#080-alpha---2021-05-01)   |
| [0.7.1-alpha](#071-alpha---2021-04-25)   |
| [0.7.0-alpha](#070-alpha---2021-04-21)   |
| [0.6.1-alpha](#061-alpha---2021-04-18)   |
| [0.6.0-alpha](#060-alpha---2021-04-15)   |
| [0.5.0-alpha](#050-alpha---2021-04-10)   |
| [0.4.2-alpha](#042-alpha---2021-04-04)   |
| [0.4.1-alpha](#041-alpha---2021-04-02)   |
| [0.4.0-alpha](#040-alpha---2021-03-31)   |
| [0.3.4-alpha](#034-alpha---2021-03-29)   |
| [0.3.3-alpha](#033-alpha---2021-03-23)   |
| [0.3.2-alpha](#032-alpha---2021-03-22)   |

This format was adapted from
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and
[Node.js's changelog](https://github.com/nodejs/node/blob/master/CHANGELOG.md).

## [0.10.1-alpha](https://github.com/Apacheli/Space/compare/0.10.0-alpha...0.10.1-alpha) - 2021-06-02

### Fixed

- Fix `components` type bug
- Bumped typings

## [0.10.0-alpha](https://github.com/Apacheli/Space/compare/0.9.0-alpha...0.10.0-alpha) - 2021-06-02

Unstable update. Released just to remove some work strain.

### Fixed

- Massive rework of the module ecosystem.
- Typings library is mostly finished and just needs to be maintained now.
- Shard queueing should be mostly correct. There are a few optimizations needing
  to be made with `rate_limit_bucket`, but it works for now.

### Removed

- Removed the `client` library. This needs to be heavily reworked.

## [0.9.0-alpha](https://github.com/Apacheli/Space/compare/0.8.0-alpha...0.9.0-alpha) - 2021-05-16

0.9.0-alpha is _finally_ here! This update adds a new standalone library just
for Discord's types. Check it out
[here](https://github.com/Apacheli/Space/tree/dev/lib/api/types). The types
library is expected to be completed by 0.10.0-alpha.

See the plans for stable release 1.0.0
[here](https://github.com/Apacheli/Space/issues/4).

### Added

- ([`3757ca1`](https://github.com/Apacheli/Space/commit/3757ca1)) Added codec
  for encoding and decoding `Uint8Array`s
- ([`6175586`](https://github.com/Apacheli/Space/commit/6175586)) Messages
  displayed in logs were once again improved
- ([`913d744`](https://github.com/Apacheli/Space/commit/913d744),
  [`04443aa`](https://github.com/Apacheli/Space/commit/04443aa)) Support the
  [external term format](https://erlang.org/doc/apps/erts/erl_ext_dist.html)
  encoding
- ([`4dfbe75`](https://github.com/Apacheli/Space/commit/4dfbe75),
  [`c4dce27`](https://github.com/Apacheli/Space/commit/c4dce27),
  [`88c2471`](https://github.com/Apacheli/Space/commit/88c2471)) Made
  improvements to the rate limiting system to correctly handle `429`s
- ([`681293c`](https://github.com/Apacheli/Space/commit/681293c),
  [`a41d870`](https://github.com/Apacheli/Space/commit/a41d870)) Support canary
  endpoints with `--canary`
- ([`2a51459`](https://github.com/Apacheli/Space/commit/2a51459)) Added
  `@guildPermissionsDecorator`
- ([`193652a`](https://github.com/Apacheli/Space/commit/193652a),
  [`a35db09`](https://github.com/Apacheli/Space/commit/a35db09),
  [`a4dcc7a`](https://github.com/Apacheli/Space/commit/a4dcc7a)) Added
  permission checking support by utilizing `@guildPermissionsDecorator` for
  several guild HTTP methods
- ([`ddb1d26`](https://github.com/Apacheli/Space/commit/ddb1d26)) Separated
  `verifyKey` into a standalone function
- ([`1007f54`](https://github.com/Apacheli/Space/commit/1007f54),
  [`6284931`](https://github.com/Apacheli/Space/commit/6284931)) Reworked
  sharding internals

### Changed

- ([`f522a4f`](https://github.com/Apacheli/Space/commit/f522a4f),
  [`573b6ae`](https://github.com/Apacheli/Space/commit/573b6ae)) Renamed
  `Permissions` to `PermissionsKeys`
- ([`7aa0894`](https://github.com/Apacheli/Space/commit/7aa0894)) Renamed `ALL`
  to `PERMISSIONS_ALL`
- ([`e4b3769`](https://github.com/Apacheli/Space/commit/e4b3769),
  [`9c9873d`](https://github.com/Apacheli/Space/commit/9c9873d)) Guarantee
  properties exist in `User`
- ([`ce4089d`](https://github.com/Apacheli/Space/commit/ce4089d))
  `@channelPermissionsDecorator` now uses an array instead of spread parameters
- ([`b14fb83`](https://github.com/Apacheli/Space/commit/b14fb83),
  [`f52455d`](https://github.com/Apacheli/Space/commit/f52455d)) Better examples
  across all of the API modules
- ([`ba98395`](https://github.com/Apacheli/Space/commit/ba98395))
  `Message.nonce` is now a `bigint`
- ([`1c229cb`](https://github.com/Apacheli/Space/commit/1c229cb))
  `Guild.joinedAt` is now an integer
- ([`aa4627e`](https://github.com/Apacheli/Space/commit/aa4627e))
  `computeOverwrites` parameters were swapped so `permissions` could be optional
- ([`186fc9d`](https://github.com/Apacheli/Space/commit/186fc9d)) Renamed
  `Server` to `InteractionsServer`

### Fixed

- ([`195916d`](https://github.com/Apacheli/Space/commit/195916d)) Use
  `ChannelType.GUILD_STAGE_VOICE` in `channelFromType`
- ([`16375b8`](https://github.com/Apacheli/Space/commit/16375b8)) Fixed a bug
  where the correct gateway URL was not being used
- ([`45eeab5`](https://github.com/Apacheli/Space/commit/45eeab5)) Fixed
  interactions example
- ([`2aa394c`](https://github.com/Apacheli/Space/commit/2aa394c)) Fixed bitwise
  AND to use assignment
- ([`5ca114c`](https://github.com/Apacheli/Space/commit/5ca114c)) Log whenever
  an invalid session occurs

## [0.8.0-alpha](https://github.com/Apacheli/Space/compare/0.7.1-alpha...0.8.0-alpha) - 2021-05-01

Threads are currently in beta at the time of this writing.

### Added

- ([`f6869cb`](https://github.com/Apacheli/Space/commit/f6869cb),
  [`bb07d26`](https://github.com/Apacheli/Space/commit/bb07d26),
  [`d4204f2`](https://github.com/Apacheli/Space/commit/d4204f2),
  [`a929cc7`](https://github.com/Apacheli/Space/commit/a929cc7)) Added
  `@channelPermissionsDecorator`
- ([`c37640b`](https://github.com/Apacheli/Space/commit/c37640b)) Added mobile
  status support
- ([`2617164`](https://github.com/Apacheli/Space/commit/2617164),
  [`f9e9b0f`](https://github.com/Apacheli/Space/commit/f9e9b0f)) Added
  Client-side permission checking for channel HTTP methods
- ([`45d3ea6`](https://github.com/Apacheli/Space/commit/45d3ea6)) Added
  `Member.guildID`
- ([`dfe711b`](https://github.com/Apacheli/Space/commit/dfe711b)) Added
  `DiscordSocket` for reusability between websockets and voice clients (mostly
  an internal change)
- ([`73979b4`](https://github.com/Apacheli/Space/commit/73979b4)) Added
  `Message.link`
- ([`2b3e006`](https://github.com/Apacheli/Space/commit/2b3e006),
  [`c5aeb79`](https://github.com/Apacheli/Space/commit/c5aeb79)) Added
  `PermissionsError` for client-side permission checking
- ([`e5c8962`](https://github.com/Apacheli/Space/commit/e5c8962)) Export
  `GATEWAY_VERSION` and `REST_VERSION`
- ([`b92cde8`](https://github.com/Apacheli/Space/commit/b92cde8)) Added type
  support for `AsyncEventTarget`
- ([`0d4ed8a`](https://github.com/Apacheli/Space/commit/0d4ed8a)) Added HTTP
  methods `getOriginalInteractionResponse`, `startPublicThread`,
  `startaprivatethread`, `joinThread`, `addUsertoThread`, `leaveThread`,
  `removeUserfromThread`, `getThreadMembers`, `getActiveThreads`,
  `getPublicArchivedThreads`, `getPrivateArchivedThreads`,
  `getJoinedPrivateArchivedThreads`, and `getWebhookMessage`

### Fixed

- ([`a682f12`](https://github.com/Apacheli/Space/commit/a682f12)) Prefer to use
  `import type` if types are used only
- ([`686f202`](https://github.com/Apacheli/Space/commit/686f202)) Fixed
  incorrect computation in `computeOverwrites`
- ([`3365373`](https://github.com/Apacheli/Space/commit/3365373),
  [`26a8976`](https://github.com/Apacheli/Space/commit/26a8976),
  [`ee39268`](https://github.com/Apacheli/Space/commit/ee39268)) Clean up log
  messages
- ([`1956570`](https://github.com/Apacheli/Space/commit/1956570)) Fixed
  highlighting numbers in strings
- ([`fe04cd6`](https://github.com/Apacheli/Space/commit/fe04cd6)) Fixed possible
  circular errors by moving several utilities to `client`
- ([`c637502`](https://github.com/Apacheli/Space/commit/c637502)) Log unknown
  events that aren't in sync with `GatewayDispatchEvents`
- ([`8ebce4a`](https://github.com/Apacheli/Space/commit/8ebce4a)) Warn when
  creating a channel with an unknown type

### Removed

- ([`e5c8962`](https://github.com/Apacheli/Space/commit/e5c8962)) Removed
  `VERSION` export from `http_client.ts`

## [0.7.1-alpha](https://github.com/Apacheli/Space/compare/0.7.0-alpha...0.7.1-alpha) - 2021-04-25

### Added

- ([`c6badff`](https://github.com/Apacheli/Space/commit/c6badff)) Added
  future-proof typings for message buttons
- ([`885548f`](https://github.com/Apacheli/Space/commit/885548f)) Dispatch
  `COMMAND` and `BUTTON` events in `Server`
- ([`e4dcd90`](https://github.com/Apacheli/Space/commit/e4dcd90),
  [`d5b124b`](https://github.com/Apacheli/Space/commit/d5b124b)) Added HTTP
  methods to `Guild`

### Fixed

- ([`696cd62`](https://github.com/Apacheli/Space/commit/696cd62)) Fixed
  `AsyncEventTarget` unresolved promise bug
- ([`9f36189`](https://github.com/Apacheli/Space/commit/9f36189)) Fixed
  interactions bug by sending the correct headers

## [0.7.0-alpha](https://github.com/Apacheli/Space/compare/0.6.1-alpha...0.7.0-alpha) - 2021-04-21

0.7.0-alpha is here! Unfortunately, interactions aren't working. I must've
pushed a broken commit by accident, but hopefully, I'll resolve it.

Also, receiving events has changed to use async generators:

```ts
for await (const [data, shard] of client.gateway.listen("MESSAGE_CREATE")) {
  // ...
}
```

### Added

- ([`aa81fa5`](https://github.com/Apacheli/Space/commit/aa81fa5),
  [`ab40c70`](https://github.com/Apacheli/Space/commit/ab40c70),
  [`c8cf18c`](https://github.com/Apacheli/Space/commit/c8cf18c),
  [`6ec382d`](https://github.com/Apacheli/Space/commit/6ec382d),
  [`abc73b8`](https://github.com/Apacheli/Space/commit/abc73b8),
  [`a23409d`](https://github.com/Apacheli/Space/commit/a23409d)) Added computing
  permission utilities
- ([`a4ab9d1`](https://github.com/Apacheli/Space/commit/a4ab9d1),
  [`c5c890a`](https://github.com/Apacheli/Space/commit/c5c890a))
  - Added `computePermissions` to `Guild`
  - Added `computeOverwrites` to `GuildChannel`

### Changed

- ([`999b480`](https://github.com/Apacheli/Space/commit/999b480),
  [`3268ee9`](https://github.com/Apacheli/Space/commit/3268ee9)) Changed type of
  `GuildChannel.permissionOverwrites` to `Cache`

### Fixed

- ([`26826de`](https://github.com/Apacheli/Space/commit/26826de)) Fixed a bug
  when adding items with an `update` method
- ([`0e62c6a`](https://github.com/Apacheli/Space/commit/0e62c6a)) Fixed
  `constructor` types for structures that implemented them implicitly

### Removed

- ([`e7fa107`](https://github.com/Apacheli/Space/commit/e7fa107),
  [`e0fec6e`](https://github.com/Apacheli/Space/commit/e0fec6e)) Removed default
  exports
- ([`1ac4820`](https://github.com/Apacheli/Space/commit/1ac4820)) Removed
  `EventPipeline` in favor of `AsyncEventTarget`

## [0.6.1-alpha](https://github.com/Apacheli/Space/compare/0.6.0-alpha...0.6.1-alpha) - 2021-04-18

### Fixed

- Fixed `useDefineForClassFields` bug when upgrading to Deno 1.9

## [0.6.0-alpha](https://github.com/Apacheli/Space/compare/0.5.0-alpha...0.6.0-alpha) - 2021-04-15

### Added

- ([`7808363`](https://github.com/Apacheli/Space/commit/7808363),
  [`e530689`](https://github.com/Apacheli/Space/commit/e530689),
  [`bf1a7d0`](https://github.com/Apacheli/Space/commit/bf1a7d0),
  [`ef8aa8a`](https://github.com/Apacheli/Space/commit/ef8aa8a)) Added support
  for slash commands

### Changed

- Made a bunch of meta changes. See all commits
  [here](https://github.com/Apacheli/Space/compare/0.5.0-alpha...0.6.0-alpha)

### Fixed

- ([`b765876`](https://github.com/Apacheli/Space/commit/b765876)) Fixed types
  for some HTTP methods that were added in the previous update
- ([`54f6914`](https://github.com/Apacheli/Space/commit/54f6914)) Check if
  caching is available so no useless loops are made

## [0.5.0-alpha](https://github.com/Apacheli/Space/compare/0.4.2-alpha...0.5.0-alpha) - 2021-04-10

### Added

- ([`ba0c340`](https://github.com/Apacheli/Space/commit/ba0c340),
  [`fac4f79`](https://github.com/Apacheli/Space/commit/fac4f79)) Added CDN
  endpoints
- ([`be2c9d3`](https://github.com/Apacheli/Space/commit/be2c9d3)) Log `reason`
  in gateway disconnect messages
- ([`75f8716`](https://github.com/Apacheli/Space/commit/75f8716)) Added client
  gateway event handler for `READY`
- ([`4021e92`](https://github.com/Apacheli/Space/commit/4021e92)) Updated
  `HTTPClient` to include `getGuildApplicationCommandPermissions`,
  `getApplicationCommandPermissions`, `editApplicationCommandPermissions`,
  `batchEditApplicationCommandPermissions`, `searchGuildMembers`,
  `getGuildWelcomeScreen`, `editGuildWelcomeScreen`,
  `updateCurrentUserVoiceState`, `updateUserVoiceState` methods
- ([`378f6d7`](https://github.com/Apacheli/Space/commit/378f6d7)) Added
  `Guild.voiceStates`
- ([`a20ab41`](https://github.com/Apacheli/Space/commit/a20ab41),
  [`bdb6623`](https://github.com/Apacheli/Space/commit/bdb6623)) Reworked
  caching system to make it more flexible (this will likely change in the
  future)
- ([`dd016e5`](https://github.com/Apacheli/Space/commit/dd016e5),
  [`1515272`](https://github.com/Apacheli/Space/commit/1515272),
  [`ff3f83f`](https://github.com/Apacheli/Space/commit/ff3f83f)) Added HTTP
  channel message methods to textable channels
- ([`0857e00`](https://github.com/Apacheli/Space/commit/0857e00)) Added
  `Client.channels`
- ([`b2ff17b`](https://github.com/Apacheli/Space/commit/b2ff17b)) Added HTTP
  methods to `Message`

### Changed

- ([`a9129e7`](https://github.com/Apacheli/Space/commit/a9129e7),
  [`4728ec7`](https://github.com/Apacheli/Space/commit/4728ec7)) More README
  style changes
- ([`54ad166`](https://github.com/Apacheli/Space/commit/54ad166)) Every file was
  renamed again to use underscores to better fit the Deno style convention
- ([`076ec79`](https://github.com/Apacheli/Space/commit/076ec79))
  `EventPipeline.dispatch` will `Promise.all` return value(s) now
- ([`aaeed19`](https://github.com/Apacheli/Space/commit/aaeed19)) Logger will
  color messages automatically

### Removed

- ([`4021e92`](https://github.com/Apacheli/Space/commit/4021e92)) Removed HTTP
  guild integration methods as they are no longer supported
- ([`0016822`](https://github.com/Apacheli/Space/commit/0016822)) Removed Guild
  channel getters

## [0.4.2-alpha](https://github.com/Apacheli/Space/compare/0.4.1-alpha...0.4.2-alpha) - 2021-04-04

### Added

- ([`026443b`](https://github.com/Apacheli/Space/commit/026443b),
  [`1f1d72b`](https://github.com/Apacheli/Space/commit/1f1d72b))
  - Added support for `GUILD_ROLE_*` events
  - Added `Guild.emojis`
  - Added `mention` getter to `Emoji`, `Member`, `Role`, and `User`

### Changed

- ([`3da4042`](https://github.com/Apacheli/Space/commit/3da4042)) Date
  properties are now numbers instead of ISO format
- ([`087d5e9`](https://github.com/Apacheli/Space/commit/087d5e9)) Most
  `Snowflake`s should be a `bigint` now

### Fixed

- ([`3cb02d1`](https://github.com/Apacheli/Space/commit/3cb02d1)) Use `update`
  instead of `add` when caching users in a guild
- ([`e5eb4fb`](https://github.com/Apacheli/Space/commit/e5eb4fb))
  - Corrected some coloring in `HTTPError` messages
  - Fixed a bug when serializing a
    [`204`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
    response

## [0.4.1-alpha](https://github.com/Apacheli/Space/compare/0.4.0-alpha...0.4.1-alpha) - 2021-04-02

Mostly development-related changes.

### Added

- ([`df6fad3`](https://github.com/Apacheli/Space/commit/df6fad3),
  [`2d66d3b`](https://github.com/Apacheli/Space/commit/2d66d3b)) Added
  future-proof support for thread channel types
- ([`8341857`](https://github.com/Apacheli/Space/commit/8341857))
  - Updated HTTP methods to use `Snowflake`s instead of `string`s
  - Added `HTTPClient.bulkOverwriteGlobalApplicationCommands` and
    `HTTPClient.bulkOverwriteGuildApplicationCommands`
- ([`2d66d3b`](https://github.com/Apacheli/Space/commit/2d66d3b)) Added `User`
  structure and `Client.users`

### Changed

- ([`c79e517`](https://github.com/Apacheli/Space/commit/c79e517),
  [`7c913e4`](https://github.com/Apacheli/Space/commit/7c913e4)) README has more
  useful information

## [0.4.0-alpha](https://github.com/Apacheli/Space/compare/0.3.4-alpha...0.4.0-alpha) - 2021-03-31

Guild stage voice channels will likely break as I wasn't able to test them.

### Added

- ([`e6e8e2e`](https://github.com/Apacheli/Space/commit/e6e8e2e)) Added channel
  structures
- ([`95fa0bc`](https://github.com/Apacheli/Space/commit/95fa0bc)) Added client
  gateway event support for `CHANNEL_*` events
- ([`84fb6d4`](https://github.com/Apacheli/Space/commit/84fb6d4))
  `EventPipeline.dispatch` can now accept multiple arguments
- ([`fbe3f64`](https://github.com/Apacheli/Space/commit/fbe3f64)) HTTP error
  messages are better formatted for easier reading
- ([`4fc4114`](https://github.com/Apacheli/Space/commit/4fc4114)) `Storable` can
  now accept `bigint`s

### Fixed

- ([`4fc4114`](https://github.com/Apacheli/Space/commit/4fc4114))
  `Guild.*Channel` getters are now methods due to the `Promise` nature of
  `Storable`
- ([`06b1d77`](https://github.com/Apacheli/Space/commit/06b1d77)) Export a
  `mod.ts` file for each directory

## [0.3.4-alpha](https://github.com/Apacheli/Space/compare/b904152...0633844) - 2021-03-29

### Added

- Added `Member` and `Role` structures
- Use `bigint` for `Struct`s' snowflakes
- Added `timestamp`, `internalWorkerID`, `internalProcessID`, and `increment`
  getters to `Struct`
- Added support for client gateway guild events

### Changed

- Renamed a few classes
- Lowercased filenames

### Removed

- Removed `ClientStores` as `ClientOptions` now accepts them

## [0.3.3-alpha](https://github.com/Apacheli/Space/compare/89e6d7b...16c7e1c) - 2021-03-23

This update will prepare the 0.4.0-alpha release when all client gateway event
handlers are complete.

### Added

- Autogenerated client gateway event handlers
- Added an interactions client `Commander` with no support at the moment

### Fixed

- Fixed documentation issues for `Requester.executeSlackCompatibleWebhook` and
  `Requester.executeGitHubCompatibleWebhook`

## [0.3.2-alpha](https://github.com/Apacheli/Space/compare/3f07d4b...17af9c8) - 2021-03-22

The library is unstable, so expect dramatic changes to occur in the future.

### Added

- Added a Base class for Discord's structures

### Fixed

- Fixed HTTP rate limiting bugs
- Fixed `Shard.listen` interface bug
- Made back and forth changes to `ClientStores`
