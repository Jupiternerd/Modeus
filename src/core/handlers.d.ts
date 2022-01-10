/**
 * Handlers of the Modeus application.
 */
export default class Handler {
    name: string;
    directory: string;
    modules: string[];
    constructor(name: string, directory: string);
    /**
     * loadModulesFromDirectory
     * loads directories and returns the path of the files that are found in that directory.
     * It is recursive so that even if there are other directories in the directory, it will load them.
     * @param directory directory to load modules from.
     * @returns
     */
    loadModulesFromDirectory(directory?: string): Promise<void>;
}
