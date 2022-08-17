import {IEvent} from "../interfaces/event";
import {Interaction, InteractionType} from "discord.js";
import {ISlashCommand} from "../interfaces/slashCommand";

export const interaction: IEvent = {
    name:"interactionCreate",
    once:false,
    execute : (client,interaction:Interaction) => {
        (async () => {
            if (interaction.type === InteractionType.ApplicationCommand) {
                // @ts-ignore
                const command = interaction.client.commands.get(interaction.commandName);
                try {
                    await command.execute(interaction);
                }catch (err) {
                    console.log(err)
                }
            }
        })()
    }

}