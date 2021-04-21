export class AsyncEventTarget<T = any>
  extends Map<string, WritableStreamDefaultWriter<T[]>> {
  #stream = new TransformStream<[string, ...T[]], T[]>();
  #writer = this.#stream.writable.getWriter();

  listen(event: string) {
    const { readable, writable } = new TransformStream<T[], T[]>();
    this.set(event, writable.getWriter());
    return readable;
  }

  deafen(event: string) {
    const writer = this.get(event);
    this.delete(event);
    writer?.close();
  }

  dispatch(event: string, ...chunks: T[]) {
    const writer = this.get(event);
    this.#writer.write([event, ...chunks]);
    writer?.write(chunks);
  }

  async *[Symbol.asyncIterator]() {
    yield* this.#stream.readable;
  }
}
