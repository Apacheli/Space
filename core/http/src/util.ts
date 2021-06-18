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

export const getResponseData = async (response: Response) => {
  // deno-fmt-ignore
  switch (response.headers.get("Content-Type")) {
    case "application/json": return response.json();
    case "image/jpeg":
    case "image/png":
    case "image/webp":
    case "image/gif": return new Uint8Array(await response.arrayBuffer());
    default: return response.text();
  }
};
