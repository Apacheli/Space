// deno-lint-ignore-file no-explicit-any

export const utf8Decode = (globalThis as any).Deno?.core.decode ??
  ((d) => (input: BufferSource) => d.decode(input))(new TextDecoder());

export const utf8Encode = (globalThis as any).Deno?.core.encode ??
  ((e) => (input: string) => e.encode(input))(new TextEncoder());

/** `Uint8Array.from()` and `new Uint8Array()` are 3x slower than set */
export const uint8Concat = (array1: Uint8Array, array2: Uint8Array) => {
  const array3 = new Uint8Array(array1.length + array2.length);
  array3.set(array1, 0);
  array3.set(array2, array1.length);
  return array3;
};
