"use strict";
/**
 * Event Handler of the Modeus application.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = __importDefault(require("../core/handlers"));
class Event_Handler extends handlers_1.default {
    events = [];
    constructor(name, directory) {
        super(name, directory);
    }
    async loadEvents() {
        const events = this.loadModulesFromDirectory(this.directory);
    }
}
exports.default = Event_Handler;
