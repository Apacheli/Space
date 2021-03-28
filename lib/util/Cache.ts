import { Snowflake } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import { PossiblePromise } from "./util.ts";
import Structure from "../classes/Structure.ts";
import Client from "../client/Client.ts";

export type Key = bigint | Snowflake;

export interface Storable<V> {
  add(item: { id: Key }): PossiblePromise<V>;
  get(id: Key): PossiblePromise<V | undefined>;
  has(id: Key): PossiblePromise<boolean>;
  remove(id: Key): PossiblePromise<V | undefined>;
  update(item: { id: Key }): PossiblePromise<V>;
}

export default class Cache<V extends Structure> extends Map<Key, V>
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

  get(id: Key) {
    return super.get(BigInt(id));
  }

  has(id: Key) {
    return super.has(BigInt(id));
  }

  remove(id: Key) {
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
