// deno-lint-ignore-file no-explicit-any

import type { Awaitable } from "./types.ts";

/** AsyncEventTarget receive options */
export interface AsyncEventTargetReceiveOptions {
  /** Time to wait in milliseconds before expiring */
  delay?: number;
  /** Filter out items that do not pass the `filter` function */
  filter?: (...chunk: any[]) => Awaitable<boolean>;
  /** The number of items needed to fulfill the receiver */
  limit?: number;
  /** Terminate early if an item passes the `terminate` function */
  terminate?: (...chunk: any[]) => Awaitable<boolean>;
}

export interface Listener {
  writer: WritableStreamDefaultWriter<any[]>;
  [Symbol.asyncIterator]: () => AsyncIterableIterator<any[]>;
}

/** Asynchronous version of `EventTarget` using async iterators */
export class AsyncEventTarget extends Map<string | number, Listener[]> {
  /**
   * Listen to an event
   *
   *     for await (const data of AsyncEventTarget.listen("event")) {
   *       // ...
   *     }
   *
   * @param event The event to listen to
   */
  listen(event: string | number): Listener {
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
  deafen(event: string | number, listener?: Listener) {
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
  dispatch(event: string | number, ...args: any[]) {
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
  async receive(event: string | number, {
    delay = 60_000,
    filter,
    terminate,
    limit = terminate ? Infinity : 1,
  }: AsyncEventTargetReceiveOptions = {}) {
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
