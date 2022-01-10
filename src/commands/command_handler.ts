/**
 * Command Handler of the Modeus application.
 */

import Handler from "../core/handlers";
import Modeus_Module from "../core/module";

export class Command_Handler extends Handler {
    constructor(name: string, directory: string) {
        super(name, directory);
    }

    /**
     * Starts the handler. Run first to load the modules.
     * @param module 
     */
    async initialize() {
        await this.loadModulesFromDirectory();
        for (const module of this.modules) await this.handle(new Modeus_Module(module));
        
    }
    /**
     * Handles the module
     */
    async handle(module: Modeus_Module) {

        
        
    }


}