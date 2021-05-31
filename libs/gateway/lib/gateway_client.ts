import { AsyncEventTarget, RateLimitBucket } from "../../util/mod.ts";
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
  connect(data: GatewayClientData) {
    this.#bucket = new RateLimitBucket(data.maxConcurrency, 5_000);
    const lastShardId = data.lastShardId ?? data.shards;
    if (!lastShardId) {
      throw new RangeError("Invalid number of shards to spawn.");
    }
    const url = `${data.url}?v=${data.version ?? GATEWAY_VERSION}`;
    for (let i = data.firstShardId ?? 0; i < lastShardId; i++) {
      const shard = this.spawnShard(i, url, data);
      this.connectShard(shard, url, data);
      this.shards.push(shard);
    }
  }

  /**
   * Spawn a shard
   *
   *     const shard = GatewayClient.spawnShard(0, "wss://gateway.discord.gg", {
   *       intents: GatewayIntents.GuildMessages,
   *     });
   *
   * @param shardId The ID to assign the shard with
   * @param url The address to open a socket connection to
   * @param data Shard identify data
   */
  spawnShard(shardId: number, url: string, data: GatewayClientData) {
    const shard = new Shard(this.#token, shardId);
    (async () => {
      for await (const [event, data] of shard.listen(ShardEvents.Dispatch)) {
        this.dispatch(event, data);
      }
    })();
    (async (readable) => {
      for await (const [resumable, reconnectable] of readable) {
        if (reconnectable) {
          this.connectShard(shard, url, data, resumable);
        }
      }
    })(shard.listen(ShardEvents.Close));
    return shard;
  }

  /**
   * Connect a shard
   * @param shard The shard to connect
   * @param url The address to open a socket connection to
   * @param data Shard identify data
   * @param resumable If there is a session to RESUME
   */
  async connectShard(
    shard: Shard,
    url: string,
    data: GatewayClientData,
    resumable = true,
  ) {
    if (this.#bucket?.locked || this.#bucket?.rateLimited) {
      const func = () => this.connectShard(shard, url, data, resumable);
      this.#bucket?.add(func, true);
      return;
    }
    this.#bucket?.lock();
    await shard.connect(url);
    shard.identifyOrResume(resumable, data);
    this.#bucket?.unlock();
    this.#bucket?.next();
  }
}
