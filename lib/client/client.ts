import { APIApplication } from "./deps.ts";
import { RESTClient, RESTClientOptions } from "./rest_client.ts";
import {
  GatewayClient,
  GatewayClientConnectData,
} from "../api/websocket/mod.ts";
import {
  APIPresence,
  APIVoiceState,
  Channel,
  Emoji,
  Guild,
  GuildChannel,
  Member,
  Role,
  User,
} from "../structures/mod.ts";
import {
  ActualSnowflake,
  Cache,
  PartialKeys,
  RequiredKeys,
  Storable,
} from "../util/mod.ts";

export interface ClientOptions {
  cache?: ClientCacheOptions;
  restOptions?: RESTClientOptions;
}

export interface ClientCacheOptions {
  channels?: CacheCheckInput<Channel>;
  guilds?: ClientCacheGuildOptions;
  presences?: CacheCheckInput<APIPresence>;
  users?: CacheCheckInput<User>;
  voiceStates?: CacheCheckInput<APIVoiceState>;
}

export interface ClientCacheGuildOptions {
  enabled?: CacheCheckInput<Guild>;
  emojis?: CacheCheckInput<RequiredKeys<Emoji, "id">>;
  channels?: CacheCheckInput<GuildChannel>;
  members?: CacheCheckInput<Member>;
  presences?: CacheCheckInput<APIPresence>;
  roles?: CacheCheckInput<Role>;
  voiceStates?: CacheCheckInput<APIVoiceState>;
}

export const cacheCheck = <V extends { id: ActualSnowflake }>(
  input?: CacheCheckInput<V>,
  client?: Client,
  ...args: any[]
) =>
  input === false
    ? undefined
    : typeof input === "function"
    ? input(client, ...args)
    : new Cache<V>(client, ...args);

export type CacheCheckInput<V> = boolean | ((...args: any) => Storable<V>);

/**
 * Class representing a client
 */
export class Client {
  channels?: Storable<Channel>;
  application?: Pick<APIApplication, "id" | "flags">;
  gateway;
  guilds?: Storable<Guild>;
  rest;
  user?: User;
  users?: Storable<User>;

  /**
   * Construct a new client
   * @param token Bot authentication token
   * @param options Client options
   */
  constructor(token: string, public options?: ClientOptions) {
    this.channels = cacheCheck(options?.cache?.channels, this, Channel);
    this.gateway = new GatewayClient(token);
    this.guilds = cacheCheck(options?.cache?.guilds?.enabled, this, Guild);
    this.rest = new RESTClient(token, options?.restOptions);
    this.users = cacheCheck(options?.cache?.users, this, User);
  }

  /**
   * Connect to Discord's gateway
   * @param data Gateway connection data. You must at least specify `intents`
   */
  async connect(data: PartialKeys<GatewayClientConnectData, "url">) {
    // @ts-ignore: TypeScript is being annoying
    this.gateway.connect({
      shards: 1,
      ...!data.url && await this.rest.getGatewayBot(),
      ...data,
    });
  }

  event(event: string) {
    return this.gateway.listen(event);
  }
}
