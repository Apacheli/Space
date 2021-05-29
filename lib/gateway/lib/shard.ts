import { DispatchPayload, GatewayEvents } from "../../types/mod.ts";
import { AsyncEventTarget } from "../../util/mod.ts";

export class Shard
  extends AsyncEventTarget<Record<GatewayEvents, DispatchPayload["d"]>> {
}

const d = new Shard().listen(GatewayEvents.ApplicationCommandCreate);
