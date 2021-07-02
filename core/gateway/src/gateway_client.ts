import { AsyncEventTarget } from "../../util/src/async_event_target.ts";
import { Shard } from "./shard.ts";

export class GatewayClient extends AsyncEventTarget {
  shards: Shard[] = [];
}
