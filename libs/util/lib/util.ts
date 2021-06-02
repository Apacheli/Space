/**
 * Asynchronous sleep utility function
 *
 *     await sleep(5_000);
 *
 * @param delay How long to wait before resolving
 */
export const sleep = (delay?: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, delay));
