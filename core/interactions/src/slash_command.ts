import type {
  ApplicationCommandOption,
  CreateGlobalApplicationCommandJSON,
} from "../../types/src/interactions/slash_commands.ts";
import { ApplicationCommandOptionType } from "../../types/src/interactions/slash_commands.ts";

/**
 * Application command helper
 *
 *     command("ping", "a cool ping pong command");
 *
 * @param name Application command name
 * @param description Application command description
 * @param extra Extra application command data
 */
export const command = (
  name: string,
  description: string,
  extra?: Omit<CreateGlobalApplicationCommandJSON, "name" | "description">,
): CreateGlobalApplicationCommandJSON => ({
  name,
  description,
  ...extra,
});

const c = (
  type: ApplicationCommandOptionType,
  name: string,
  description: string,
  extra?: Omit<ApplicationCommandOption, "type" | "name" | "description">,
): ApplicationCommandOption => ({
  name,
  description,
  type,
  ...extra,
});

// deno-fmt-ignore
export const
  /** Application command sub command option */
  subCommand = c.bind(null, ApplicationCommandOptionType.SubCommand),
  /** Application command sub command group option */
  subCommandGroup = c.bind(null, ApplicationCommandOptionType.SubCommandGroup),
  /** Application command string option */
  string = c.bind(null, ApplicationCommandOptionType.String),
  /** Application command integer option */
  integer = c.bind(null, ApplicationCommandOptionType.Integer),
  /** Application command boolean option */
  boolean = c.bind(null, ApplicationCommandOptionType.Boolean),
  /** Application command user option */
  user = c.bind(null, ApplicationCommandOptionType.User),
  /** Application command channel option */
  channel = c.bind(null, ApplicationCommandOptionType.Channel),
  /** Application command role option */
  role = c.bind(null, ApplicationCommandOptionType.Role),
  /** Application command mentionable option */
  mentionable = c.bind(null, ApplicationCommandOptionType.Mentionable);

/**
 * Application command option choice helper
 * @param name Application command option choice name
 * @param value Application command option choice value
 */
export const choice = (name: string, value: string | number) => ({
  name,
  value,
});
