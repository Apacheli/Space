const chars = "0123456789ABCDEF";
const hex = new Array(0x100);
// deno-lint-ignore no-explicit-any
const decimal: any = {};
for (let i = 0; i < 0x100; i++) {
  const nyble = `${chars[i >> 4 & 0xF]}${chars[i & 0xF]}`;
  hex[decimal[nyble] = i] = nyble;
}

export const encode = (arr: Uint8Array) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += hex[arr[i]];
  }
  return str;
};

export const decode = (str: string) => {
  const arr = new Uint8Array(str.length >> 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = decimal[str[i * 2] + str[i * 2 + 1]];
  }
  return arr;
};
