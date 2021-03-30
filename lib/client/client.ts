import Requester, { HTTPClientOptions } from "../api/http/httpclient.ts";
import Sharder, { GatewayClientConnectData } from "../api/websocket/gatewayclient.ts";
import Guild from "../structs/guild/guild.ts";
import Cache, { Storable } from "../util/cache.ts";
import { PartialKeys } from "../util/util.ts";

export interface ClientOptions {
  guilds?: Storable<Guild>;
  restOptions?: HTTPClientOptions;
}

export default class Client {
  gateway;
  guilds;
  rest;

  constructor(token: string, options?: ClientOptions) {
    this.gateway = new Sharder(token);
    this.guilds = options?.guilds ?? new Cache<Guild>(Guild, this);
    this.rest = new Requester(token, options?.restOptions);
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
