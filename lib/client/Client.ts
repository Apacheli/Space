import {
  APIChannel,
  APIGuild,
  APIUser,
  GatewayPresenceUpdateDispatchData,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import Requester, { RequesterOptions } from "../api/http/Requester.ts";
import Sharder, { SharderConnectData } from "../api/websocket/Sharder.ts";
import Container, { Storable } from "../util/Container.ts";
import EventPipeline from "../util/EventPipeline.ts";

export type IDPresence = GatewayPresenceUpdateDispatchData & { id: string };

export interface ClientOptions {
  requesterOptions?: RequesterOptions;
  stores?: ClientStores;
}

export interface ClientStores {
  channels?: Storable<APIChannel>;
  guilds?: Storable<APIGuild>;
  presences?: Storable<IDPresence>;
  users?: Storable<APIUser>;
}

export default class Client extends EventPipeline {
  channels;
  guilds;
  requester;
  presences;
  sharder;
  users;

  constructor(token: string, options?: ClientOptions) {
    super();

    this.channels = options?.stores?.channels ?? new Container<APIChannel>();
    this.guilds = options?.stores?.guilds ?? new Container<APIGuild>();
    this.requester = new Requester(token, options?.requesterOptions);
    this.presences = options?.stores?.presences ?? new Container<IDPresence>();
    this.sharder = new Sharder(token);
    this.users = options?.stores?.users ?? new Container<APIUser>();
  }

  async connect(data: SharderConnectData) {
    let gatewayInfo;
    if (!(data.url && data.shards)) {
      gatewayInfo = await this.requester.getGatewayBot();
    }
    this.sharder.connect({
      ...gatewayInfo,
      ...data,
    });
  }
}
