export const sleep = <T>(delay?: number, value?: T) =>
  new Promise((resolve) => setTimeout(resolve, delay, value));
