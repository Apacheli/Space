import { Snowflake } from "../deps.ts";
import { PossiblePromise } from "./util.ts";
import Struct from "../structs/struct.ts";
import Client from "../client/client.ts";

export type StorableKey = bigint | Snowflake;

export interface Storable<V> {
  add(item: { id: StorableKey }): PossiblePromise<V>;
  get(id: StorableKey): PossiblePromise<V | undefined>;
  has(id: StorableKey): PossiblePromise<boolean>;
  remove(id: StorableKey): PossiblePromise<V | undefined>;
  update(item: { id: StorableKey }): PossiblePromise<V>;
}

export class Cache<V extends Struct> extends Map<V["id"], V>
  implements Storable<V> {
  constructor(
    public baseClass: new (data: any, client: Client) => V,
    public client: Client,
  ) {
    super();
  }

  add(item: { id: StorableKey } | V): V {
    const existing = this.get(item.id);
    if (!(item instanceof this.baseClass)) {
      if (existing) {
        return this.update(item);
      }
      item = new this.baseClass(item, this.client);
    }
    // @ts-ignore: This is checked
    this.set(item.id, item);
    // @ts-ignore: ^
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

  update(item: { id: StorableKey } | V) {
    const existing = this.get(item.id);
    if (!existing || item instanceof this.baseClass) {
      return this.add(item);
    }
    existing.update(item);
    return existing;
  }
}

export default Cache;
