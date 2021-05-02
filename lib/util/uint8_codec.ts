const decoder = new TextDecoder();
const encoder = new TextEncoder();

export const decode = (input: Uint8Array) => decoder.decode(input);

export const encode = (input: string) => encoder.encode(input);
