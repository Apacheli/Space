import type {
  ButtonStyles,
  Component,
} from "../../types/src/interactions/message_components.ts";
import { ComponentTypes } from "../../types/src/interactions/message_components.ts";

export const actionRow = (components?: Component[]): Component => ({
  components,
  type: ComponentTypes.ActionRow,
});

export const button = (
  customId: string,
  label: string,
  style: ButtonStyles,
  extra?: Omit<Component, "custom_id" | "label" | "style" | "type">,
): Component => ({
  custom_id: customId,
  label,
  style,
  type: ComponentTypes.Button,
  ...extra,
});

export const selectMenu = (
  customId: string,
  options: Component["options"],
  extra?: Omit<Component, "custom_id" | "options" | "type">,
): Component => ({
  custom_id: customId,
  type: ComponentTypes.SelectMenu,
  options,
  ...extra,
});

export const SelectMenuOption = (
  label: string,
  value: string,
  description?: string,
) => ({
  label,
  value,
  description,
});
