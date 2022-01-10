"use strict";
/**
 * Events class of Modeus application.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("../core/module"));
class Event extends module_1.default {
    constructor(name) {
        super(name);
    }
}
exports.default = Event;
