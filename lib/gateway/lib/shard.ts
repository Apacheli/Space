import { DispatchPayload, GatewayEvents } from "../../types/mod.ts";
import { AsyncEventTarget } from "../../util/mod.ts";

export interface ShardGatewayEvents {
  test: "";
}

export class Shard extends AsyncEventTarget<ShardGatewayEvents> {
}
