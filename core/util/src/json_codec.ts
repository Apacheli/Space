export const stringify = (value: unknown) =>
  JSON.stringify(value, (_, v) => typeof v === "bigint" ? `${v}` : v);

export const parse = JSON.parse;
