import * as X from "../../types/mod.ts";

export const command = (
  name: string,
  description: string,
  extra?: Omit<X.CreateGlobalApplicationCommandJSON, "name" | "description">,
) => ({
  name,
  description,
  ...extra,
});

const _commandOption = (
  type: X.ApplicationCommandOptionType,
  name: string,
  description: string,
  extra?: Omit<X.ApplicationCommandOption, "type" | "name" | "description">,
) => ({
  name,
  description,
  type,
  ...extra,
});

export const subCommand = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.SubCommand,
);

export const subCommandGroup = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.SubCommandGroup,
);

export const string = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.String,
);

export const integer = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.Integer,
);

export const boolean = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.Boolean,
);

export const user = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.User,
);

export const channel = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.Channel,
);

export const role = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.Role,
);

export const mentionable = _commandOption.bind(
  null,
  X.ApplicationCommandOptionType.Mentionable,
);

export const choice = (name: string, value: string | number) => ({
  name,
  value,
});
