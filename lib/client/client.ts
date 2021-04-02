import { HTTPClientOptions, RESTClient } from "../api/http/mod.ts";
import {
  GatewayClient,
  GatewayClientConnectData,
} from "../api/websocket/mod.ts";
import { Guild, User } from "../structs/mod.ts";
import { Cache, PartialKeys, Storable } from "../util/mod.ts";

export interface ClientOptions {
  guilds?: Storable<Guild>;
  restOptions?: HTTPClientOptions;
  users?: Storable<User>;
}

export class Client {
  gateway;
  guilds;
  rest;
  users;

  constructor(token: string, options?: ClientOptions) {
    this.gateway = new GatewayClient(token);
    this.guilds = options?.guilds ?? new Cache<Guild>(Guild, this);
    this.rest = new RESTClient(token, options?.restOptions);
    this.users = options?.users ?? new Cache<User>(User, this);
  }

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
