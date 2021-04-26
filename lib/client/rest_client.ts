import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";
import { channelPermissionsDecorator } from "../util/mod.ts";
import { PermissionFlagsBits } from "../util/deps.ts";

export interface RESTClientOptions extends HTTPClientOptions {
}

export class RESTClient extends HTTPClient {
  constructor(
    public client: any,
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
