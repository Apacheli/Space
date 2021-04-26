import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";
import { channelPermissionsDecorator } from "../util/mod.ts";
import type { Client } from "./client.ts";
import { PermissionFlagsBits } from "./deps.ts";

export interface RESTClientOptions extends HTTPClientOptions {
}

export class RESTClient extends HTTPClient {
  constructor(
    public client: Client,
    token: string,
    options?: RESTClientOptions,
  ) {
    super(token, options);
  }

  @channelPermissionsDecorator(PermissionFlagsBits.SEND_MESSAGES)
  createMessage(channelID: any, data: any, files?: any) {
    return super.createMessage(channelID, data, files);
  }
}
