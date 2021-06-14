export const formatColor = (input: string, open: number, close: number) =>
  `\x1b[${open}m${input}\x1b[${close}m`;

export const formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");
  const second = `${date.getSeconds()}`.padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

export const highlight = (input: string) =>
  input.replace(
    /('.+?'|".+?"|`.+?`)|\d+|true|false/g,
    (a, b) => b ? green(b) : yellow(a),
  );

export const log = (level: string, ...args: unknown[]) =>
  console.log(
    `${bold(formatDate())} | ${level.padEnd(3)} |`,
    ...args.map((arg) => typeof arg === "string" ? highlight(arg) : arg),
  );

//#region levels
// deno-fmt-ignore-next-line
export const
  debug = (...args: unknown[]) => log(brightBlack("DBG"), ...args),
  error = (...args: unknown[]) => log(red("ERR"), ...args),
  fatal = (...args: unknown[]) => log(magenta("FTL"), ...args),
  info  = (...args: unknown[]) => log(blue("INF"), ...args),
  trace = (...args: unknown[]) => log(cyan("TRC"), ...args),
  warn  = (...args: unknown[]) => log(yellow("WRN"), ...args);
//#endregion levels

//#region styles
// deno-fmt-ignore-next-line
export const
  reset         = (input: string) => formatColor(input, 0, 0),
  bold          = (input: string) => formatColor(input, 1, 22),
  dim           = (input: string) => formatColor(input, 2, 22),
  italic        = (input: string) => formatColor(input, 3, 23),
  underline     = (input: string) => formatColor(input, 4, 24),
  blink         = (input: string) => formatColor(input, 5, 25),
  fastBlink     = (input: string) => formatColor(input, 6, 25),
  inverse       = (input: string) => formatColor(input, 7, 27),
  hide          = (input: string) => formatColor(input, 8, 28),
  strikethrough = (input: string) => formatColor(input, 9, 29);
//#endregion styles

//#region colors
// deno-fmt-ignore-next-line
export const
  black                   = (input: string) => formatColor(input, 30, 39),
  red                     = (input: string) => formatColor(input, 31, 39),
  green                   = (input: string) => formatColor(input, 32, 39),
  yellow                  = (input: string) => formatColor(input, 33, 39),
  blue                    = (input: string) => formatColor(input, 34, 39),
  magenta                 = (input: string) => formatColor(input, 35, 39),
  cyan                    = (input: string) => formatColor(input, 36, 39),
  white                   = (input: string) => formatColor(input, 37, 39),
  brightBlack             = (input: string) => formatColor(input, 90, 39),
  brightRed               = (input: string) => formatColor(input, 91, 39),
  brightGreen             = (input: string) => formatColor(input, 92, 39),
  brightYellow            = (input: string) => formatColor(input, 93, 39),
  brightBlue              = (input: string) => formatColor(input, 94, 39),
  brightMagenta           = (input: string) => formatColor(input, 95, 39),
  brightCyan              = (input: string) => formatColor(input, 96, 39),
  brightWhite             = (input: string) => formatColor(input, 97, 39),
  blackBackground         = (input: string) => formatColor(input, 40, 49),
  redBackground           = (input: string) => formatColor(input, 41, 49),
  greenBackground         = (input: string) => formatColor(input, 42, 49),
  yellowBackground        = (input: string) => formatColor(input, 43, 49),
  blueBackground          = (input: string) => formatColor(input, 44, 49),
  magentaBackground       = (input: string) => formatColor(input, 45, 49),
  cyanBackground          = (input: string) => formatColor(input, 46, 49),
  whiteBackground         = (input: string) => formatColor(input, 47, 49),
  brightBlackBackground   = (input: string) => formatColor(input, 100, 49),
  brightRedBackground     = (input: string) => formatColor(input, 101, 49),
  brightGreenBackground   = (input: string) => formatColor(input, 102, 49),
  brightYellowBackground  = (input: string) => formatColor(input, 103, 49),
  brightBlueBackground    = (input: string) => formatColor(input, 104, 49),
  brightMagentaBackground = (input: string) => formatColor(input, 105, 49),
  brightCyanBackground    = (input: string) => formatColor(input, 106, 49),
  brightWhiteBackground   = (input: string) => formatColor(input, 107, 49);
//#endregion colors
