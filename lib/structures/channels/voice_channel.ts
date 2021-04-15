import { APIChannel } from "../deps.ts";
import GuildChannel from "./guild_channel.ts";

/**
 * Class representing a guild voice channel on Discord.
 */
export class VoiceChannel extends GuildChannel {
  /**
   * the bitrate (in bits) of the voice channel
   */
  bitrate: APIChannel["bitrate"];
  /**
   * [voice region](https://discord.dev/resources/voice#voice-region-object) id
   * for the voice channel, automatic when set to null
   */
  rtcRegion!: APIChannel["rtc_region"];
  /**
   * the user limit of the voice channel
   */
  userLimit: APIChannel["user_limit"];
  /**
   * the camera
   * [video quality mode](https://discord.dev/resources/channel-object-video-quality-modes)
   * of the voice channel, 1 when not present
   */
  videoQualityMode: APIChannel["video_quality_mode"];

  update(data: APIChannel) {
    super.update(data);

    this.bitrate = data.bitrate;
    this.rtcRegion = data.rtc_region;
    this.userLimit = data.user_limit;
    this.videoQualityMode = data.video_quality_mode;
  }
}

export default VoiceChannel;
