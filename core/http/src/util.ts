/**
 * Encode a dictionary into a query string
 *
 *     const str = encodeQuery({ key: "value" });
 *
 * @param query Query dictionary
 */
export const encodeQuery = (query: Record<string, unknown>) => {
  let str = "";
  for (const key in query) {
    str += `&${encodeURIComponent(key)}=${encodeURIComponent(`${query[key]}`)}`;
  }
  return str;
};
