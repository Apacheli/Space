import { Shard, ShardOptions } from "./shard.ts";
import {
  AsyncEventTarget,
  logger,
  RequiredKeys,
  sleep,
} from "../../util/mod.ts";

export interface GatewayClientConnectData extends Omit<ShardOptions, "shard"> {
  firstShardID?: number;
  lastShardID?: number;
  url: string;
}

export const GATEWAY_VERSION = 8;
export const SHARD_CONNECT_DELAY = 5000;

export class GatewayClient extends AsyncEventTarget {
  shards: Shard[] = [];

  constructor(public token: string) {
    super();
  }

  connect(data: Omit<GatewayClientConnectData, "id">) {
    const lastShardID = data.lastShardID ?? data.shards;
    if (!lastShardID) {
      throw new Error("Invalid number of shards to spawn.");
    }
    const encoding = `&encoding=${data.encoding ? "etf" : "json"}`;
    const url = `${data.url}?v=${data.version ?? GATEWAY_VERSION}${encoding}`;
    this.spawnShards({ lastShardID, ...data, url });
    const firstShardID = data.firstShardID ?? 0;
    const shards = data.shards ?? lastShardID - firstShardID;
    logger.debug?.(
      `Connecting ${lastShardID - firstShardID}/${shards} shards`,
      `(${firstShardID}-${lastShardID - 1}) to "${url}"`,
    );
    this.connectShards();
  }

  spawnShards(data: RequiredKeys<GatewayClientConnectData, "lastShardID">) {
    for (let i = data.firstShardID ?? 0; i < data.lastShardID; i++) {
      const shard = new Shard(this.token, data.url, data, i);
      this.shards.push(shard);
      (async () => {
        for await (const [payload] of shard.listen("DISPATCH")) {
          this.dispatch(payload.t, payload.d, shard);
        }
      })();
    }
  }

  async connectShards() {
    let i = 0;
    do {
      const shard = this.shards[i++];
      await shard.connect();
      shard.resumeOrIdentify(true);
    } while (i < this.shards.length && await sleep(SHARD_CONNECT_DELAY, true));
  }
}
