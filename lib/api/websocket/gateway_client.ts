import { GatewayIdentifyDataPartial, Shard } from "./shard.ts";
import { AsyncEventTarget, logger, sleep } from "../../util/mod.ts";

export type GatewayClientConnectData =
  & {
    firstShardID?: number;
    lastShardID?: number;
    url: string;
  }
  & Omit<GatewayIdentifyDataPartial, "shard">;

export const SHARD_CONNECT_DELAY = 5000;

export class GatewayClient extends AsyncEventTarget {
  shards: Shard[] = [];

  constructor(public token: string) {
    super();
  }

  connect(data: GatewayClientConnectData) {
    const lastShardID = data.lastShardID ?? data.shards;
    if (!lastShardID) {
      throw new Error("Invalid number of shards to spawn.");
    }
    const firstShardID = data.firstShardID ?? 0;
    this.spawnShards(lastShardID, firstShardID);
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
      (async () => {
        for await (const [payload] of shard.listen("DISPATCH")) {
          this.dispatch(payload.t, payload.d, shard);
        }
      })();
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
}
