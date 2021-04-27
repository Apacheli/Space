import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";
import { RESTGetAPIChannelMessagesQuery } from "../structures/deps.ts";
import { ActualSnowflake, channelPermissionsDecorator } from "../util/mod.ts";
import type { Client } from "./client.ts";
import {
  PermissionFlagsBits,
  RESTPostAPIChannelMessageJSONBody,
} from "./deps.ts";

// deno-lint-ignore no-empty-interface
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

  @channelPermissionsDecorator(PermissionFlagsBits.VIEW_CHANNEL)
  getChannelMessages(
    channelID: ActualSnowflake,
    query: RESTGetAPIChannelMessagesQuery,
  ) {
    return super.getChannelMessages(channelID, query);
  }

  @channelPermissionsDecorator(PermissionFlagsBits.VIEW_CHANNEL)
  getChannelMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.getChannelMessage(channelID, messageID);
  }

  @channelPermissionsDecorator(
    PermissionFlagsBits.VIEW_CHANNEL | PermissionFlagsBits.SEND_MESSAGES,
  )
  createMessage(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessageJSONBody,
    files?: File[],
  ) {
    return super.createMessage(channelID, data, files);
  }
}
