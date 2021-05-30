import { assertEquals, assertThrowsAsync } from "../../dev_deps.ts";
import { AsyncEventTarget } from "./async_event_target.ts";

Deno.test("AsyncEventTarget.receive()", async () => {
  const target = new AsyncEventTarget();

  setTimeout(() => target.dispatch("event", 1, 2, 3));

  const received = await target.receive("event");

  assertEquals(received, [[1, 2, 3]]);
});

Deno.test("AsyncEventTarget.receive() timed out error", async () => {
  const target = new AsyncEventTarget();

  await assertThrowsAsync(
    () => target.receive("event", { delay: 0 }),
    Error,
    "Receiver timed out (0 seconds)",
  );
});

Deno.test("AsyncEventTarget.receive() with abort", async () => {
  const target = new AsyncEventTarget();

  setTimeout(() => {
    const count = 3;
    for (let i = 0; i < count; i++) {
      target.dispatch("event", { count, index: i });
    }
  });

  const received = await target.receive("event", {
    abort: (x) => x.index + 1 === x.count,
  });

  assertEquals(received, [
    [{ count: 3, index: 0 }],
    [{ count: 3, index: 1 }],
    [{ count: 3, index: 2 }],
  ]);
});

Deno.test("AsyncEventTarget.receive() with filter", async () => {
  const target = new AsyncEventTarget();

  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      target.dispatch("event", i);
    }
  });

  const received = await target.receive("event", {
    filter: (x) => x > 4,
    limit: 5,
  });

  assertEquals(received, [[5], [6], [7], [8], [9]]);
});

Deno.test("AsyncEventTarget.receive() with limit", async () => {
  const target = new AsyncEventTarget();

  setTimeout(() => {
    target.dispatch("event", 1, 2, 3);
    target.dispatch("event", 4, 5, 6);
    target.dispatch("event", 7, 8, 9);
  });

  const received = await target.receive("event", { limit: 3 });

  assertEquals(received, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});
