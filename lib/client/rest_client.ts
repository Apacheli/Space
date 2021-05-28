import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";

// deno-lint-ignore no-empty-interface
export interface RESTClientOptions extends HTTPClientOptions {
}

export class RESTClient extends HTTPClient {
}
