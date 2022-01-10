/**
 * Event Handler of the Modeus application.
 */

import Handler from "../core/handlers";
import Event from "./events";

export default class Event_Handler extends Handler {
    events: Array<Event> = [];
    constructor(name: string, directory: string) {
        super(name, directory);

    }

    /**
     * Starts the handler. Run first to load the modules.
     * @param module 
     */
     async initialize() {
        await this.loadModulesFromDirectory();
        for (const module of this.modules) await this.handle(new Event(module));
        
    }

    async handle(module: Event) {

    }
}