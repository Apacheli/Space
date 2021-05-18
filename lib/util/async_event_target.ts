export interface AsyncEventTargetReceiveOptions<T> {
  delay?: number;
  filter?: (...received: T[]) => boolean | Promise<boolean>;
  limit?: number;
}

export interface Listener<T> {
  readable: ReadableStream<T>;
  writer: WritableStreamDefaultWriter<T>;
}

export class AsyncEventTarget<T> extends Map<string, Listener<T[]>[]> {
  listen(event: string) {
    const { readable, writable } = new TransformStream<T[], T[]>();
    const listener = { readable, writer: writable.getWriter() };
    if (this.get(event)?.push(listener) === undefined) {
      this.set(event, [listener]);
    }
    return readable;
  }

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

  async receive(event: string, {
    delay = 60000,
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
