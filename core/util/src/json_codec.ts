/** Encode something into a JSON string */
export const stringify = (value: unknown) =>
  JSON.stringify(value, (_, v) => typeof v === "bigint" ? `${v}` : v);

/** Decode a JSON string */
export const parse = JSON.parse;
