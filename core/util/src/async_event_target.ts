import type { Awaitable } from "./types.ts";

/** AsyncEventTarget receive options */
export interface AsyncEventTargetReceiveOptions<T> {
  /** Time to wait in milliseconds before expiring */
  delay?: number;
  /** Filter out items that do not pass the `filter` function */
  filter?: (...chunk: T[]) => Awaitable<boolean>;
  /** The number of items needed to fulfill the receiver */
  limit?: number;
  /** Terminate early if an item passes the `terminate` function */
  terminate?: (...chunk: T[]) => Awaitable<boolean>;
}

/** Asynchronous version of `EventTarget` using async iterators */
// deno-lint-ignore no-explicit-any
export class AsyncEventTarget<T = any> extends Map<string, Listener<T[]>[]> {
  /**
   * Listen to an event
   *
   *     for await (const data of AsyncEventTarget.listen("event")) {
   *       // ...
   *     }
   *
   * @param event The event to listen to
   */
  listen(event: string) {
    const { readable, writable } = new TransformStream();
    const listener = new Listener<T[]>(readable, writable.getWriter());
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
  deafen(event: string, listener?: Listener<T[]>) {
    const listeners = this.get(event);
    if (!listeners) {
      return;
    }
    if (listener) {
      const index = listeners.indexOf(listener);
      listeners.splice(index, index > -1 ? 1 : 0)[0].writer.close();
      return;
    }
    this.delete(event);
    listeners.forEach(({ writer }) => writer.close());
  }

  /**
   * Dispatch an event
   *
   *     AsyncEventTarget.dispatch("event", 1, 2, 3);
   *
   * @param event The event to dispatch
   * @param args The data to pass into the writer
   */
  dispatch(event: string, ...args: T[]) {
    const listeners = this.get(event);
    listeners?.forEach(({ writer }) => writer.write(args));
  }

  /**
   * Receive event data with middleware options
   *
   *     const receiver = AsyncEventTarget.receive("event");
   *
   * @param event The event to start receiving from
   */
  async receive(event: string, {
    delay = 60_000,
    filter,
    terminate,
    limit = terminate ? Infinity : 1,
  }: AsyncEventTargetReceiveOptions<T> = {}) {
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

class Listener<T> {
  constructor(
    public readable: ReadableStream<T>,
    public writer: WritableStreamDefaultWriter<T>,
  ) {
  }

  async *[Symbol.asyncIterator]() {
    yield* this.readable;
  }
}
