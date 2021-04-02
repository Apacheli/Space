import { APIChannel, ChannelType } from "../../../deps.ts";
import {
  CategoryChannel,
  Channel,
  GroupPrivateChannel,
  GuildChannel,
  NewsChannel,
  PrivateChannel,
  PrivateThreadChannel,
  PublicThreadChannel,
  StageChannel,
  StoreChannel,
  TextChannel,
  VoiceChannel,
} from "./mod.ts";
import Client from "../../client/client.ts";

export const fromType = (channel: APIChannel, client: Client) => {
  switch (channel.type) {
    case ChannelType.GUILD_TEXT: {
      return new TextChannel(channel, client);
    }
    case ChannelType.DM: {
      return new PrivateChannel(channel, client);
    }
    case ChannelType.GUILD_VOICE: {
      return new VoiceChannel(channel, client);
    }
    case ChannelType.GROUP_DM: {
      return new GroupPrivateChannel(channel, client);
    }
    case ChannelType.GUILD_CATEGORY: {
      return new CategoryChannel(channel, client);
    }
    case ChannelType.GUILD_NEWS: {
      return new NewsChannel(channel, client);
    }
    case ChannelType.GUILD_STORE: {
      return new StoreChannel(channel, client);
    }
    case /* ChannelType.PUBLIC_THREAD */ 11: {
      return new PublicThreadChannel(channel, client);
    }
    case /* ChannelType.PRIVATE_THREAD */ 12: {
      return new PrivateThreadChannel(channel, client);
    }
    case /* ChannelType.GUILD_STAGE_VOICE */ 13: {
      return new StageChannel(channel, client);
    }
    default: {
      if (channel.guild_id) {
        return new GuildChannel(channel, client);
      }
      return new Channel(channel, client);
    }
  }
};

export default fromType;
