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
exports.ping = void 0;
const discord_js_1 = require("discord.js");
exports.ping = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Verifies the bot is online."),
    execute: (interaction) => {
        console.log("Pong!");
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const embedPing = new discord_js_1.EmbedBuilder()
                .setTitle('Temp de réponse')
                .setColor("Random")
                .setDescription("Bonjour voici mon temps de reponse " + interaction.client.uptime + "ms");
            yield interaction.reply({ embeds: [embedPing] });
        }))();
    }
};
