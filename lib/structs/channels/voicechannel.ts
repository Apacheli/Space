import { APIChannel, APIVoiceRegion } from "../../../deps.ts";
import GuildChannel from "./guildchannel.ts";

// discord-api-types add this please
export enum VideoQualityMode {
  AUTO,
  FULL,
}

/**
 * Class representing a guild voice channel on Discord.
 */
export interface APIVoiceChannel extends APIChannel {
  "rtc_region": APIVoiceRegion | null;
  "video_quality_mode"?: VideoQualityMode;
}

export class VoiceChannel extends GuildChannel {
  /**
   * the bitrate (in bits) of the voice channel
   */
  bitrate: APIChannel["bitrate"];
  /**
   * [voice region](https://discord.dev/resources/voice#voice-region-object) id
   * for the voice channel, automatic when set to null
   */
  rtcRegion!: APIVoiceRegion | null;
  /**
   * the user limit of the voice channel
   */
  userLimit: APIChannel["user_limit"];
  /**
   * the camera
   * [video quality mode](https://discord.dev/resources/channel-object-video-quality-modes)
   * of the voice channel, 1 when not present
   */
  videoQualityMode?: VideoQualityMode;

  update(data: APIVoiceChannel) {
    super.update(data);

    this.bitrate = data.bitrate;
    this.rtcRegion = data.rtc_region;
    this.userLimit = data.user_limit;
    this.videoQualityMode = data.video_quality_mode;
  }
}

export default VoiceChannel;
