import {
  RESTGetAPIChannelMessagesQuery,
  RESTPatchAPIChannelJSONBody,
  RESTPostAPIChannelMessageJSONBody,
} from "./deps.ts";
import { HTTPClient, HTTPClientOptions } from "../api/http/mod.ts";
import { ActualSnowflake, channelPermissionsDecorator } from "../util/mod.ts";
import type { Client } from "./client.ts";

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

  @channelPermissionsDecorator("MANAGE_CHANNELS", "VIEW_CHANNEL")
  editChannel(
    channelID: ActualSnowflake,
    data: RESTPatchAPIChannelJSONBody,
    reason?: string,
  ) {
    return super.editChannel(channelID, data, reason);
  }

  @channelPermissionsDecorator("MANAGE_CHANNELS", "VIEW_CHANNEL")
  deleteChannel(channelID: ActualSnowflake, reason?: string) {
    return super.deleteChannel(channelID, reason);
  }

  @channelPermissionsDecorator("VIEW_CHANNEL")
  getChannelMessages(
    channelID: ActualSnowflake,
    query: RESTGetAPIChannelMessagesQuery,
  ) {
    return super.getChannelMessages(channelID, query);
  }

  @channelPermissionsDecorator("VIEW_CHANNEL")
  getChannelMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.getChannelMessage(channelID, messageID);
  }

  @channelPermissionsDecorator("VIEW_CHANNEL", "SEND_MESSAGES")
  createMessage(
    channelID: ActualSnowflake,
    data: RESTPostAPIChannelMessageJSONBody,
    files?: File[],
  ) {
    return super.createMessage(channelID, data, files);
  }

  @channelPermissionsDecorator(
    "SEND_MESSAGES",
    "MANAGE_MESSAGES",
    "VIEW_CHANNEL",
    "READ_MESSAGE_HISTORY",
  )
  crosspostMessage(channelID: ActualSnowflake, messageID: ActualSnowflake) {
    return super.crosspostMessage(channelID, messageID);
  }
}
