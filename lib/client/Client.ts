import Requester, { RequesterOptions } from "../api/http/Requester.ts";
import Sharder, { SharderConnectData } from "../api/websocket/Sharder.ts";
import Guild from "../classes/guild/Guild.ts";
import Cache, { Storable } from "../util/Cache.ts";

export interface ClientOptions {
  guilds?: Storable<Guild>;
  restOptions?: RequesterOptions;
}

export default class Client {
  gateway;
  guilds;
  rest;

  constructor(token: string, options?: ClientOptions) {
    this.gateway = new Sharder(token);
    this.guilds = options?.guilds ?? new Cache<Guild>();
    this.rest = new Requester(token, options?.restOptions);
  }

  async connect(data: SharderConnectData) {
    this.gateway.connect({
      shards: 1,
      ...!data.url && await this.rest.getGatewayBot(),
      ...data,
    });
  }
}
