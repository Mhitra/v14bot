import { EmbedBuilder } from "discord.js";

/**
 * @param {import("discord.js").Message} oldMessage
 * @param {import("discord.js").Message} newMessage
 */
export default async (oldMessage, newMessage) => {
  /*
  let data = await newMessage.client.database.fetchGuild(newMessage.guild.id)
  let channel = data?.logChannel?.channel_id
  let status = data?.logChannel?.status

  if (!status) return
  if (newMessage.author.bot) return
  const Update = new EmbedBuilder()
    .setColor(newMessage.client.errorColor)
    .setAuthor({ name: `${newMessage.member.displayName}`, iconURL: `${newMessage.author.avatarURL({ dynamic: true, size: 512 })}`, })
    .setThumbnail(newMessage.author.avatarURL({ dynamic: true, size: 512 }))
    .addFields({ name: "Eski Mesaj", value: `\`\`\`${oldMessage.content.slice(0, 250)}\`\`\`` })
    .addFields({ name: "Yeni Mesaj", value: `\`\`\`${newMessage.content.slice(0, 250)}\`\`\`` })
    .addFields({ name: "Mesaj Linki", value: newMessage.url })
    .setFooter({ text: `ID: ${newMessage.author.id}` })
    .setTimestamp()

  newMessage.client.channels.cache.get(channel)?.send({ embeds: [Update] })
  */
};
