/** A generic function */
export type GenericFunction = (...args: unknown[]) => unknown;

// TODO: Make this class properly handle fixed/static reset times
//       This class depends on dynamic reset times due to how HTTP headers work

/** Handles rate limits */
export class RateLimitBucket {
  /** The last time this bucket was used */
  lastRequestAt = 0;
  /** If this bucket is locked or not */
  locked = false;

  #queue: GenericFunction[] = [];
  #timeout?: number;

  /**
   * @param max The maximum amount of requests a bucket can use
   * @param reset The delay when the bucket will reset
   * @param left The number of remaining requests
   */
  constructor(public max = 1, public reset = 0, public left = max) {
  }

  /** A getter that determines if this bucket is rate limited or not */
  get rateLimited() {
    return this.left < 1 && Date.now() - this.lastRequestAt < this.reset;
  }

  /** Add a funciton to the queue */
  add(func: GenericFunction) {
    if (this.rateLimited && !this.#timeout) {
      this.#timeout = setTimeout(() => {
        this.#timeout = undefined;
        func();
      }, this.reset);
      return;
    }
    this.#queue.push(func);
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
   * @param delay Update the reset timer
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
  async task(func: () => number[] | Promise<number[]>) {
    if (this.locked || this.rateLimited) {
      this.add(() => this.task(func));
      return;
    }
    this.lock();
    this.unlock(...await func());
    this.next();
  }
}
