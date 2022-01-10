/**
 * Modeus Client.
 */

import { Client, ClientOptions } from "discord.js";


export default class Modeus_Client extends Client {
    constructor(options: ClientOptions) {
        super(
            {
                ...options
            }
        )

    }
}