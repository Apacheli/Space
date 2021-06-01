/** AsyncEventTarget receiver options */
export interface AsyncEventTargetReceiveOptions<T> {
  /** Time to wait in milliseconds before expiring (default: 60 seconds) */
  delay?: number;
  /** Filters out items that do not meet the provided function's conditions */
  filter?: (...received: T[]) => boolean | Promise<boolean>;
  /** The number of items needed to fulfill the receiver (default: 1) */
  limit?: number;
  /** Terminate the receiver if an item fulfills the terminator's conditions */
  terminate?: (...received: T[]) => boolean | Promise<boolean>;
}

/** A stream interface consumed by AsyncEventTarget */
export interface Listener<T> {
  /** Stream used for reading event data */
  readable: ReadableStream<T>;
  /** Writes to the reader */
  writer: WritableStreamDefaultWriter<T>;
}

/** Asynchronous event target using async iterators */
// deno-lint-ignore no-explicit-any
export class AsyncEventTarget<T = any> extends Map<string, Listener<T[]>[]> {
  /**
   * Listen to an event
   *
   *     for await (const [...] of AsyncEventTarget.listen("event")) {
   *       // ...
   *     }
   *
   * @param event The event to listen to
   */
  listen(event: string) {
    const { readable, writable } = new TransformStream<T[], T[]>();
    const listener: Listener<T[]> = {
      readable,
      writer: writable.getWriter(),
    };
    if (this.get(event)?.push(listener) === undefined) {
      this.set(event, [listener]);
    }
    return readable;
  }

  /**
   * Deafen an event
   *
   *     const readable = AsyncEventTarget.listen("event");
   *     AsyncEventTarget.deafen("event", readable);
   *
   * @param event The event to deafen
   * @param readable The stream to destroy. If none is provided, it will destroy
   * all of the provided event's listeners
   */
  deafen(event: string, readable?: ReadableStream<T[]>) {
    const listeners = this.get(event);
    if (!listeners) {
      return;
    }
    if (readable) {
      const index = listeners.findIndex((l) => l.readable === readable);
      if (index !== -1) {
        listeners.splice(index)[0].writer.close();
      }
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
   * @param args The data to pass into the writer stream
   */
  dispatch(event: string, ...args: T[]) {
    const listeners = this.get(event);
    listeners?.forEach(({ writer }) => writer.write(args));
  }

  /**
   * Receive an event with additional options such as a filter, limit, and timer
   *
   *     const received = await AsyncEventTarget.receive("event");
   *
   * @param event The event to start receiving from
   */
  async receive(event: string, {
    delay = 60_000,
    filter,
    terminate,
    limit = terminate ? Infinity : 1,
  }: AsyncEventTargetReceiveOptions<T> = {}) {
    const readable = this.listen(event);
    const chunks = [];
    const timeout = setTimeout(() => this.deafen(event, readable), delay);
    for await (const received of readable) {
      if (!(await filter?.(...received) ?? true)) {
        continue;
      }
      if (chunks.push(received) === limit || await terminate?.(...received)) {
        clearTimeout(timeout);
        this.deafen(event, readable);
        return chunks;
      }
    }
    throw new Error(`Receiver timed out (${delay / 1_000} seconds).`);
  }
}
