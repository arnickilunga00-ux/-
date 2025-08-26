const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "XTREME~XMD~mk5SyDJI#Swz0hTbRVT1_w1eazTzf0UDJ8iom1GIBXo7c--kE_xI",
    
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    ANTI_CALL: process.env.ANTI_CALL || "false",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MR CHAGRIN 🤍*",
    
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    WELCOME: process.env.WELCOME || "false",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_LINK_WARNINGS: process.env.ANTI_LINK_WARNINGS || 5, // 5 avertissements
    ANTI_LINK_EMOJI: process.env.ANTI_LINK_EMOJI || "⚠️",
    
    MENTION_REPLY: process.env.MENTION_REPLY || "true",
    MENTION_REPLY_TEXT: process.env.MENTION_REPLY_TEXT || "> J'suis là 😁",
    
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/mry39g.jpg",
    PREFIX: process.env.PREFIX || ".",
    
    AUTO_BIO: process.env.AUTO_BIO || "false",
    TIME_ZONE: process.env.TIME_ZONE || "Afrique/centrale",
    
    BOT_NAME: process.env.BOT_NAME || "Mr CHAGRIN",
    STICKER_NAME: process.env.STICKER_NAME || "༄☥🤴🏽᪳𝗝𝐔፝֟𝐒𝚻𝚵🌹᪳𝚸፝֟𝐑𝚰𝚴𝐂𝚵™☘️᪳࿐",
    
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    
    DELETE_LINKS: process.env.DELETE_LINKS || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "MR CHAGRIN",
    OWNER_NAME: process.env.OWNER_NAME || "MR CHAGRIN",
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ MR CHAGRIN*",
    
    ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.pixabay.com/photo/2016/11/29/09/32/emoji-1869790_1280.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "Bot en ligne ✅",
    
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    
    MODE: process.env.MODE || "public",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    READ_CMD: process.env.READ_CMD || "false",
    
    DEV: process.env.DEV || "MR CHAGRIN",
    ANTI_VV: process.env.ANTI_VV || "true",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

    // Commandes spécifiques
    TAGALL_ONLY_OWNER: true,  // seul toi peut utiliser tagall
    GAME_PAUSE_TIME: 10 * 60 * 1000, // 10 minutes
};
