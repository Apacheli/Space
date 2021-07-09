// https://discord.dev/topics/opcodes-and-status-codes

/** https://discord.dev/topics/opcodes-and-status-codes#gateway-gateway-opcodes */
export enum GatewayOpcodes {
  /** An event was dispatched. */
  Dispatch,
  /** Fired periodically by the client to keep the connection alive. */
  Heartbeat,
  /** Starts a new session during the initial handshake. */
  Identify,
  /** Update the client's presence. */
  PresenceUpdate,
  /** Used to join/leave or move between voice channels. */
  VoiceStateUpdate,
  /** Resume a previous session that was disconnected. */
  Resume = 6,
  /** You should attempt to reconnect and resume immediately. */
  Reconnect,
  /** Request information about offline guild members in a large guild. */
  RequestGuildMembers,
  /** The session has been invalidated. You should reconnect and identify/resume accordingly. */
  InvalidSession,
  /** Sent immediately after connecting, contains the `heartbeat_interval` to use. */
  Hello,
  /** Sent in response to receiving a heartbeat to acknowledge that it has been received. */
  HeartbeatACK,
}

/** https://discord.dev/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes */
export enum GatewayCloseEventCodes {
  /** We're not sure what went wrong. Try reconnecting? */
  UnknownError = 4000,
  /** You sent an invalid [Gateway opcode](https://discord.dev/topics/opcodes-and-status-codes#gateway-gateway-opcodes) or an invalid payload for an opcode. Don't do that! */
  UnknownOpcode,
  /** You sent an invalid [payload](https://discord.dev/topics/gateway#sending-payloads) to us. Don't do that! */
  DecodeError,
  /** You sent us a payload prior to [identifying](https://discord.dev/topics/gateway#identify). */
  NotAuthenticated,
  /** The account token sent with your [identify payload](https://discord.dev/topics/gateway#identify) is incorrect. */
  AuthenticationFailed,
  /** You sent more than one identify payload. Don't do that! */
  AlreadyAuthenticated,
  /** The sequence sent when [resuming](https://discord.dev/topics/gateway#resume) the session was invalid. Reconnect and start a new session. */
  InvalidSeq = 4007,
  /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this. */
  RateLimited,
  /** Your session timed out. Reconnect and start a new one. */
  SessionTimedOut,
  /** You sent us an invalid [shard when identifying](https://discord.dev/topics/gateway#sharding). */
  InvalidShard,
  /** The session would have handled too many guilds - you are required to [shard](https://discord.dev/topics/gateway#sharding) your connection in order to connect. */
  ShardingRequired,
  /** You sent an invalid version for the gateway. */
  InvalidAPIVersion,
  /** You sent an invalid intent for a [Gateway Intent](https://discord.dev/topics/gateway#gateway-intents). You may have incorrectly calculated the bitwise value. */
  InvalidIntents,
  /** You sent a disallowed intent for a [Gateway Intent](https://discord.dev/topics/gateway#gateway-intents). You may have tried to specify an intent that you [have not enabled or are not approved for](https://discord.dev/topics/gateway#privileged-intents). */
  DisallowedIntents,
}

/** https://discord.dev/topics/opcodes-and-status-codes#voice-voice-opcodes */
export enum VoiceOpcodes {
  /** Begin a voice websocket connection. */
  Identify,
  /** Select the voice protocol. */
  SelectProtocol,
  /** Complete the websocket handshake. */
  Ready,
  /** Keep the websocket connection alive. */
  Heartbeat,
  /** Describe the session. */
  SessionDescription,
  /** Indicate which users are speaking. */
  Speaking,
  /** Sent to acknowledge a received client heartbeat. */
  HeartbeatACK,
  /** Resume a connection. */
  Resume,
  /** Time to wait between sending heartbeats in milliseconds. */
  Hello,
  /** Acknowledge a successful session resume. */
  Resumed,
  /** A client has disconnected from the voice channel */
  ClientDisconnect = 13,
}

/** https://discord.dev/topics/opcodes-and-status-codes#voice-voice-close-event-codes */
export enum VoiceCloseEventCodes {
  /** You sent an invalid [opcode](https://discord.dev/topics/opcodes-and-status-codes#voice-voice-opcodes). */
  UnknownOpcode = 4001,
  /** You sent a invalid payload in your [identifying](https://discord.dev/topics/gateway#identify) to the Gateway. */
  FailedToDecodePayload,
  /** You sent a payload before [identifying](https://discord.dev/topics/gateway#identify) with the Gateway. */
  NotAuthenticated,
  /** The token you sent in your [identify](https://discord.dev/topics/gateway#identify) payload is incorrect. */
  AuthenticationFailed,
  /** You sent more than one [identify](https://discord.dev/topics/gateway#identify) payload. Stahp. */
  AlreadyAuthenticated,
  /** Your session is no longer valid. */
  SessionNoLongerValid,
  /** Your session has timed out. */
  SessionTimeout = 4009,
  /** We can't find the server you're trying to connect to. */
  ServerNotFound = 4011,
  /** We didn't recognize the [protocol](https://discord.dev/topics/voice-connections#establishing-a-voice-udp-connection-example-session-description-payload) you sent. */
  UnknownProtocol,
  /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect. */
  Disconnected = 4014,
  /** The server crashed. Our bad! Try [resuming](https://discord.dev/topics/voice-connections#resuming-voice-connection). */
  VoiceServerCrashed,
  /** We didn't recognize your [encryption](https://discord.dev/topics/voice-connections#encrypting-and-sending-voice). */
  UnknownEncryptionMode,
}

/** https://discord.dev/topics/opcodes-and-status-codes#http-http-response-codes */
export enum HTTPResponseCodes {
  /** The request completed successfully. */
  Ok = 200,
  /** The entity was created successfully. */
  Created,
  /** The request completed successfully but returned no content. */
  NoContent = 204,
  /** The entity was not modified (no action was taken). */
  NotModified = 304,
  /** The request was improperly formatted, or the server couldn't understand it. */
  BadRequest = 400,
  /** The `Authorization` header was missing or invalid. */
  Unauthorized,
  /** The `Authorization` token you passed did not have permission to the resource. */
  Forbidden = 403,
  /** The resource at the location specified doesn't exist. */
  NotFound,
  /** The HTTP method used is not valid for the location specified. */
  MethodNotAllowed,
  /** You are being rate limited, see [Rate Limits](https://discord.dev/topics/rate-limits). */
  TooManyRequests = 429,
  /** The server had an error processing your request (these are rare). */
  GatewayUnavailable = 502,
}

/** https://discord.dev/topics/opcodes-and-status-codes#json-json-error-codes */
export enum JSONErrorCodes {
  /** General error (such as a malformed request body, amongst other things) */
  GeneralError,

  //#region 1xxxx
  /** Unknown account */
  UnknownAccount = 10001,
  /** Unknown application */
  UnknownApplication,
  /** Unknown channel */
  UnknownChannel,
  /** Unknown guild */
  UnknownGuild,
  /** Unknown integration */
  UnknownIntegration,
  /** Unknown invite */
  UnknownInvite,
  /** Unknown member */
  UnknownMember,
  /** Unknown message */
  UnknownMessage,
  /** Unknown permission overwrite */
  UnknownPermissionOverwrite,
  /** Unknown provider */
  UnknownProvider,
  /** Unknown role */
  UnknownRole,
  /** Unknown token */
  UnknownToken,
  /** Unknown user */
  UnknownUser,
  /** Unknown emoji */
  UnknownEmoji,
  /** Unknown webhook */
  UnknownWebhook,
  /** Unknown webhook service */
  UnknownWebhookService,
  /** Unknown session */
  UnknownSession = 10020,
  /** Unknown ban */
  UnknownBan = 10026,
  /** Unknown SKU */
  UnknownSKU,
  /** Unknown Store Listing */
  unknownStoreListing,
  /** Unknown entitlement */
  UnknownEntitlement,
  /** Unknown build */
  UnknownBuild,
  /** Unknown lobby */
  UnknownLobby,
  /** Unknown branch */
  UnknownBranch,
  /** Unknown store directory layout */
  UnknownStoreDirectoryLayout,
  /** Unknown redistributable */
  UnknownRedistributable = 10036,
  /** Unknown gift code */
  UnknownGiftCode = 10038,
  /** Unknown guild template */
  UnknownGuildTemplate = 10057,
  /** Unknown interaction */
  UnknownInteraction = 10062,
  /** Unknown application command */
  UnknownApplicationCommand,
  /** Unknown application command permissions */
  UnknownApplicationCommandPermissions = 10066,
  /** Unknown Stage Instance */
  UnknownStageInstance,
  /** Unknown Guild Member Verification Form */
  UnknownGuildMemberVerificationForm,
  /** Unknown Guild Welcome Screen */
  UnknownGuildWelcomeScreen,
  //#endregion 1xxxx

  //#region 2xxxx
  /** Bots cannot use this endpoint */
  EndpointBotNotAllowed = 20001,
  /** Only bots can use this endpoint */
  EndpointBotOnly,
  /** Explicit content cannot be sent to the desired recipient(s) */
  CannotSendExplicitContentToRecipients = 20009,
  /** You are not authorized to perform this action on this application */
  ActionUnauthorizedOnApplication = 20012,
  /** This action cannot be performed due to slowmode rate limit */
  ActionSlowmodeRateLimit = 20016,
  /** Only the owner of this account can perform this action */
  ActionOwnerOnly = 20018,
  /** This message cannot be edited due to announcement rate limits */
  MessageUpdateAnnouncementRateLimit = 20022,
  /** The channel you are writing has hit the write rate limit */
  ChannelWriteRateLimit = 20028,
  /** Your Stage topic, server name, server description, or channel names contain words that are not allowed */
  IllegalGuildOrStageProperty = 20031,
  /** Guild premium subscription level too low */
  GuildPremiumTierTooLow = 20035,
  //#endregion 2xxxx

  //#region 3xxxx
  /** Maximum number of guilds reached (100) */
  MaximumGuilds = 30001,
  /** Maximum number of friends reached (1000) */
  MaximumRelationships,
  /** Maximum number of pins reached for the channel (50) */
  MaximumChannelPins,
  /** Maximum number of recipients reached (10) */
  MaximumRecipients,
  /** Maximum number of guild roles reached (250) */
  MaximumGuildRoles,
  /** Maximum number of webhooks reached (10) */
  MaximumWebhooks,
  /** Maximum number of emojis reached */
  MaximumEmojis,
  /** Maximum number of reactions reached (20) */
  MaximumReactions = 30010,
  /** Maximum number of guild channels reached (500) */
  MaximumGuildChannels = 30013,
  /** Maximum number of attachments in a message reached (10) */
  MaximumMessageAttachments = 30015,
  /** Maximum number of invites reached (1000) */
  MaximumInvites,
  /** Maximum number of animated emojis reached */
  MaximumAnimatedEmojis = 30018,
  /** Maximum number of server members reached */
  MaximumGuildMembers,
  /** Maximum number of server categories has been reached (5) */
  MaximumGuildChannelCategories = 30030,
  /** Guild already has a template */
  GuildAlreadyHasATemplate,
  /** Max number of thread participants has been reached */
  MaximumThreadParticipants = 30033,
  /** Maximum number of bans for non-guild members have been exceeded */
  MaximumNonGuildMembersBanned = 30035,
  /** Maximum number of bans fetches has been reached */
  MaximumBanFetches = 30037,
  /** Maximum number of stickers reached */
  MaximumStickers,
  //#endregion 3xxxx

  //#region 4xxxx
  /** Unauthorized. Provide a valid token and try again */
  Unauthorized = 40001,
  /** You need to verify your account in order to perform this action */
  ActionAccountRequiresVerification,
  /** You are opening direct messages too fast */
  DirectMessagesOpenTooQuickly,
  /** Request entity too large. Try sending something smaller in size */
  RequestEntityTooLarge = 40005,
  /** This feature has been temporarily disabled server-side */
  FeatureTemporarilyDisabled,
  /** The user is banned from this guild */
  UserBannedFromGuild,
  /** Target user is not connected to voice */
  UserVoiceNotConnected = 40032,
  /** This message has already been crossposted */
  MessageAlreadyCrossposted,
  /** An application command with that name already exists */
  ApplicationNameAlreadyTaken = 40041,
  //#endregion 4xxxx

  //#region 5xxxx
  /** Missing access */
  MissingAccess = 50001,
  /** Invalid account type */
  InvalidAccountType,
  /** Cannot execute action on a DM channel */
  ActionCannotExecuteInDirectMessages,
  /** Guild widget disabled */
  GuildWidgetDisabled,
  /** Cannot edit a message authored by another user */
  CannotEditMessageByAnotherUser,
  /** Cannot send an empty message */
  CannotSendEmptyMessage,
  /** Cannot send messages to this user */
  CannotSendMessageToUser,
  /** Cannot send messages in a voice channel */
  CannotSendMessageToVoiceChannel,
  /** Channel verification level is too high for you to gain access */
  ChannelVerificationLevelTooHigh,
  /** OAuth2 application does not have a bot */
  ApplicationNotABot,
  /** OAuth2 application limit reached */
  ApplicationLimitReached,
  /** Invalid OAuth2 state */
  InvalidOAuth2State,
  /** You lack permissions to perform that action */
  ActionLackingPermissions,
  /** Invalid authentication token provided */
  InvalidAuthenticationToken,
  /** Note was too long */
  NoteTooLong,
  /** Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete */
  InvalidMessageDeleteCount,
  /** A message can only be pinned to the channel it was sent in */
  InvalidChannelToPinMessage = 50019,
  /** Invite code was either invalid or taken */
  InvalidOrTakenInviteCode,
  /** Cannot execute action on a system message */
  ActionNotAllowedOnSystemMessage,
  /** Cannot execute action on this channel type */
  ActionNotAllowedOnChannel = 50024,
  /** Invalid OAuth2 access token provided */
  InvalidAccessToken,
  /** Missing required OAuth2 scope */
  MissingScope,
  /** Invalid webhook token provided */
  InvalidWebhookToken,
  /** Invalid role */
  InvalidRole,
  /** "Invalid Recipient(s)" */
  InvalidRecipients = 50033,
  /** A message provided was too old to bulk delete */
  MessageTooOldToBulkDelete,
  /** Invalid form body (returned for both `application/json` and `multipart/form-data` bodies), or invalid `Content-Type` provided */
  InvalidFormBody,
  /** An invite was accepted to a guild the application's bot is not in */
  InviteAcceptedToGuildBotNotIn,
  /** Invalid API version provided */
  InvalidAPIVersion = 50041,
  /** Cannot self-redeem this gift */
  CannotRedeemGift = 50054,
  /** Payment source required to redeem gift */
  PaymentSourceRequiredToRedeemGift = 50070,
  /** Cannot delete a channel required for Community guilds */
  CannotDeleteCommunityGuildChannel = 50074,
  /** Invalid sticker sent */
  InvalidStickerSent = 50081,
  /** Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread */
  OperationFailedOnArchivedThread = 50083,
  /** Invalid thread notification settings */
  InvalidThreadNotificationSettings,
  /** `before` value is earlier than the thread creation date */
  BeforeValueEarlierThanThread,
  //#endregion 5xxxx

  //#region 6xxxx
  /** Two factor is required for this operation */
  TwoFactorRequired = 60003,
  //#endregion 6xxxx

  //#region 8xxxx
  /** No users with DiscordTag exist */
  NoUserWithTag = 80004,
  //#endregion 8xxxx

  //#region 9xxxx
  /** Reaction was blocked */
  ReactionBlocked = 90001,
  //#endregion 9xxxx

  //#region 13xxxx
  /** API resource is currently overloaded. Try again a little later */
  APIResourceOverloaded = 130000,
  //#endregion 13xxxx

  //#region 15xxxx
  /** The Stage is already open */
  StageAlreadyOpened = 150006,
  //#endregion 15xxxx

  //#region 16xxxx
  /** A thread has already been created for this message */
  MessageAlreadyHasThread = 160004,
  /** Thread is locked */
  LockedThread,
  /** Maximum number of active threads reached */
  MaximumActiveThreads,
  /** Maximum number of active announcement threads reached */
  MaximumAnnouncementThreads,
  //#endregion 16xxxx
}

/** https://discord.dev/topics/opcodes-and-status-codes#rpc-rpc-error-codes */
export enum RPCErrorCodes {
  /** An unknown error occurred. */
  UnknownError = 1000,
  /** You sent an invalid payload. */
  InvalidPayload = 4000,
  /** Invalid command name specified. */
  InvalidCommand = 4002,
  /** Invalid guild ID specified. */
  InvalidGuild,
  /** Invalid event name specified. */
  InvalidEvent,
  /** Invalid channel ID specified. */
  InvalidChannel,
  /** You lack permissions to access the given resource. */
  InvalidPermissions,
  /** An invalid OAuth2 application ID was used to authorize or authenticate with. */
  InvalidClientId,
  /** An invalid OAuth2 application origin was used to authorize or authenticate with. */
  InvalidOrigin,
  /** An invalid OAuth2 token was used to authorize or authenticate with. */
  InvalidToken,
  /** The specified user ID was invalid. */
  InvalidUser,
  /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details. */
  OAuth2Error = 5000,
  /** An asynchronous `SELECT_TEXT_CHANNEL`/`SELECT_VOICE_CHANNEL` command timed out. */
  SelectChannelTimedOut,
  /** An asynchronous `GET_GUILD` command timed out. */
  GetGuildTimedOut,
  /** You tried to join a user to a voice channel but the user was already in one. */
  SelectVoiceForceRequired,
  /** You tried to capture more than one shortcut key at once. */
  CaptureShortcutAlreadyListening,
}

/** https://discord.dev/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes */
export enum RPCCloseEventCodes {
  /** You connected to the RPC server with an invalid client ID. */
  InvalidClientId = 4000,
  /** You connected to the RPC server with an invalid origin. */
  InvalidOrigin,
  /** You are being rate limited. */
  RateLimited,
  /** The OAuth2 token associated with a connection was revoked, get a new one! */
  TokenRevoked,
  /** The RPC Server version specified in the connection string was not valid. */
  InvalidVersion,
  /** The encoding specified in the connection string was not valid. */
  InvalidEncoding,
}
