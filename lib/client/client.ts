import { APIApplication, GatewayPresenceUpdate } from "../../deps.ts";
import { HTTPClientOptions, RESTClient } from "../api/http/mod.ts";
import {
  GatewayClient,
  GatewayClientConnectData,
} from "../api/websocket/mod.ts";
import { Guild, User } from "../structs/mod.ts";
import { Cache, PartialKeys, Storable } from "../util/mod.ts";

export interface APIPresence extends GatewayPresenceUpdate {
  id: bigint;
}

export interface ClientOptions {
  guilds?: Storable<Guild>;
  presences: Storable<APIPresence>;
  restOptions?: HTTPClientOptions;
  users?: Storable<User>;
}

export class Client {
  application?: Pick<APIApplication, "id" | "flags">;
  gateway;
  guilds;
  presences;
  rest;
  user?: User;
  users;

  constructor(token: string, options?: ClientOptions) {
    this.gateway = new GatewayClient(token);
    this.guilds = options?.guilds ?? new Cache<Guild>(this, Guild);
    this.presences = options?.presences ?? new Cache<APIPresence>(this);
    this.rest = new RESTClient(token, options?.restOptions);
    this.users = options?.users ?? new Cache<User>(this, User);
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
