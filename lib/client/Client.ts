import Requester, { RequesterOptions } from "../api/http/Requester.ts";
import Sharder, { SharderConnectData } from "../api/websocket/Sharder.ts";
import Guild from "../classes/guild/Guild.ts";
import Cache, { Storable } from "../util/Cache.ts";
import { PartialKeys } from "../util/util.ts";

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
    this.guilds = options?.guilds ?? new Cache<Guild>(Guild, this);
    this.rest = new Requester(token, options?.restOptions);
  }

  async connect(data: PartialKeys<SharderConnectData, "url">) {
    // @ts-ignore: TypeScript is being annoying
    this.gateway.connect({
      shards: 1,
      ...!data.url && await this.rest.getGatewayBot(),
      ...data,
    });
  }
}
