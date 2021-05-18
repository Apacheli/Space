export interface AsyncEventTargetReceiveOptions<T> {
  delay?: number;
  filter?: (...received: T[]) => boolean | Promise<boolean>;
  limit?: number;
}

export interface ListenerStream<T> {
  readable: ReadableStream<T>;
  writer: WritableStreamDefaultWriter<T>;
  [Symbol.asyncIterator]: () => AsyncIterableIterator<T>;
}

export class AsyncEventTarget<T> extends Map<string, ListenerStream<T[]>[]> {
  listen(event: string): ListenerStream<T[]> {
    const { readable, writable } = new TransformStream<T[], T[]>();
    const listener: ListenerStream<T[]> = {
      readable,
      writer: writable.getWriter(),
      [Symbol.asyncIterator]: () => readable[Symbol.asyncIterator](),
    };
    if (this.get(event)?.push(listener) === undefined) {
      this.set(event, [listener]);
    }
    return listener;
  }

  deafen(event: string, listener?: ListenerStream<T[]>) {
    const streams = this.get(event);
    if (!streams) {
      return;
    }
    if (listener) {
      if (streams.splice(streams.indexOf(listener), 1).length > 0) {
        listener.writer.close();
      }
      return;
    }
    this.delete(event);
    streams.forEach((listener) => listener.writer.close());
  }

  dispatch(event: string, ...args: T[]) {
    const writers = this.get(event);
    writers?.forEach(({ writer }) => writer.write(args));
  }

  async receive(event: string, {
    delay = 60000,
    filter,
    limit = 1,
  }: AsyncEventTargetReceiveOptions<T> = {}) {
    const listener = this.listen(event);
    const reader = listener.readable.getReader();
    const received = new Array<T[]>(limit);
    const timeout = setTimeout(() => this.deafen(event, listener), delay);
    for (let i = 0; i < limit;) {
      const { done, value } = await reader.read();
      if (done) {
        throw new Error(`Receiver timed out (${delay / 1000} seconds)`);
      } else if (value && (await filter?.(...value) ?? true)) {
        received[i++] = value;
      }
    }
    clearTimeout(timeout);
    this.deafen(event, listener);
    return received;
  }
}
