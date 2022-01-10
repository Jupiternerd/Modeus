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
class Command_Handler extends handlers_1.default {
    constructor(name, directory) {
        super(name, directory);
    }
}
exports.Command_Handler = Command_Handler;
