import {SlashCommandBuilder} from "discord.js";

export interface ISlashCommand {
    data:SlashCommandBuilder;
    execute:(interaction:any) => void;
}