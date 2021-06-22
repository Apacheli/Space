// deno-lint-ignore-file no-explicit-any

/** Decode a Uint8Array into a UTF-8 string */
export const utf8Decode: (input: Uint8Array) => string =
  (globalThis as any).Deno?.core.decode ??
    TextDecoder.prototype.decode.bind(new TextDecoder());

/** Encode a UTF-8 string into a Uint8Array */
export const utf8Encode: (input: string) => Uint8Array =
  (globalThis as any).Deno?.core.encode ??
    TextEncoder.prototype.encode.bind(new TextEncoder());

/** `Uint8Array.from()` and `new Uint8Array()` are 3x slower than `set()` */
export const uint8Concat = (a: Uint8Array, b: Uint8Array) => {
  const c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
};
