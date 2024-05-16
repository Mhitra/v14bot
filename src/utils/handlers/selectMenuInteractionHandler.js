import { hasCooldown } from "../cooldown.js";

/**
 * @param {import("discord.js").AnySelectMenuInteraction} interaction
 */
export default async (interaction) => {
  const { customId } = interaction;
  const command = interaction.client.select_menus.find((select_menu) =>
    customId.includes(select_menu.name)
  );
  if (!command) return;

  // Guild only
  if (interaction.guild) {
    const { me } = interaction.guild.members;
    if (
      command.permission &&
      !interaction.member.permissions.has(command.permission)
    ) {
      return interaction.response({
        embeds: [
          {
            title: "Yetersiz Yetki",
            description: `Bu işlemi yapabilmek için \`${command.permission}\` yetkisine sahip olmalısın!`,
            color: interaction.client.errorColor,
          },
        ],
        ephemeral: true,
      });
    }
    // Permission check
    if (
      command.required_bot_permissions &&
      command.required_bot_permissions.some(
        (perm) => !me.permissionsIn(interaction.channel).has(perm)
      )
    ) {
      const permissions = command.required_bot_permissions
        .filter((perm) => !me.permissionsIn(interaction.channel).has(perm))
        .join(", ");
      return interaction.response({
        embeds: [
          {
            title: "Yetersiz Yetki",
            description: `Bu işlemi yapabilmek için bana ${permissions} yetkilerini vermelisin!`,
            color: interaction.client.errorColor,
          },
        ],
        ephemeral: true,
      });
    }
  }

  // Cooldown check
  const cooldown = hasCooldown(command, interaction.user.id, "selectmenu");
  if (cooldown)
    return interaction.response({
      embeds: [
        {
          title: "Biraz Yavaşla!",
          description: `Bu işlemi yapabilmek için \`${cooldown}\` saniye beklemelisin!`,
          color: interaction.client.errorColor,
        },
      ],
      ephemeral: true,
    });

  try {
    await command.execute(interaction);
  } catch (e) {
    console.error(e);

    interaction.response({
      embeds: [
        {
          title: "Bir Hata Oluştu!",
          description: `Bir hata oluştu! Lütfen daha sonra tekrar dene!`,
          color: interaction.client.errorColor,
        },
      ],
      ephemeral: true,
    });
  }
};
