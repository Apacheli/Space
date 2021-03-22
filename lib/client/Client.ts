import {
  APIChannel,
  APIGuild,
  APIUser,
  GatewayPresenceUpdateDispatchData,
  Snowflake,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Requester, { RequesterOptions } from "../api/http/Requester.ts";
import Sharder, { SharderConnectData } from "../api/websocket/Sharder.ts";
import Container, { Storable } from "../util/Container.ts";

export type IDPresence = GatewayPresenceUpdateDispatchData & { id: Snowflake };

export interface ClientOptions {
  // gatewayOptions;
  restOptions?: RequesterOptions;
  stores?: ClientStores;
}

export interface ClientStores {
  channels?: Storable<APIChannel>;
  guilds?: Storable<APIGuild>;
  restOptions?: RequesterOptions;
  presences?: Storable<IDPresence>;
  users?: Storable<APIUser>;
}

export default class Client {
  channels;
  gateway;
  guilds;
  rest;
  presences;
  users;

  constructor(token: string, options?: ClientOptions) {
    this.channels = options?.stores?.channels ?? new Container<APIChannel>();
    this.gateway = new Sharder(token, /* options?.gatewayOptions */);
    this.guilds = options?.stores?.guilds ?? new Container<APIGuild>();
    this.rest = new Requester(token, options?.restOptions);
    this.presences = options?.stores?.presences ?? new Container<IDPresence>();
    this.users = options?.stores?.users ?? new Container<APIUser>();
  }

  async connect(data: SharderConnectData) {
    this.gateway.connect({
      shards: 1,
      ...!data.url && await this.rest.getGatewayBot(),
      ...data,
    });
  }
}
