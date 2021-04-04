import { Snowflake } from "../../deps.ts";
import { PossiblePromise } from "./util.ts";
import Client from "../client/client.ts";

export type StorableKey = bigint | Snowflake;

export interface Storable<V> {
  add(item: { id: StorableKey }): PossiblePromise<V>;
  get(id: StorableKey): PossiblePromise<V | undefined>;
  has(id: StorableKey): PossiblePromise<boolean>;
  remove(id: StorableKey): PossiblePromise<V | undefined>;
  update(item: { id: StorableKey }): PossiblePromise<V>;
}

interface CacheEntry {
  id: bigint;
  update?(data: any): void;
}

export class Cache<V extends CacheEntry> extends Map<StorableKey, V>
  implements Storable<V> {
  constructor(
    public client?: Client,
    public baseClass?: new (data: any, client: Client) => V,
  ) {
    super();
  }

  add(item: V): V {
    const existing = this.get(item.id);
    if (this.client && this.baseClass && !(item instanceof this.baseClass)) {
      if (existing) {
        return this.update(item);
      }
      item = new this.baseClass(item, this.client);
    }
    item.id = BigInt(item.id);
    this.set(item.id, item);
    return item;
  }

  get(id: StorableKey) {
    return super.get(BigInt(id));
  }

  has(id: StorableKey) {
    return super.has(BigInt(id));
  }

  remove(id: StorableKey) {
    const item = this.get(id);
    if (item) {
      this.delete(item.id);
      return item;
    }
  }

  update(item: V) {
    const existing = this.get(item.id);
    if (!existing || this.baseClass && item instanceof this.baseClass) {
      return this.add(item);
    }
    if (existing.update) {
      existing.update(item);
    } else {
      this.set(item.id, item);
    }
    return existing;
  }
}

export default Cache;
