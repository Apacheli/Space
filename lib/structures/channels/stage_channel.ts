import { APIChannel } from "../../../deps.ts";
import VoiceChannel from "./voice_channel.ts";

/**
 * Class representing a guild stage voice channel on Discord.
 */
export class StageChannel extends VoiceChannel {
  /**
   * the channel topic (0-1024 characters)
   */
  topic: APIChannel["topic"];

  update(data: APIChannel) {
    super.update(data);

    this.topic = data.topic;
  }
}

export default StageChannel;
