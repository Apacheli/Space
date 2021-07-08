import type { Awaitable } from "./types.ts";

/** AsyncEventTarget receive options */
export interface AsyncEventTargetReceiveOptions<T extends unknown[]> {
  /** Time to wait in milliseconds before expiring */
  delay?: number;
  /** Filter out items that do not pass the `filter` function */
  filter?: (...chunk: T) => Awaitable<boolean>;
  /** The number of items needed to fulfill the receiver */
  limit?: number;
  /** Terminate early if an item passes the `terminate` function */
  terminate?: (...chunk: T) => Awaitable<boolean>;
}

export interface Listener<T extends unknown[]> {
  writer: WritableStreamDefaultWriter<T>;
  [Symbol.asyncIterator]: () => AsyncIterableIterator<T>;
}

/** Asynchronous version of `EventTarget` using async iterators */
export class AsyncEventTarget<T extends Record<string | number, unknown[]>>
  extends Map<keyof T, Listener<T[keyof T]>[]> {
  /**
   * Listen to an event
   *
   *     for await (const data of AsyncEventTarget.listen("event")) {
   *       // ...
   *     }
   *
   * @param event The event to listen to
   */
  listen<E extends keyof T>(event: E): Listener<T[E]> {
    const { readable, writable } = new TransformStream();
    const listener = {
      writer: writable.getWriter(),
      [Symbol.asyncIterator]: () => readable[Symbol.asyncIterator](),
    };
    if (this.get(event)?.push(listener) === undefined) {
      this.set(event, [listener]);
    }
    return listener;
  }

  /**
   * Deafen an event
   *
   *     const listener = AsyncEventTarget.listen("event");
   *     AsyncEventTarget.deafen("event", listener);
   *
   * @param event The event to deafen
   * @param listener The listener to destroy, or destroy every listener
   */
  deafen<E extends keyof T>(event: E, listener?: Listener<T[E]>) {
    const listeners = this.get(event);
    if (!listeners) {
      return;
    }
    if (listener) {
      const start = listeners.indexOf(listener);
      listeners.splice(start, start > -1 ? 1 : 0)[0]?.writer.close();
    } else {
      listeners.forEach(({ writer }) => writer.close());
    }
    if (listeners.length < 1) {
      this.delete(event);
    }
  }

  /**
   * Dispatch an event
   *
   *     AsyncEventTarget.dispatch("event", 1, 2, 3);
   *
   * @param event The event to dispatch
   * @param args The data to pass into the writer
   */
  dispatch<E extends keyof T>(event: E, ...args: T[E]) {
    const listeners = this.get(event);
    listeners?.forEach(({ writer }) => writer.write(args));
  }

  /**
   * Receive event data with middleware options
   *
   *     const received = await AsyncEventTarget.receive("event");
   *
   * @param event The event to start receiving from
   */
  async receive<E extends keyof T>(event: E, {
    delay = 60_000,
    filter,
    terminate,
    limit = terminate ? Infinity : 1,
  }: AsyncEventTargetReceiveOptions<T[E]> = {}) {
    const listener = this.listen(event);
    const chunks = [];
    const timeout = setTimeout(() => this.deafen(event, listener), delay);
    for await (const chunk of listener) {
      if (
        (await filter?.(...chunk) ?? true) && chunks.push(chunk) === limit ||
        await terminate?.(...chunk)
      ) {
        clearTimeout(timeout);
        this.deafen(event, listener);
      }
    }
    return chunks;
  }
}
