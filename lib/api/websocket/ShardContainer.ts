import Shard, { GatewayIdentifyDataPartial } from "./Shard.ts";
import EventPipeline from "../../util/EventPipeline.ts";
import * as logger from "../../util/logger.ts";
import { sleep } from "../../util/util.ts";

export type ShardContainerConnectData =
  & {
    firstShardID?: number;
    lastShardID?: number;
    maxConcurrency?: number;
  }
  & Omit<GatewayIdentifyDataPartial, "shard">;

export default class ShardContainer extends EventPipeline {
  shards: Shard[] = [];

  constructor(public token: string) {
    super();
  }

  connect(url: string, data: ShardContainerConnectData) {
    const lastShardID = data.lastShardID ?? data.shardCount;
    if (!lastShardID) {
      throw new Error("Invalid number of shards to spawn.");
    }
    const firstShardID = data.firstShardID ?? 0;
    this.spawnShards(firstShardID, lastShardID);
    const shardCount = data.shardCount ?? lastShardID - firstShardID;
    logger.debug?.(
      `Connecting ${lastShardID - firstShardID}/${shardCount} shards`,
      `(${firstShardID}-${lastShardID - 1})`,
    );
    this.connectShards(url, {
      shardCount,
      ...data,
    }, data.maxConcurrency);
  }

  spawnShards(lastShardID: number, firstShardID = 0) {
    for (let i = firstShardID; i < lastShardID; i++) {
      const shard = new Shard(this.token, i);
      this.shards.push(shard);
    }
  }

  async connectShards(
    url: string,
    identifyData?: GatewayIdentifyDataPartial,
    maxConcurrency = 1,
  ) {
    let i = 0;
    do {
      for (let c = 0; i < this.shards.length && c < maxConcurrency; c++) {
        const shard = this.shards[i++];
        await shard.connect(url);
        shard.resumeOrIdentify(true, identifyData);
      }
    } while (i < this.shards.length && await sleep(5000, true));
  }
}
