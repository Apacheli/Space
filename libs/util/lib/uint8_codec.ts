// deno-lint-ignore-file no-explicit-any

/** Decodes UTF8 data */
export const decode = (globalThis as any).Deno?.core.decode ??
  ((c) => (input?: BufferSource) => c.decode(input))(new TextDecoder());

/** Encodes UTF-8 data */
export const encode = (globalThis as any).Deno?.core.encode ??
  ((c) => (input?: string) => c.encode(input))(new TextEncoder());
