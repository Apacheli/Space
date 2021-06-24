import type { Component } from "../../types/src/interactions/message_components.ts";
import { ComponentTypes } from "../../types/src/interactions/message_components.ts";
import type { Message } from "../../types/mod.ts";

export const actionRow = (components?: Component[]): Component => ({
  components,
  type: ComponentTypes.ActionRow,
});

export const button = (): Component => ({
  type: ComponentTypes.Button,
});

export const selectMenu = (): Component => ({
  type: ComponentTypes.SelectMenu,
});
