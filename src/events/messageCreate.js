
import messageHandler from "../utils/handlers/messageHandler.js";
import kelimelik from "../utils/kelime.js";
import ai from "../utils/ai.js";
/**
 * @param {import("discord.js").Message} Message
 
 */
export default async (message) => {

    if (message.author.bot) return;
    if (message.content.startsWith("!")) {
        messageHandler(message);
    }
    if (message.content.startsWith("x!")) {
        ai(message);
        
    }else{
        kelimelik(message);
    }


};
  
