export type GenericFunction = (...args: unknown[]) => unknown;

export class RateLimitBucket {
  lastRequestAt = 0;
  locked = false;
  queue: GenericFunction[] = [];
  timeout?: number;

  constructor(public max = 1, public reset = 0, public left = max) {
  }

  get rateLimited() {
    return this.left < 1 && Date.now() - this.lastRequestAt < this.reset;
  }

  add(func: GenericFunction) {
    if (this.rateLimited && !this.timeout) {
      this.timeout = setTimeout(() => {
        this.timeout = undefined;
        func();
      }, this.reset);
      return;
    }
    this.queue.push(func);
  }

  lock() {
    this.locked = true;
  }

  unlock(max = this.max, reset = this.reset, left = --this.left, next = true) {
    this.locked = false;
    this.lastRequestAt = Date.now();

    this.max = max;
    this.reset = reset;
    this.left = left;

    if (next) {
      const shifted = this.queue.shift();
      shifted?.();
    }
  }
}
