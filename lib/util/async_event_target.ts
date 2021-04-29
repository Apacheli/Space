export class AsyncEventTarget<T = unknown, A = string>
  extends Map<A, WritableStreamDefaultWriter<T[]>> {
  #writer?: WritableStreamDefaultWriter<[A, ...T[]]>;

  listen(event?: A) {
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    this.#writer = event ? this.set(event, writer) && this.#writer : writer;
    return readable;
  }

  deafen(event?: A) {
    const writer = event ? this.get(event) : this.#writer;
    event && this.delete(event);
    writer?.close();
  }

  dispatch(event: A, ...chunks: T[]) {
    const writer = this.get(event);
    this.#writer?.write([event, ...chunks]);
    writer?.write(chunks);
  }

  async *[Symbol.asyncIterator]() {
    yield* this.listen();
  }
}
