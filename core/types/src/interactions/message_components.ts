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
}

/** https://discord.dev/interactions/message-components#component-types */
export enum ComponentTypes {
  /** A container for other components */
  ActionRow = 1,
  /** A clickable button */
  Button,
  /** A select menu for picking from choices */
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

/** https://discord.dev/interactions/message-components#select-menu-object */
export interface SelectMenu {
  /** a developer-defined identifier for the button, max 100 characters */
  custom_id: string;
  /** the choices in the select, max 25 */
  options?: SelectOption[];
  /** custom placeholder text if nothing is selected, max 100 characters */
  placeholder?: string;
  /** the minimum number of items that must be chosen; default 1, min 0, max 25 */
  min_values?: number;
  /** the maximum number of items that can be chosen; default 1, max 25 */
  max_values?: number;
}

/** https://discord.dev/interactions/message-components#select-menu-object-select-option-structure */
export interface SelectOption {
  /** the user-facing name of the option, max 25 characters */
  label: string;
  /** the dev-define value of the option, max 100 characters */
  value: string;
  /** an additional description of the option, max 50 characters */
  description?: string;
  /**` name`, `id`, and `animated` */
  emoji?: Partial<Emoji>;
  /** will render this option as selected by default */
  default?: boolean;
}
