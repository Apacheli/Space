import { Shard, ShardOptions } from "./shard.ts";
import {
  AsyncEventTarget,
  logger,
  RateLimitBucket,
  RequiredKeys,
} from "../../util/mod.ts";

export interface GatewayClientConnectData extends Omit<ShardOptions, "shard"> {
  firstShardID?: number;
  lastShardID?: number;
}

export const GATEWAY_VERSION = 8;
export const SHARD_CONNECT_DELAY = 5000;

// deno-lint-ignore no-explicit-any
export class GatewayClient extends AsyncEventTarget<any> {
  shards: Shard[] = [];
  queue = new RateLimitBucket(1, SHARD_CONNECT_DELAY);

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
    this.shards.forEach((shard) => this.connectShard(shard));
  }

  spawnShards(data: RequiredKeys<GatewayClientConnectData, "lastShardID">) {
    for (let i = data.firstShardID ?? 0; i < data.lastShardID; i++) {
      const s = new Shard(this.token, data, i);
      this.shards.push(s);
      (async () => {
        for await (const [payload] of s.listen("DISPATCH")) {
          this.dispatch(payload.t, payload.d, s);
        }
      })();
      (async () => {
        for await (const [resumable, reconnectable] of s.listen("DISCONNECT")) {
          if (reconnectable) {
            this.connectShard(s, resumable, reconnectable);
          }
        }
      })();
    }
  }

  async connectShard(shard: Shard, resumable = true, reconnectable = false) {
    if (this.queue.locked || this.queue.rateLimited) {
      this.queue.add(() => this.connectShard(shard, resumable, reconnectable));
      return;
    }
    this.queue.lock();
    await shard.connect(reconnectable);
    shard.resumeOrIdentify(resumable);
    this.queue.unlock();
    this.queue.next();
  }
}
