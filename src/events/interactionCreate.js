import commandInteractionHandler from "../utils/handlers/commandInteractionHandler.js";
import buttonInteractionHandler from "../utils/handlers/buttonInteractionHandler.js";
import modalInteractionHandler from "../utils/handlers/modalInteractionHandler.js";
import selectMenuInteractionHandler from "../utils/handlers/selectMenuInteractionHandler.js";
import contextMenuInteractionHandler from "../utils/handlers/contextMenuInteractionHandler.js";

/**
 * @param {import("discord.js").Interaction} interaction
 */
export default (interaction) => {
  if (interaction.isChatInputCommand())
    return commandInteractionHandler(interaction);
  else if (interaction.isButton()) return buttonInteractionHandler(interaction);
  else if (interaction.isModalSubmit())
    return modalInteractionHandler(interaction);
  else if (interaction.isAnySelectMenu())
    return selectMenuInteractionHandler(interaction);
  else if (interaction.isContextMenuCommand())
    return contextMenuInteractionHandler(interaction);
};
