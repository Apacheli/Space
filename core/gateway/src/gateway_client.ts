import type {
  GatewayVersions,
  GetGatewayBotBody,
  IdentifyPayloadData as _c,
} from "../../types/src/topics/gateway.ts";
import { GatewayEvents } from "../../types/src/topics/gateway.ts";
import { RateLimitBucket } from "../../util/src/rate_limit_bucket.ts";
import type { PartialKeys } from "../../util/src/types.ts";
import {
  GATEWAY_VERSION as _a,
  SHARD_CONCURRENCY_DELAY as _b,
} from "./constants.ts";
import { Shard } from "./shard.ts";

/** Gateway client connect data */
export interface GatewayClientConnectData
  extends PartialKeys<GetGatewayBotBody, "session_start_limit"> {
  /** The index to start the iteration shard spawning process */
  firstShardId?: number;
  /** The shard spawning terminator index */
  lastShardId?: number;
  /** Gateway version */
  version?: GatewayVersions;
}

/** Gateway client */
export class GatewayClient {
  /** Shard rate limit bucket */
  bucket?: RateLimitBucket;
  /** Shards controlled by the gateway client */
  shards: Shard[] = [];

  /**
   * @param token Authentication bot token
   */
  constructor(public token: string) {
  }

  /** Connect shards */
  connect(_data: GatewayClientConnectData) {
  }

  /** Disconnect every shard */
  disconnect() {
  }

  /** Disconnect and connect every shard in sequential order */
  reconnect() {
  }

  /** Connect a shard */
  connectShard() {
  }

  /** Create a shard  */
  createShard() {
  }

  /** Disconnect a shard */
  disconnectShard() {
  }

  /** Reconnect a shard */
  reconnectShard() {
  }
}
