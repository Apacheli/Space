import { AsyncEventTarget } from "../../util/src/async_event_target.ts";
import { Shard } from "./shard.ts";

/** Gateway client */
export class GatewayClient extends AsyncEventTarget {
  shards: Shard[] = [];

  #token;

  constructor(token: string) {
    super();

    this.#token = token;
  }

  spawnShard() {
    // const shard = new Shard(this.#token);
  }
}
