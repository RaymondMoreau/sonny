import { ClientEvents} from "discord.js";
import { Client } from "undici";

export class Event<Key extends keyof ClientEvents> {
    constructor(
        public event: Key,
        public run: (...args: ClientEvents[Key]) => any
    ){

    }

}