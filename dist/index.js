"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const commands_1 = __importDefault(require("./commands"));
const events_1 = __importDefault(require("./events"));
const bot = new discord_js_1.Client({ intents: 32767 });
// @ts-ignore
bot.commands = new discord_js_1.Collection();
const commands = [];
commands_1.default.map((command) => {
    commands.push(command.data.toJSON());
    console.log(command.data.name);
    // @ts-ignore
    bot.commands.set(command.data.name, command);
});
events_1.default.map((event) => {
    if (!event.once) {
        bot.on(event.name, (...args) => event.execute(bot, ...args));
        return;
    }
    bot.once(event.name, (...args) => event.execute(bot, ...args));
});
const rest = new discord_js_1.REST({ version: '9' }).setToken(config_1.config.bot.token);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Started refreshing application (/) commands.');
        yield rest.put(discord_js_1.Routes.applicationGuildCommands(config_1.config.bot.appId, config_1.config.guild.id), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
        console.error(error);
    }
}))();
bot.login(config_1.config.bot.token);
