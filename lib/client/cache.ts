import type { ActualSnowflake, PossiblePromise } from "../util/util.ts";
import type { Client } from "../mod.ts";

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
  update?(data: CacheEntry): void;
}

export class Cache<V extends CacheEntry> extends Map<ActualSnowflake, V>
  implements Storable<V> {
  constructor(
    public client?: Client,
    public baseClass?: new (data: CacheEntry, client: Client) => V,
  ) {
    super();
  }

  add(item: V, _existing?: V): V {
    const existing = _existing ?? this.get(item.id);
    if (this.client && this.baseClass && !(item instanceof this.baseClass)) {
      if (existing) {
        return this.update(item, existing);
      }
      const data = item;
      item = new this.baseClass(data, this.client);
      item.update?.(data);
    } else {
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