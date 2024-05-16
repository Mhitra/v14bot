export default {
  name: "example",
  required_bot_permission: ["ViewChannel"],
  cooldown: 5,
  async execute(interaction) {

    await interaction.reply("Hello World!");
    
  },
};
