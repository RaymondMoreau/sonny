import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, PermissionResolvable } from "discord.js";
import { ExtendedClient } from "../structures/client";

/**
 * {
 *   name: "commandname",
 *    description: "any description"
 *     run: async({interaction, client}) => {
 * 
 *          }
 * }
 */

interface RunOptions {
    client: ExtendedClient,
    interaction: CommandInteraction,
    args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    userPermissions?: PermissionResolvable[];
    cooldown: 5;
    run: RunFunction;
} & ChatInputApplicationCommandData