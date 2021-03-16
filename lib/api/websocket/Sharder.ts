import Shard, { GatewayIdentifyDataPartial } from "./Shard.ts";
import EventPipeline from "../../util/EventPipeline.ts";
import * as logger from "../../util/logger.ts";
import { sleep } from "../../util/util.ts";

export type SharderConnectData =
  & {
    firstShardID?: number;
    lastShardID?: number;
    url: string;
  }
  & Omit<GatewayIdentifyDataPartial, "shard">;

export const SHARD_CONNECT_DELAY = 5000;

export default class Sharder extends EventPipeline {
  shards: Shard[] = [];

  // private shardCount = 0;

  constructor(public token: string) {
    super();
  }

  connect(data: SharderConnectData) {
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
    // this.shardCount = shards;
    this.connectShards(data.url, {
      shards,
      ...data,
    });
  }

  spawnShards(lastShardID: number, firstShardID = 0) {
    for (let i = firstShardID; i < lastShardID; i++) {
      const shard = new Shard(this.token, i);
      shard.listen(
        "DISPATCH",
        (payload) => this.dispatch(payload.t, { data: payload.d, shard }),
      );
      this.shards.push(shard);
    }
  }

  async connectShards(url: string, identifyData?: GatewayIdentifyDataPartial) {
    let i = 0;
    do {
      const shard = this.shards[i++];
      await shard.connect(url);
      shard.resumeOrIdentify(true, identifyData);
    } while (i < this.shards.length && await sleep(SHARD_CONNECT_DELAY, true));
  }

  /* requestGuildMembers(data) {
    const shard = this.shards[parseInt(data.guild_id) & this.shardCount];
    return shard.requestGuildMembers(data);
  } */
}
