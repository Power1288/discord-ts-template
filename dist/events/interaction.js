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
Object.defineProperty(exports, "__esModule", { value: true });
exports.interaction = void 0;
const discord_js_1 = require("discord.js");
exports.interaction = {
    name: "interactionCreate",
    once: false,
    execute: (client, interaction) => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            if (interaction.type === discord_js_1.InteractionType.ApplicationCommand) {
                // @ts-ignore
                const command = interaction.client.commands.get(interaction.commandName);
                try {
                    yield command.execute(interaction);
                }
                catch (err) {
                    console.log(err);
                }
            }
        }))();
    }
};
