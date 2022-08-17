import {ISlashCommand} from "../interfaces/slashCommand";
import {EmbedBuilder, SlashCommandBuilder} from "discord.js";

export const ping : ISlashCommand = {
    data:new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Verifies the bot is online."),
    execute: (interaction) => {
        console.log("Pong!");
        (async () => {
            const embedPing = new EmbedBuilder()
                .setTitle('Temp de réponse')
                .setColor("Random")
                .setDescription("Bonjour voici mon temps de reponse "+interaction.client.uptime+ "ms")
            await interaction.reply({embeds:[embedPing]});
        })()
    }
}