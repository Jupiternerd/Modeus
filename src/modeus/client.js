"use strict";
/**
 * Modeus Client.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class Modeus_Client extends discord_js_1.Client {
    constructor(options) {
        super({
            ...options
        });
    }
}
exports.default = Modeus_Client;
