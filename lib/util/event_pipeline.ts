export class EventPipeline extends Map<string, Handler[]> {
  listen(event: string, ...handlers: Handler[]) {
    const existing = this.get(event);
    if (existing?.push(...handlers) === undefined) {
      this.set(event, handlers);
    }
  }

  deafen(event: string, ...handlers: Handler[]) {
    const filtered = this.get(event)
      ?.filter((handler) => !handlers.includes(handler));
    if (filtered?.length) {
      this.set(event, filtered);
    } else {
      this.delete(event);
    }
  }

  dispatch(event: string, ...args: any) {
    return this.get(event)
      ?.reduce(async (result, handler) => {
        const data = await result;
        return handler(
          ...await Promise.all(Array.isArray(data) ? data : [data]),
        );
      }, args);
  }
}

export type Handler = (...args: any) => any;
