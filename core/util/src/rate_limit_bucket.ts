import type { Awaitable } from "./types.ts";

/** A generic function */
export type GenericFunction = (...args: unknown[]) => unknown;

/** A task function */
export type TaskFunction = () => Awaitable<number[]>;

/** Handles rate limits */
export class RateLimitBucket {
  /** If this bucket is locked or not */
  locked = false;

  #lastRequestAt = 0;
  #queue: GenericFunction[] = [];
  #timeout?: number;

  /**
   * @param max The maximum number of requests
   * @param reset The reset timer
   * @param left The number of remaining requests
   */
  constructor(public max = 1, public reset = 0, public left = max) {
  }

  /** If this bucket is rate limited or not */
  get rateLimited() {
    return this.left < 1 && Date.now() - this.#lastRequestAt < this.reset;
  }

  add(func: GenericFunction) {
    if (this.rateLimited && !this.#timeout) {
      const delay = this.reset - Date.now() + this.#lastRequestAt;
      this.#timeout = setTimeout(() => {
        this.#timeout = undefined;
        func();
      }, delay);
    } else {
      this.#queue.push(func);
    }
  }

  lock() {
    if (this.locked) {
      throw new Error("Bucket is locked.");
    }
    this.locked = true;
  }

  unlock(max = this.max, reset = this.reset, left = this.left - 1) {
    if (!this.locked) {
      throw new Error("Bucket is unlocked.");
    }
    this.#lastRequestAt = Date.now();
    this.locked = false;

    this.max = max;
    this.reset = reset;
    this.left = left;
  }

  shift() {
    const shifted = this.#queue.shift();
    shifted?.();
  }
}
