
export default async (message) => {
    let prefix = "!"
    if (!commandFile) return;
    if (commandFile.required_bot_permission) {
        if (!me.permissions.has(commandFile.required_bot_permission)) return message.reply(`Bu komutu kullanmak için ${commandFile.required_bot_permission.join(", ")} yetkisine sahip olmam gerekiyor.`);
    }
    if (commandFile.required_user_permission) {
        if (!message.member.permissions.has(commandFile.required_user_permission)) return message.reply(`Bu komutu kullanmak için ${commandFile.required_user_permission.join(", ")} yetkisine sahip olman gerekiyor.`);
    }
    let owner = [
        "714157928239726662",
      ]

      if(commandFile.owner && !owner.includes(
        message.user.id
      )) return message.reply({
        embeds: [
          {
            title: "Yetersiz Yetki",
            description: `Bu işlemi yapabilmek için botun sahibi olmalısın!`,
            color: interaction.client.errorColor,
          },
        ],
      });
  
    try {
        await commandFile.execute(message, args);
      } catch (e) {
        console.error(e);
        return message.reply("Bir hata oluştu!");
        }

}