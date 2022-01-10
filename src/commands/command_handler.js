"use strict";
/**
 * Command Handler of the Modeus application.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command_Handler = void 0;
const handlers_1 = __importDefault(require("../core/handlers"));
const module_1 = __importDefault(require("../core/module"));
class Command_Handler extends handlers_1.default {
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
            await this.handle(new module_1.default(module));
    }
    /**
     * Handles the module
     */
    async handle(module) {
    }
}
exports.Command_Handler = Command_Handler;
