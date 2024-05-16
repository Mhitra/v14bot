import { readdirSync } from "fs";
import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const commands = [];

for (const file of readdirSync("./commands")) {
  const command = await import(`./commands/${file}`);
  console.log(command.slash_data.name)
  commands.push(command.slash_data)
}

for (const file of readdirSync("./context_menus")) {
  const command = await import(`./context_menus/${file}`);
  commands.push(command.slash_data);
}

client.once("ready", () => {
  client.application.commands
    .set(commands)
    .then(() => {
      
      console.log(`Commands are registered for ${client.user.username}`);
      process.exit();
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
});

client.login(process.env.TOKEN);
