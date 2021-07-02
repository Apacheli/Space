import type { Awaitable } from "./types.ts";

/** A generic function */
export type GenericFunction = (...args: unknown[]) => unknown;

/** A task function */
export type TaskFunction = () => Awaitable<number[]>;

/** Handles rate limits */
export class RateLimitBucket {
  /** If this bucket is locked or not */
  locked = false;

  #lastUnlockAt = 0;
  #queue: GenericFunction[] = [];
  #timeout?: number;

  /**
   * @param max The maximum number of requests
   * @param reset The reset timer
   * @param left The number of remaining requests
   */
  constructor(public max = 1, public reset = 0, public left = max) {
  }

  /** If the bucket is rate limited or not */
  get rateLimited() {
    return this.left < 1 && Date.now() - this.#lastUnlockAt < this.reset;
  }

  /** Add a function to the queue */
  add(func: GenericFunction) {
    if (this.rateLimited && !this.#timeout) {
      this.#timeout = setTimeout(() => {
        this.#timeout = undefined;
        this.left = this.max;
        func();
      }, this.reset - Date.now() + this.#lastUnlockAt);
    } else {
      this.#queue.push(func);
    }
  }

  /** Lock the bucket */
  lock() {
    if (this.locked) {
      throw new Error("Bucket is already locked.");
    }
    this.locked = true;
  }

  /** Unlock the bucket */
  unlock(max = this.max, reset = this.reset, left = this.left - 1) {
    if (!this.locked) {
      throw new Error("Bucket is already unlocked.");
    }
    this.#lastUnlockAt = Date.now();
    this.locked = false;

    this.max = max;
    this.reset = reset;
    this.left = left;
  }

  /** Shift the queue */
  shift() {
    const shifted = this.#queue.shift();
    shifted?.();
  }
}
