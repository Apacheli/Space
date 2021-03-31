import { HTTPClientOptions, RESTClient } from "../api/http/mod.ts";
import {
  GatewayClient,
  GatewayClientConnectData,
} from "../api/websocket/mod.ts";
import { Guild } from "../structs/mod.ts";
import { Cache, PartialKeys, Storable } from "../util/mod.ts";

export interface ClientOptions {
  guilds?: Storable<Guild>;
  restOptions?: HTTPClientOptions;
}

export class Client {
  gateway;
  guilds;
  rest;

  constructor(token: string, options?: ClientOptions) {
    this.gateway = new GatewayClient(token);
    this.guilds = options?.guilds ?? new Cache<Guild>(Guild, this);
    this.rest = new RESTClient(token, options?.restOptions);
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
