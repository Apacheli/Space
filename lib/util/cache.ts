import { Snowflake } from "../deps.ts";
import { PossiblePromise } from "./util.ts";
import Struct from "../structs/struct.ts";
import Client from "../client/client.ts";

export interface Storable<V> {
  add(item: { id: Snowflake }): PossiblePromise<V>;
  get(id: Snowflake): PossiblePromise<V | undefined>;
  has(id: Snowflake): PossiblePromise<boolean>;
  remove(id: Snowflake): PossiblePromise<V | undefined>;
  update(item: { id: Snowflake }): PossiblePromise<V>;
}

export default class Cache<V extends Struct> extends Map<bigint, V>
  implements Storable<V> {
  constructor(
    public baseClass: new (data: any, client: Client) => V,
    public client: Client,
  ) {
    super();
  }

  add(item: { id: Snowflake } | V): V {
    const existing = this.get(item.id);
    if (!(item instanceof this.baseClass)) {
      if (existing) {
        return this.update(item);
      }
      item = new this.baseClass(item, this.client);
    }
    this.set(item.id, item);
    return item;
  }

  get(id: bigint | Snowflake) {
    return super.get(BigInt(id));
  }

  has(id: bigint | Snowflake) {
    return super.has(BigInt(id));
  }

  remove(id: Snowflake) {
    const item = this.get(id);
    this.delete(BigInt(id));
    return item;
  }

  update(item: { id: Snowflake } | V) {
    const existing = this.get(item.id);
    if (!existing || item instanceof this.baseClass) {
      return this.add(item);
    }
    existing.update(item);
    return existing;
  }
}
