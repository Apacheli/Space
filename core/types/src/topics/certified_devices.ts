// deno-lint-ignore-file camelcase

// https://discord.dev/topics/certified-devices

import type { Snowflake } from "../reference.ts";

/** https://discord.dev/topics/certified-devices#connecting */
export interface ConnectingQuery {
  /** `1` */
  v: number;
  /** your app's client id */
  client_id: Snowflake;
  /** `json` */
  encoding: "json";
}

/** https://discord.dev/topics/certified-devices#models-device-object */
export interface Device {
  /** the type of device */
  type: DeviceTypes;
  /** the device's Windows UUID */
  id: string;
  /** the hardware vendor */
  vendor: Vendor;
  /** the model of the product */
  model: Model;
  /** UUIDs of related devices */
  related: string[];
  /** if the device's native echo cancellation is enabled */
  echo_cancelation?: boolean;
  /** if the device's native noise suppression is enabled */
  noise_suppression?: boolean;
  /** if the device's native automatic gain control is enabled */
  automatic_gain_control?: boolean;
  /** if the device is hardware muted */
  hardware_mute?: boolean;
}

/** https://discord.dev/topics/certified-devices#models-vendor-object */
export interface Vendor {
  /** name of the vendor */
  name: string;
  /** url for the vendor */
  url: string;
}

/** https://discord.dev/topics/certified-devices#models-model-object */
export interface Model {
  /** name of the model */
  name: string;
  /** url for the model */
  url: string;
}

/** https://discord.dev/topics/certified-devices#models-device-types */
export enum DeviceTypes {
  AudioInput = "audioinput",
  AudioOutput = "audiooutput",
  VideoInput = "videoinput",
}
