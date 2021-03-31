export interface ResponseError {
  code: number;
  errors?: Record<string, { _errors: Omit<ResponseError, "errors">[] }>;
  message: string;
}

// TODO: Discord errors are like a chain of properties
export class HTTPError extends Error implements ResponseError {
  #message;

  code;
  errors;
  name = "HTTPError";

  constructor(body: ResponseError, public response: Response) {
    super(body.message);

    this.#message = body.message;

    this.code = body.code;
    this.errors = body.errors;
  }
}

export default HTTPError;
