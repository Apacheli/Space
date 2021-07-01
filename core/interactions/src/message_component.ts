import type {
  Button,
  ButtonStyles,
  Component,
  SelectMenu,
  SelectOption,
} from "../../types/src/interactions/message_components.ts";
import { ComponentTypes } from "../../types/src/interactions/message_components.ts";

interface ActionRow<T extends Component> {
  components?: T[];
  type: ComponentTypes.ActionRow;
}

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
export const actionRow = <T extends Component>(
  components?: T[],
): ActionRow<T> => ({
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
  extra?: Button,
): Button => ({
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
 *       selectMenu("id", [selectOption(...)]),
 *     ]);
 *
 * @param customId Select menu custom ID
 * @param options Select menu options
 * @param extra Extra select menu data
 */
export const selectMenu = (
  customId: string,
  options: SelectOption[],
  extra?: SelectMenu,
): SelectMenu => ({
  custom_id: customId,
  options,
  type: ComponentTypes.SelectMenu,
  ...extra,
});

/**
 * Select option helper
 *
 *     selectMenu("hi", [
 *       selectMenuOption("select me!", "1", "descriptive description"),
 *     ]);
 *
 * @param label Select option label
 * @param value Select option value
 * @param description Select option description
 */
export const selectOption = (
  label: string,
  value: string,
  description?: string,
): SelectOption => ({
  description,
  label,
  value,
});
