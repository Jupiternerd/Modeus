import { Message } from "discord.js";
import Modeus_Module from "../core/module";
/**
 * Modeus Command Object.
 */
export default abstract class Command extends Modeus_Module {
    description: string;
    usage: string;
    aliases: string[];
    args: string[];
    guildOnly: boolean;
    ownerOnly: boolean;
    disabled: boolean;
    constructor(name: string, description: string, usage: string, aliases: string[], guildOnly: boolean, ownerOnly: boolean);
    abstract run(message: Message, args: string[]): void;
}
