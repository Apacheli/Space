import { APIChannel } from "../../../deps.ts";
import VoiceChannel, { APIVoiceChannel } from "./voicechannel.ts";

/**
 * Class representing a guild stage voice channel on Discord.
 */
export class StageChannel extends VoiceChannel {
  /**
   * the channel topic (0-1024 characters)
   */
  topic: APIChannel["topic"];

  update(data: APIVoiceChannel) {
    super.update(data);

    this.topic = data.topic;
  }
}

export default StageChannel;
