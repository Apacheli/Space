/** A generic function */
export type GenericFunction = (...args: unknown[]) => unknown;

/** Does rate limiting stuff */
export class RateLimitBucket {
  #lastRequestAt = 0;
  #queue: GenericFunction[] = [];
  #timeout?: number;

  /** If this bucket is locked or not */
  locked = false;

  /**
   * Construct a new rate limit bucket
   *
   *     const bucket = new RateLimitBucket(5, 10_000);
   * @param max The maximum amount of requests a bucket can use
   * @param reset The time when the bucket will reset
   * @param left The number of remaining requests
   */
  constructor(public max = 1, public reset = 0, public left = max) {
  }

  /** A getter that determines if this bucket is rate limited or not */
  get rateLimited() {
    return this.left < 1 && Date.now() - this.#lastRequestAt < this.reset;
  }

  /**Add a funciton to the queue */
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
   * @param reset Update the reset timer
   * @param left Update the remaining number of requests
   */
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

  /** Run the function that is next in queue */
  next() {
    const shifted = this.#queue.shift();
    shifted?.();
  }
}