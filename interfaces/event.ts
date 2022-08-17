import {Client, Interaction} from "discord.js";

export interface IEvent {
    name: string;
    once:boolean;
    execute:(client:Client,...args:Interaction[]) => void;
}