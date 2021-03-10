export default class HTTPError extends Error {
  name = "HTTPError";

  constructor(message: string, public code: number, public status: number) {
    super(message);
  }
}
