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

    async loadEvents() {
        const events = this.loadModulesFromDirectory(this.directory)

    }
}