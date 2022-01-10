/**
 * Handlers of the Modeus application.
 */

import { readdir, readdirSync, statSync } from "fs";

export default class Handler {
    name: string;
    directory: string;
    constructor(name: string, directory: string) {
        this.name = name;
        this.directory = directory;
    }

    /**
     * loadModulesFromDirectory
     * loads directories and returns the path of the files that are found in that directory.
     * It is recursive so that even if there are other directories in the directory, it will load them.
     * @param directory directory to load modules from.
     * @returns 
     */

    loadModulesFromDirectory(directory: string = this.directory): string | undefined {
        // Definition block. + readdirSync for synchronous read of directory.
        const files = readdirSync(this.directory);
        let new_path: string;

        // Loop block for each file.
        for (const file of files) {
            // Define a new path that is the directory folder + the file name.
            new_path = `${directory}/${file}`;
            // And if that file is a directory, then we call this function again, recursively.
            if (statSync(new_path).isDirectory()) return this.loadModulesFromDirectory(new_path);
            // Finally, if the file is a .js file, then we return the path of  the file.
            else return new_path;
        };
    };

}