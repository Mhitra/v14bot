import GuildSchema from "./schemas/Guild.js";

export const fetchGuild = async (guildId) => {
  var guild_db = await GuildSchema.findOne({ guildId });

  if (!guild_db) guild_db = await GuildSchema.create({ guildId });

  return guild_db;
};

export const updateGuild = async (guildId, update) => {
  await GuildSchema.updateOne({ guildId }, update, { upsert: true });
};
