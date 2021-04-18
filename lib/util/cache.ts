import { ActualSnowflake, PossiblePromise } from "./util.ts";
import Client from "../client/client.ts";

export interface StructureDataBigInt {
  id: ActualSnowflake;
}

export interface Storable<V> {
  add(item: StructureDataBigInt): PossiblePromise<V>;
  get(id: ActualSnowflake): PossiblePromise<V | undefined>;
  has(id: ActualSnowflake): PossiblePromise<boolean>;
  remove(id: ActualSnowflake): PossiblePromise<V | undefined>;
  update(item: StructureDataBigInt): PossiblePromise<V>;
}

export interface CacheEntry extends StructureDataBigInt {
  update?(data: any): void;
}

export class Cache<V extends CacheEntry> extends Map<ActualSnowflake, V>
  implements Storable<V> {
  constructor(
    public client?: Client,
    public baseClass?: new (data: any, client: Client) => V,
  ) {
    super();
  }

  add(item: V, _existing?: V): V {
    const existing = _existing ?? this.get(item.id);
    if (this.client && this.baseClass && !(item instanceof this.baseClass)) {
      if (existing) {
        return this.update(item, existing);
      }
      item = new this.baseClass(item, this.client);
      item.update?.(item);
    }
    if (!this.baseClass && typeof item.id !== "bigint") {
      item.id = BigInt(item.id);
    }
    this.set(item.id, item);
    return item;
  }

  get(id: ActualSnowflake) {
    return super.get(BigInt(id));
  }

  has(id: ActualSnowflake) {
    return super.has(BigInt(id));
  }

  remove(id: ActualSnowflake) {
    const item = this.get(id);
    if (item) {
      this.delete(item.id);
      return item;
    }
  }

  update(item: V, _existing?: V) {
    const existing = _existing ?? this.get(item.id);
    if (!existing?.update || this.baseClass && item instanceof this.baseClass) {
      return this.add(item, existing);
    }
    existing.update(item);
    return existing;
  }
}

export default Cache;
