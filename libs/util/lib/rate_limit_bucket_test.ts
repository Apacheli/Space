import { assert, assertStrictEquals } from "../../dev_deps.ts";
import { RateLimitBucket } from "./rate_limit_bucket.ts";

Deno.test("RateLimitBucket.locked, lock(), and unlock()", () => {
  const bucket = new RateLimitBucket(5, 10_000);

  bucket.lock();
  assert(bucket.locked);

  // someTask();

  bucket.unlock();
  assert(!bucket.locked);

  assert(bucket.left < bucket.max);
  assertStrictEquals(bucket.left, 4);
});

Deno.test("RateLimitBucket.rateLimited", () => {
  const bucket = new RateLimitBucket(3, 10_000);

  const use = () => {
    bucket.lock();
    bucket.unlock();
  };

  use();
  use();
  use();

  assert(bucket.rateLimited);
});
