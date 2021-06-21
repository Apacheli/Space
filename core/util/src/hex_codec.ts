const chars = "0123456789ABCDEF";
const decimal: Record<string, number> = {};
const hex = new Array(0x100);
for (let i = 0; i < hex.length; i++) {
  const nyble = `${chars[i >> 4 & 0xF]}${chars[i & 0xF]}`;
  hex[decimal[nyble] = i] = nyble;
}

/** Encode a byte array into a hex string */
export const hexEncode = (arr: Uint8Array) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += hex[arr[i]];
  }
  return str;
};

/** Decode a hex string into a byte array */
export const hexDecode = (str: string) => {
  const arr = new Uint8Array(str.length >> 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = decimal[str[i * 2] + str[i * 2 + 1]];
  }
  return arr;
};
