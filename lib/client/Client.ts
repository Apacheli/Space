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

export interface ClientOptions extends RequesterOptions {
  channels?: Storable<APIChannel>;
  guilds?: Storable<APIGuild>;
  presences?: Storable<IDPresence>;
  users?: Storable<APIUser>;
}

export default class Client extends Sharder {
  channels;
  guilds;
  requester;
  presences;
  users;

  constructor(token: string, options?: ClientOptions) {
    super(token);

    this.channels = options?.channels ?? new Container<APIChannel>();
    this.guilds = options?.guilds ?? new Container<APIGuild>();
    this.requester = new Requester(token, options);
    this.presences = options?.presences ?? new Container<IDPresence>();
    this.users = options?.users ?? new Container<APIUser>();
  }

  async connect(data: SharderConnectData) {
    super.connect({
      shards: 1,
      ...!data.url && await this.requester.getGatewayBot(),
      ...data,
    });
  }
}
