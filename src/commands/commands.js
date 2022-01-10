"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("../core/module"));
/**
 * Modeus Command Object.
 */
class Command extends module_1.default {
    description;
    usage;
    aliases;
    args = [];
    guildOnly;
    ownerOnly;
    constructor(name, description, usage, aliases, guildOnly, ownerOnly) {
        super(name);
        this.description = description;
        this.usage = usage;
        this.aliases = aliases;
        this.guildOnly = guildOnly;
        this.ownerOnly = ownerOnly;
    }
}
exports.default = Command;
