import { APIChannel } from "../../deps.ts";
import VoiceChannel, { APIVoiceChannel } from "./voicechannel.ts";

export class StageChannel extends VoiceChannel {
  topic: APIChannel["topic"];

  update(data: APIVoiceChannel) {
    super.update(data);

    this.topic = data.topic;
  }
}

export default StageChannel;
