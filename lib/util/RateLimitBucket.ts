export type GenericFunction = (...args: unknown[]) => unknown;

export default class RateLimitBucket {
  active = false;
  lastRequest = 0;
  queue: GenericFunction[] = [];
  timeout?: number;

  constructor(public max = 0, public reset = 0, public left = max) {
  }

  get outdated() {
    return this.left < this.max && Date.now() - this.lastRequest > this.reset;
  }

  get rateLimited() {
    return this.left < 1 && Date.now() - this.lastRequest < this.reset;
  }

  lock() {
    this.active = true;
  }

  unlock(max = this.max, reset = this.reset, left = --this.left, next = true) {
    this.active = false;
    this.lastRequest = Date.now();

    this.max = max;
    this.reset = reset;
    this.left = left;

    if (next) {
      this.shift();
    }
  }

  push(func: GenericFunction) {
    if (this.rateLimited && !this.timeout) {
      this.timeout = setTimeout(func, this.reset);
      return;
    }
    this.queue.push(func);
  }

  shift() {
    const shifted = this.queue.shift();
    shifted?.();
  }

  resetRateLimits() {
    this.left = this.max;
    this.timeout = undefined;
  }
}
