import {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  Colors,
  ActivityType,
  
} from "discord.js";
import { read, readdir } from "fs";
import mongoose from "mongoose";
import extra_utils from "./utils/extra_utils.js";
import * as database from "./utils/database/mongoose.js";
import "dotenv/config.js";
import { createRequire } from "module";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const { token, DEFAULT_EMOJI } = process.env;
const require = createRequire(import.meta.url);
const emojis = require("./emojis.json");
const colors = require("./utils/colors.json");

// Client instance
const client = new Client({
  presence: {
    activities: [
      {
        name: "Pinkie'yi",
        type: ActivityType.Watching,
      },
    ],
    status: "idle",
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
  ],
  partials: [Partials.Channel],
});

// Assignments
extra_utils();
client.commands = new Collection();
client.message_commands = new Collection();
client.select_menus = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.context_menus = new Collection();
client.database = database;
client.colors = Colors;
client.defaultColor = 0x2a2d30;
client.errorColor = Colors.Red;
client.successColor = Colors.Green;
client.emoji = (emoji_name) =>
  emoji_name in emojis ? emojis[emoji_name] : DEFAULT_EMOJI;
// Connect to MongoDB
await mongoose.connect(process.env.mongo).then(() => {
  console.log("Connected to MongoDB");
});

  client.colors = colors
// Event Loader
readdir("./events", { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const eventName = file.split(".")[0];
      if (eventName === "ready")
        return client.once(eventName, (...args) =>
          import(`./events/${file}`).then((e) => e.default(...args))
        );

      client.on(eventName, (...args) => {
        import(`./events/${file}`).then((e) => e.default(...args))
      });
    });
});
// Command Loader
readdir(`./commands`, { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      import(`./commands/${file}`).then((c) => {
        client.commands.set(c.data.name, c.data);
      });
    });
});
readdir(`./message_commands`, { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      import(`./message_commands/${file}`).then((c) => {
        client.message_commands.set(c.data.name, c.data);
      });
    });
});
// Button loader
readdir("./buttons", { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      import(`./buttons/${file}`).then((b) => {
        client.buttons.set(b.default.name, b.default);
      });
    });
});

// Modal loader
readdir("./modals", { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      import(`./modals/${file}`).then((b) => {
        client.modals.set(b.default.name, b.default);
      });
    });
});

// Select Menu loader
readdir("./select_menus", { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      import(`./select_menus/${file}`).then((b) => {
        client.select_menus.set(b.default.name, b.default);
      });
    });
});

// Context Menu loader
readdir("./context_menus", { encoding: "utf-8" }, (err, files) => {
  if (err) return console.error(err);

  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      import(`./context_menus/${file}`).then((b) => {
        client.context_menus.set(b.data.name, b.data);
      });
    });
});

client.login(token);