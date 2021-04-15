import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";

export interface RESTClientOptions extends HTTPClientOptions {
}

export class RESTClient extends HTTPClient {
}

export default RESTClient;
