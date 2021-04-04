import { green, yellow } from "../../util/logger.ts";

export interface ResponseError {
  code: number;
  errors?: any; // TODO: Get this type correct
  message: string;
}

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
      .replace(/\b\d+\b/g, (int) => yellow(int));
    return `[${code}] ${this.#message}\n${errors.slice(0, -1)}`;
  }

  // https://github.com/abalabahaha/eris/blob/master/lib/errors/DiscordRESTError.js#L49
  private formatErrors(errors = this.errors, x = "") {
    let str = "";
    for (const k in errors) {
      if (errors[k]) {
        str += errors[k]._errors?.map((e: any) => `${x}${k}: ${e.message}\n`) ??
          this.formatErrors(errors[k], `${x}${k}.`);
      }
    }
    return str;
  }
}

export default HTTPError;
