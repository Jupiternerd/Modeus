/**
 * Event Handler of the Modeus application.
 */
import Handler from "../core/handlers";
import Event from "./events";
export default class Event_Handler extends Handler {
    events: Array<Event>;
    constructor(name: string, directory: string);
    /**
     * Starts the handler. Run first to load the modules.
     * @param module
     */
    initialize(): Promise<void>;
    handle(module: Event): Promise<void>;
}
