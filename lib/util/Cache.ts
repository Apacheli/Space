import { Snowflake } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import { PossiblePromise } from "./util.ts";
import Structure from "../classes/Structure.ts";

export default class Cache<V extends Structure> extends Map<Snowflake, V>
  implements Storable<V> {
  add(item: V): V {
    const existing = this.get(item.id);
    if (existing) {
      return this.update(item);
    }
    this.set(item.id, item);
    return item;
  }

  remove(id: Snowflake) {
    const item = this.get(id);
    this.delete(id);
    return item;
  }

  update(item: V) {
    const existing = this.get(item.id);
    if (!existing) {
      return this.add(item);
    }
    existing.update(item);
    return existing;
  }
}

export interface Storable<V> {
  add(item: { id: Snowflake }): PossiblePromise<V>;
  get(id: Snowflake): PossiblePromise<V | undefined>;
  has(id: Snowflake): PossiblePromise<boolean>;
  remove(id: Snowflake): PossiblePromise<V | undefined>;
  update(item: { id: Snowflake }): PossiblePromise<V>;
}
