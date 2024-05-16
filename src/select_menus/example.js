import {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
  PermissionFlagsBits,
} from "discord.js";

export default {
  name: "setup",
  permission: PermissionFlagsBits.ManageGuild,
  cooldown: 2,
  /**
   * @param {import("discord.js").AnySelectMenuInteraction} interaction
   */
  execute(interaction) {
    const value = interaction.values[0];
    if (interaction.message.editable)
      interaction.message.edit({ components: interaction.message.components });

    if (value == "log_channel") {
      var modal = new ModalBuilder()
        .setTitle("Log Sistemini Ayarla")
        .setCustomId("setup-logChannel")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("channel_id")
              .setLabel("Kanal ID Veya Kanal Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("status")
              .setLabel("Aktif/Pasif")
              .setMinLength(1)
              .setMaxLength(5)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          )
        );
    } else if (value == "suggestion_channel") {
      var modal = new ModalBuilder()
        .setTitle("Öneri Sistemini Ayarla")
        .setCustomId("setup-suggestionChannel")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("channel_id")
              .setLabel("Kanal ID Veya Kanal Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("status")
              .setLabel("Aktif/Pasif")
              .setMinLength(1)
              .setMaxLength(5)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          )
        );
    } else if (value == "ticket_system") {
      var modal = new ModalBuilder()
        .setTitle("Ticket Sistemini Ayarla")
        .setCustomId("setup-ticketSystem")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("ticket_panel_channel_id")
              .setLabel("Ticket Panelinin Gönderileceği Kanal")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("category_id")
              .setLabel("Kategori ID Veya Kategori Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("log_channel")
              .setLabel("Log Kanalı ID Veya Log Kanalı Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("moderation_role_ids")
              .setLabel("Moderator Rol ID/Ad (Virgülle Ayırın)")
              .setMinLength(2)
              .setRequired(false)
              .setStyle(TextInputStyle.Paragraph)
          )
        );
    } else if (value == "design_channel") {
      var modal = new ModalBuilder()
        .setTitle("Tasarım Kanalını Ayarla")
        .setCustomId("setup-designChannel")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("channel_id")
              .setLabel("Kanal ID Veya Kanal Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(true)
              .setStyle(TextInputStyle.Short)
          )
        );
    } else if (value == "projects_channel") {
      var modal = new ModalBuilder()
        .setTitle("Projeler Kanalını Ayarla")
        .setCustomId("setup-projectsChannel")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("channel_id")
              .setLabel("Kanal ID Veya Kanal Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(true)
              .setStyle(TextInputStyle.Short)
          )
        );
    } else if (value == "forum_channel") {
      var modal = new ModalBuilder()
        .setTitle("Forum Kanalını Ayarla")
        .setCustomId("setup-forumChannel")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("channel_id")
              .setLabel("Kanal ID Veya Kanal Adı")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(true)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("status")
              .setLabel("Aktif/Pasif")
              .setMinLength(1)
              .setMaxLength(5)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          )
        );
    } else if (value == "level_system") {
      var modal = new ModalBuilder()
        .setTitle("Level Bildirim Kanalını Ayarla")
        .setCustomId("setup-level")
        .setComponents(
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("channel_id")
              .setLabel("Kanal ID Veya Kanal Adı (Bildirim)")
              .setMinLength(2)
              .setMaxLength(20)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("status")
              .setLabel("Aktif/Pasif")
              .setMinLength(1)
              .setMaxLength(5)
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("block_channel_id")
              .setLabel("Engellenecek Kanal IDleri (Virgülle Ayırın)")
              .setRequired(false)
              .setStyle(TextInputStyle.Paragraph)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("block_role_id")
              .setLabel("Engellenecek Rol IDleri (Virgülle Ayırın)")
              .setRequired(false)
              .setStyle(TextInputStyle.Paragraph)
          ),
          new ActionRowBuilder().setComponents(
            new TextInputBuilder()
              .setCustomId("reqXp")
              .setLabel("Gerekli XP (Varsayılan: 100)")
              .setRequired(false)
              .setStyle(TextInputStyle.Short)
          )
        );
    }

    interaction.showModal(modal);
  },
};
