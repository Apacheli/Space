import { APIChannel } from "../../deps.ts";
import VoiceChannel from "./voicechannel.ts";

export class StageVoiceChannel extends VoiceChannel {
  topic: APIChannel["topic"];

  update(data: APIChannel) {
    super.update(data);

    this.topic = data.topic;
  }
}

export default StageVoiceChannel;
