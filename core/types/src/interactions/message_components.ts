// deno-lint-ignore-file camelcase

// https://discord.dev/interactions/message-components

import type { Emoji } from "../resources/emoji.ts";

/** https://discord.dev/interactions/message-components#component-object */
export interface Component {
  /** [component type](https://discord.dev/interactions/message-components#component-types) */
  type: ComponentTypes;
  /** one of [button styles](https://discord.dev/interactions/message-components#buttons-button-styles) */
  style?: ButtonStyles;
  /** text that appears on the button, max 80 characters */
  label?: string;
  /**` name`, `id`, and `animated` */
  emoji?: Partial<Emoji>;
  /** a developer-defined identifier for the button, max 100 characters */
  custom_id?: string;
  /** a url for link-style buttons */
  url?: string;
  /** whether the button is disabled, default `false` */
  disabled?: boolean;
  /** a list of child components */
  components?: Component[];
  /** TODO: Undocumented */
  placeholder?: string;
  /** TODO: Undocumented */
  max_values?: number;
  /** TODO: Undocumented */
  min_values?: number;
  /** TODO: Undocumented */
  options?: { description?: string; label: string; value: string }[];
}

/** https://discord.dev/interactions/message-components#component-types */
export enum ComponentTypes {
  /** A container for other components */
  ActionRow = 1,
  /** A clickable button */
  Button,
  /** TODO: Undocumented */
  SelectMenu,
}

/** https://discord.dev/interactions/message-components#buttons */
export interface Button {
  /** `2` for a button */
  type: number;
  /** one of [button styles](https://discord.dev/interactions/message-components#buttons-button-styles) */
  style: ButtonStyles;
  /** text that appears on the button, max 80 characters */
  label?: string;
  /** `name`, `id`, and `animated` */
  emoji?: Partial<Emoji>;
  /** a developer-defined identifier for the button, max 100 characters */
  custom_id?: string;
  /** a url for link-style buttons */
  url?: string;
  /** whether the button is disabled, default `false` */
  disabled?: boolean;
}

/** https://discord.dev/interactions/message-components#buttons-button-styles */
export enum ButtonStyles {
  /** blurple */
  Primary = 1,
  /** grey */
  Secondary,
  /** green */
  Success,
  /** red */
  Danger,
  /** grey, navigates to a URL */
  Link,
}
