// deno-lint-ignore-file no-explicit-any

export const decode = (globalThis as any).Deno?.core.decode ??
  TextDecoder.prototype.decode.bind(new TextDecoder());

export const encode = (globalThis as any).Deno?.core.decode ??
  TextEncoder.prototype.encode.bind(new TextEncoder());
