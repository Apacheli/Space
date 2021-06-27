import type {
  ButtonStyles,
  Component,
} from "../../types/src/interactions/message_components.ts";
import { ComponentTypes } from "../../types/src/interactions/message_components.ts";

/**
 * Action row component helper
 *
 *     HTTPClient.createMessage("0123456789", {
 *       components: [
 *         actionRow([...]),
 *       ],
 *     });
 *
 * @param components Components for the action row
 */
export const actionRow = (components?: Component[]): Component => ({
  components,
  type: ComponentTypes.ActionRow,
});

/**
 * Button component helper
 *
 *     actionRow([
 *       button("id", "press me!", ButtonStyles.Primary),
 *     ]);
 *
 * @param customId Button custom ID
 * @param label Button label
 * @param style Button style
 * @param extra Extra button data
 */
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

/**
 * Select menu component helper
 *
 *     actionRow([
 *       selectMenu("id", [selectMenuOption(...)]),
 *     ]);
 *
 * @param customId Select menu custom ID
 * @param options Select menu options
 * @param extra Extra select menu data
 */
export const selectMenu = (
  customId: string,
  options: Component["options"],
  extra?: Omit<Component, "custom_id" | "options" | "type">,
): Component => ({
  custom_id: customId,
  options,
  type: ComponentTypes.SelectMenu,
  ...extra,
});

/**
 * Select menu option component helper
 *
 *     selectMenu("hi", [
 *       selectMenuOption("select me!", 1, "descriptive description"),
 *     ]);
 *
 * @param label Select menu option label
 * @param value Select menu option value
 * @param description Select menu option description
 */
export const selectMenuOption = (
  label: string,
  value: string,
  description?: string,
) => ({
  description,
  label,
  value,
});
