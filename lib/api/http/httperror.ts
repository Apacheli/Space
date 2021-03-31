import { green, yellow } from "../../util/logger.ts";

export interface ResponseError {
  code: number;
  errors?: any; // TODO: get this type right
  message: string;
}

// TODO: Discord errors are like a chain of properties
export class HTTPError extends Error implements ResponseError {
  #message;

  code;
  errors;
  name = "HTTPError";

  constructor(body: ResponseError, public response: Response) {
    super();

    this.#message = body.message;

    this.code = body.code;
    this.errors = body.errors;
  }

  get message() {
    const code = yellow(`${this.code}`);
    const errors = this.formatErrors()
      .replace(/'.+?'/g, (str) => green(str))
      .replace(/\b\d+\b/g, (int) => yellow(int))
      .slice(0, -1);
    return `[${code}] ${this.#message}\n${errors}`;
  }

  private formatErrors(errors = this.errors, key = "") {
    let str = "";
    for (const k in errors) {
      const thing = errors[k];
      if (thing._errors) {
        for (const e of thing._errors) {
          str += `[${e.code}] ${key}${k}: ${e.message}\n`;
        }
      } else if (thing) {
        str += this.formatErrors(errors[k], `${key}${k}.`);
      }
    }
    return str;
  }
}

export default HTTPError;
