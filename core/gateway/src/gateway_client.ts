import { AsyncEventTarget } from "../../util/src/async_event_target.ts";
import { Shard } from "./shard.ts";

/** Gateway client */
export class GatewayClient extends AsyncEventTarget {
  shards: Shard[] = [];

  #token;

  /**
   * @param token Authentication bot token
   */
  constructor(token: string) {
    super();

    this.#token = token;
  }

  /** Create shards and begins connecting and identifying/resuming them */
  connect() {
  }

  /** Disconnect every shard */
  disconnect() {
  }

  /** Disconnect and connect each shard in sequential order */
  reconnect() {
  }
}
