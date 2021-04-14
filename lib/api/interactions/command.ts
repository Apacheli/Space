import {
  APIApplicationCommand,
  APIInteraction,
  InteractionResponseType,
} from "../../../deps.ts";

export class Command {
  id;
  applicationID;
  name;
  description;
  options;
  defaultPermission;

  constructor(data: APIApplicationCommand) {
    this.id = data.id;
    this.applicationID = data.application_id;
    this.name = data.name;
    this.description = data.description;
    this.options = data.options;
    this.defaultPermission = data.default_permission;
  }

  run(interaction: APIInteraction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `You used \`${this.name}\``,
      },
    };
  }
}

export default Command;
