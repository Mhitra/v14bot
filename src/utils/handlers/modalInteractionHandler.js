import { hasCooldown } from "../cooldown.js";

/**
 * @param {import("discord.js").ModalSubmitInteraction} interaction
 */
export default async (interaction) => {
  const { customId } = interaction;
  const command = interaction.client.modals.find((btn) =>
    customId.startsWith(btn.name)
  );
  if (!command) return;

  // Guild only
  if (interaction.guild) {
    const { me } = interaction.guild.members;

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
  }
  // Cooldown check
  const cooldown = hasCooldown(command, interaction.user.id, "modal");
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
