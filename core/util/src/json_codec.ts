export const parse = JSON.parse;

export const stringify = (value: unknown) =>
  JSON.stringify(value, (_, v) => typeof v === "bigint" ? `${v}` : v);
