import { APIApplication } from "../../deps.ts";
import { HTTPClientOptions, RESTClient } from "../api/http/mod.ts";
import {
  GatewayClient,
  GatewayClientConnectData,
} from "../api/websocket/mod.ts";
import {
  APIPresence,
  APIVoiceState,
  Emoji,
  Guild,
  GuildChannel,
  Member,
  Role,
  User,
} from "../structs/mod.ts";
import {
  Cache,
  PartialKeys,
  RequiredKeys,
  Storable,
  StorableKey,
} from "../util/mod.ts";

export interface ClientOptions {
  cacheOptions?: ClientCacheOptions;
  restOptions?: HTTPClientOptions;
}

export interface ClientCacheOptions {
  guilds?: ClientCacheGuildOptions;
  users?: CacheCheckInput<User>;
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

export const cacheCheck = <V extends { id: StorableKey }>(
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
    this.gateway = new GatewayClient(token);
    this.guilds = cacheCheck(
      options?.cacheOptions?.guilds?.enabled,
      this,
      Guild,
    );
    this.rest = new RESTClient(token, options?.restOptions);
    this.users = cacheCheck(options?.cacheOptions?.users, this, User);
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
}

export default Client;
