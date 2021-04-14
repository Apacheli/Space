import {
  APIApplicationCommand,
  APIInteraction,
  InteractionResponseType,
} from "../../../deps.ts";

export class Command {
  constructor(public data: APIApplicationCommand) {
  }

  run(interaction: APIInteraction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `You used \`${this.data.name}\``,
      },
    };
  }
}

export default Command;
