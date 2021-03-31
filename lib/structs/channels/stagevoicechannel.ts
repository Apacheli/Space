import { APIChannel } from "../../deps.ts";
import VoiceChannel, { APIVoiceChannel } from "./voicechannel.ts";

export class StageVoiceChannel extends VoiceChannel {
  topic: APIChannel["topic"];

  update(data: APIVoiceChannel) {
    super.update(data);

    this.topic = data.topic;
  }
}

export default StageVoiceChannel;
