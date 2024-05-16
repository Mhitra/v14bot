
export default {
  name: "example",
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction) {
    interaction.reply("Example");


  },
};
