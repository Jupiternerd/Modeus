"use strict";
/**
 * Event Handler of the Modeus application.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = __importDefault(require("../core/handlers"));
const events_1 = __importDefault(require("./events"));
class Event_Handler extends handlers_1.default {
    events = [];
    constructor(name, directory) {
        super(name, directory);
    }
    /**
     * Starts the handler. Run first to load the modules.
     * @param module
     */
    async initialize() {
        await this.loadModulesFromDirectory();
        for (const module of this.modules)
            await this.handle(new events_1.default(module));
    }
    async handle(module) {
    }
}
exports.default = Event_Handler;
