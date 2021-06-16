// deno-lint-ignore-file no-explicit-any

export const decode = (globalThis as any).Deno?.core.decode ??
  ((d) => (input: BufferSource) => d.decode(input))(new TextDecoder());

export const encode = (globalThis as any).Deno?.core.encode ??
  ((e) => (input: string) => e.encode(input))(new TextEncoder());
