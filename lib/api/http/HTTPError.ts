export interface ResponseError {
  code: number;
  errors?: Record<string, { _errors: Omit<ResponseError, "errors">[] }>;
  message: string;
}

export default class HTTPError extends Error implements ResponseError {
  code;
  errors;
  name = "HTTPError";

  constructor(body: ResponseError, public response: Response) {
    super(body.message);

    this.code = body.code;
    this.errors = body.errors;
  }
}
