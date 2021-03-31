import { APIChannel, APIVoiceRegion } from "../../deps.ts";
import GuildChannel from "./guildchannel.ts";

// discord-api-types add this please
export enum VideoQualityMode {
  AUTO,
  FULL,
}

export class VoiceChannel extends GuildChannel {
  bitrate: APIChannel["bitrate"];
  rtcRegion!: APIVoiceRegion | null;
  userLimit: APIChannel["user_limit"];
  videoQualityMode?: VideoQualityMode;

  update(
    data: APIChannel & {
      rtc_region: APIVoiceRegion | null;
      video_quality_mode?: VideoQualityMode;
    },
  ) {
    super.update(data);

    this.bitrate = data.bitrate;
    this.rtcRegion = data.rtc_region;
    this.userLimit = data.user_limit;
    this.videoQualityMode = data.video_quality_mode;
  }
}

export default VoiceChannel;
