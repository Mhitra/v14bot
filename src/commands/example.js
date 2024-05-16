import { random } from "../utils/tenor.js";
import { EmbedBuilder } from "discord.js";
export const data = {
  name: "ağlama",
  description: "Ağlarsınız.",
  cooldown: 3,
  required_bot_permission: ["MessageSend"],
  /**
   *
   * @param {import("discord.js").ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    let user = interaction.options.getUser("kullanıcı");
    let gif = await random("anime cry", 1);

    let embed = new EmbedBuilder()
    .setImage(gif[0].media_formats.gif?.url)
    .setColor("Random")
    .setFooter({
      text: `İsteyen: ${interaction.user.username}`,
      iconURL: interaction.user.avatarURL({ dynamic: true }),
    });
    interaction.reply({ embeds: [embed] ,content: user ?` ${interaction.user} ${user} adlı kullanıcıya ağladı.` : `${interaction.user} ağladı.` });

  },
};

export const slash_data = {
  name: data.name,
  description: data.description,
options:[
  {
    name: "kullanıcı",
    description: "Kullanıcı seçin.",
    type: 6,
    required: false,
  },
]
};
