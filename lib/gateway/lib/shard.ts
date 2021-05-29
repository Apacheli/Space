import { DispatchPayload, GatewayEvents } from "../../types/mod.ts";
import { AsyncEventTarget } from "../../util/mod.ts";

export class Shard
  extends AsyncEventTarget<{ [K in GatewayEvents]: DispatchPayload["d"][K] }> {
}

const d = new Shard().listen(GatewayEvents.ApplicationCommandCreate);
