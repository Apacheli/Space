export class AsyncEventTarget extends Map<string, WritableStreamDefaultWriter> {
  #writer?: WritableStreamDefaultWriter;

  listen(event?: string) {
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    this.#writer = event ? void this.set(event, writer) : writer;
    return readable;
  }

  deafen(event?: string) {
    const writer = event ? this.get(event) : this.#writer;
    event && this.delete(event);
    writer?.close();
  }

  dispatch(event: string, ...chunks: unknown[]) {
    const writer = this.get(event);
    this.#writer?.write([event, ...chunks]);
    writer?.write(chunks);
  }

  async *[Symbol.asyncIterator]() {
    yield* this.listen();
  }
}
