// Type: Context Menu Command
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} from "discord.js";

export const data = {
  name: "example",
  /**
   * @param {import("discord.js").ContextMenuCommandInteraction} interaction
   */
  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageGuild))
    return interaction.response({
      content:
        "Bu butonu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın.",
      ephemeral: true,
    });

    const embed = {
      title: "Giveaway Ayarları",
      color: interaction.client.defaultColor,
    };

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("example")
        .setLabel("Başlat")
        .setStyle(ButtonStyle.Success)
        .setEmoji("🎉")
    )


    interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};

export const slash_data = {
  name: data.name,
  type: 3,
  default_member_permissions: 32n,
};
// Type 2 = User Context Menu
// Type 3 = Message Context Menu
