import {Client, Collection, REST, Routes} from "discord.js";
import {config} from "./config";
import commandsList from "./commands";
import eventList from "./events";
import {ISlashCommand} from "./interfaces/slashCommand";
import {IEvent} from "./interfaces/event";

const bot = new Client({intents:32767});
// @ts-ignore
bot.commands = new Collection()
const commands : any = [];

commandsList.map((command:ISlashCommand) => {
    commands.push(command.data.toJSON());
    console.log(command.data.name)
    // @ts-ignore
    bot.commands.set(command.data.name, command);
})

eventList.map((event:IEvent) => {
    if (!event.once) {
        bot.on(event.name,(...args) => event.execute(bot, ...args));
        return
    }
    bot.once(event.name,(...args) => event.execute(bot, ...args));
})

const rest = new REST({version: '9'}).setToken(config.bot.token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(config.bot.appId, config.guild.id),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

bot.login(config.bot.token)