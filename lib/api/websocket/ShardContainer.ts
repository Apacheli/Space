import Shard, { GatewayIdentifyDataPartial } from "./Shard.ts";
import EventPipeline from "../../util/EventPipeline.ts";
import * as logger from "../../util/logger.ts";
import { sleep } from "../../util/util.ts";

export type ShardContainerConnectData =
  & {
    firstShardID?: number;
    lastShardID?: number;
    url: string;
  }
  & Omit<GatewayIdentifyDataPartial, "shard">;

export default class ShardContainer extends EventPipeline {
  shards: Shard[] = [];

  constructor(public token: string) {
    super();
  }

  connect(data: ShardContainerConnectData) {
    const lastShardID = data.lastShardID ?? data.shards;
    if (!lastShardID) {
      throw new Error("Invalid number of shards to spawn.");
    }
    const firstShardID = data.firstShardID ?? 0;
    this.spawnShards(firstShardID, lastShardID);
    const shards = data.shards ?? lastShardID - firstShardID;
    logger.debug?.(
      `Connecting ${lastShardID - firstShardID}/${shards} shards`,
      `(${firstShardID}-${lastShardID - 1})`,
    );
    this.connectShards(data.url, {
      shards,
      ...data,
    });
  }

  spawnShards(lastShardID: number, firstShardID = 0) {
    for (let i = firstShardID; i < lastShardID; i++) {
      const shard = new Shard(this.token, i);
      this.shards.push(shard);
    }
  }

  async connectShards(url: string, identifyData?: GatewayIdentifyDataPartial) {
    let i = 0;
    do {
      const shard = this.shards[i++];
      await shard.connect(url);
      shard.resumeOrIdentify(true, identifyData);
    } while (i < this.shards.length && await sleep(5000, true));
  }
}
