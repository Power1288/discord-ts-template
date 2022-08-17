"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ready = void 0;
exports.ready = {
    name: "ready",
    once: false,
    execute: (client, args) => {
        console.log("Bot is ready!");
    }
};
