/** AsyncEventTarget receiver options */
export interface AsyncEventTargetReceiveOptions<T> {
  /** Time to wait before expiring (default: 60 seconds) */
  delay?: number;
  /** Filters out entries that do not meet the provided function's conditions */
  filter?: (...received: T[]) => boolean | Promise<boolean>;
  /** The capacity of entries to hold */
  limit?: number;
}

/** A stream interface consumed by AsyncEventTarget */
export interface ListenerStream<T> {
  /** Stream used for reading event data */
  readable: ReadableStream<T>;
  /** Writes to the reader */
  writer: WritableStreamDefaultWriter<T>;
}

/** Asynchronous event target taking advtange of async iterators */
export class AsyncEventTarget<T> extends Map<string, ListenerStream<T[]>[]> {
  /**
   * Listen to an event
   *
   *     for await (const [...] of AsyncEventTarget.listen("event")) {
   *       // ...
   *     }
   * @param event The event to listen to
   */
  listen(event: string) {
    const { readable, writable } = new TransformStream<T[], T[]>();
    const listener = { readable, writer: writable.getWriter() };
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
        listeners.splice(index, 1)[0].writer.close();
      }
      return;
    }
    this.delete(event);
    listeners.forEach(({ writer }) => writer.close());
  }

  dispatch(event: string, ...args: T[]) {
    const listeners = this.get(event);
    listeners?.forEach(({ writer }) => writer.write(args));
  }

  /**
   * Receive an event with additional options such as a filter, limit, and timer
   *
   *     const results = await AsyncEventTarget.receive("event");
   * @param event The event to start receiving from
   */
  async receive(event: string, {
    delay = 60_000,
    filter,
    limit = 1,
  }: AsyncEventTargetReceiveOptions<T> = {}) {
    const readable = this.listen(event);
    const reader = readable.getReader();
    const received = new Array<T[]>(limit);
    const timeout = setTimeout(() => this.deafen(event, readable), delay);
    for (let i = 0; i < limit;) {
      const { done, value } = await reader.read();
      if (done) {
        throw new Error(`Receiver timed out (${delay / 1000} seconds)`);
      } else if (value && (await filter?.(...value) ?? true)) {
        received[i++] = value;
      }
    }
    clearTimeout(timeout);
    this.deafen(event, readable);
    return received;
  }
}