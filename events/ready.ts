import {IEvent} from "../interfaces/event";

export const ready : IEvent = {
    name: "ready",
    once:false,
    execute: (client,args) => {
        console.log("Bot is ready!");
    }
}