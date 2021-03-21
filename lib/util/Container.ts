import { Snowflake } from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v8/mod.ts";
import { PossiblePromise } from "./util.ts";

export default class Container<V extends { id: Snowflake }>
  extends Map<Snowflake, V>
  implements Storable<V> {
  add(item: V) {
    this.set(item.id, item);
    return item;
  }

  remove(item: V) {
    this.delete(item.id);
    return item;
  }

  update(item: V) {
    return this.add(item);
  }
}

export interface Storable<V> {
  add(item: V): PossiblePromise<V>;
  get(id: Snowflake): PossiblePromise<V | undefined>;
  remove(item: V): PossiblePromise<V>;
  update(item: V): PossiblePromise<V>;
}
