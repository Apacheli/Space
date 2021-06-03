import type { Awaitable } from "./types.ts";

/** A generic function */
export type GenericFunction = (...args: unknown[]) => unknown;

/** A task function */
export type TaskFunction = () => Awaitable<number[]>;

/** Handles rate limits */
export class RateLimitBucket {
  /** If this bucket is locked or not */
  locked = false;

  /** The epoch time of when the last request was made */
  protected lastRequestAt = 0;

  #queue: GenericFunction[] = [];
  #timeout?: number;

  /**
   * @param max The maximum amount of requests a bucket can use
   * @param reset The time when the bucket will reset
   * @param left The number of remaining requests
   */
  constructor(public max = 1, public reset = 0, public left = max) {
  }

  /** A getter that determines if this bucket is rate limited or not */
  get rateLimited() {
    return this.left < 1 && Date.now() - this.lastRequestAt < this.reset;
  }

  /** Add a funciton to the queue */
  add(func: GenericFunction, fixed?: boolean) {
    if (this.rateLimited && !this.#timeout) {
      this.#timeout = setTimeout(() => {
        this.left = this.max;
        this.#timeout = undefined;
        func();
      }, fixed ? this.reset - Date.now() + this.lastRequestAt : this.reset);
    } else {
      this.#queue.push(func);
    }
  }

  /** Lock the bucket */
  lock() {
    if (this.locked) {
      throw new Error("Bucket is locked.");
    }

    this.locked = true;
  }

  /**
   * Unlock the bucket
   * @param max Update the bucket maximum limit
   * @param reset Update the reset timer
   * @param left Update the remaining number of requests
   */
  unlock(max = this.max, reset = this.reset, left = this.left - 1) {
    if (!this.locked) {
      throw new Error("Bucket is unlocked.");
    }

    this.lastRequestAt = Date.now();
    this.locked = false;

    this.max = max;
    this.reset = reset;
    this.left = left;
  }

  /** Run the function that is next in queue */
  next() {
    const shifted = this.#queue.shift();
    shifted?.();
  }

  /** Do a task */
  async task(func: () => Awaitable<number[]>, fixed?: boolean) {
    if (this.locked || this.rateLimited) {
      this.add(() => this.task(func, fixed), fixed);
    } else {
      this.lock();
      this.unlock(...await func());
      this.next();
    }
  }
}
