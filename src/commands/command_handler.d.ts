/**
 * Command Handler of the Modeus application.
 */
import Handler from "../core/handlers";
import Modeus_Module from "../core/module";
export declare class Command_Handler extends Handler {
    constructor(name: string, directory: string);
    /**
     * Starts the handler. Run first to load the modules.
     * @param module
     */
    initialize(): Promise<void>;
    /**
     * Handles the module
     */
    handle(module: Modeus_Module): Promise<void>;
}
