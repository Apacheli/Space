import { AsyncEventTarget, logger, RateLimitBucket } from "../../util/mod.ts";
import { Shard, ShardEvents } from "./shard.ts";
import type { ShardIdentifyData } from "./shard.ts";
import type { GatewayVersions } from "../../types/mod.ts";

/** Gateway client data */
export interface GatewayClientData extends ShardIdentifyData {
  /** The index to start the iteration shard spawning process */
  firstShardId?: number;
  /** The shard spawning terminator index */
  lastShardId?: number;
  /** How many shards can be connected every 5 seconds */
  maxConcurrency?: number;
  /** Gateway version */
  version?: GatewayVersions;
}

/** Recommended gateway version for more users */
export const GATEWAY_VERSION = 9;

/** A class used for controlling sharding in one place */
export class GatewayClient extends AsyncEventTarget {
  /** The shards associated with this gateway client */
  shards: Shard[] = [];

  #bucket?: RateLimitBucket;
  #token: string;

  constructor(token: string) {
    super();

    this.#token = token;
  }

  /** Connect to the gateway */
  async connect(data: GatewayClientData) {
    this.#bucket = new RateLimitBucket(data.maxConcurrency, 5_000);

    const lastShardId = data.lastShardId ?? data.shards;
    if (!lastShardId) {
      throw new RangeError("Invalid number of shards to spawn.");
    }
    const firstShardId = data.firstShardId ?? 0;
    const shards = data.shards ?? lastShardId - firstShardId;
    const url = `${data.url}?v=${data.version ?? GATEWAY_VERSION}`;

    logger.debug?.(
      `Connecting ${lastShardId - firstShardId}/${shards} shards`,
      `(${firstShardId}-${lastShardId - 1}) to "${url}"`,
    );

    for (let i = firstShardId; i < lastShardId; i++) {
      const shard = this.#spawnShard(i, { ...data, url });
      await this.#connectShard(shard);
      this.shards.push(shard);
    }
  }

  #spawnShard = (shardId: number, data: GatewayClientData) => {
    const shard = new Shard(this.#token, data, shardId);
    (async () => {
      for await (const [event, data] of shard.listen(ShardEvents.Dispatch)) {
        this.dispatch(event, data);
      }
    })();
    (async (readable) => {
      for await (const [resumable, reconnectable] of readable) {
        if (reconnectable) {
          await this.#connectShard(shard, resumable);
        }
      }
    })(shard.listen(ShardEvents.Close));
    return shard;
  };

  #connectShard = (shard: Shard, resumable = true) => {
    this.#bucket?.task(async () => {
      await shard.connect();
      shard.resumeOrIdentify(resumable);
    });
  };
}
