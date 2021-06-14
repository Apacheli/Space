// URLSearchParams is slow, and its typings are dumb
export const encodeQuery = (query: Record<string, unknown>) => {
  let str = "";
  for (const key in query) {
    str += `&${encodeURIComponent(key)}=${encodeURIComponent(`${query[key]}`)}`;
  }
  return str;
};
