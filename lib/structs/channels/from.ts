import { APIChannel, ChannelType } from "../../deps.ts";
import {
  CategoryChannel,
  Channel,
  GroupPrivateChannel,
  GuildChannel,
  NewsChannel,
  PrivateChannel,
  StageVoiceChannel,
  StoreChannel,
  TextChannel,
  VoiceChannel,
} from "./mod.ts";
import Client from "../../client/client.ts";

export const from = (channel: APIChannel, client: Client) => {
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

    case 13: {
      return new StageVoiceChannel(channel, client);
    }

    default: {
      return new (channel.guild_id ? GuildChannel : Channel)(channel, client);
    }
  }
};

export default from;
