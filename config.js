const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "UVIgQIyQ#hnBmpp1VptZRsDjKJD5qojbsbHPZAVXjRK4NH-lP1U4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/b53a8448a280837695c3c.png",
ALIVE_MSG: process.env.ALIVE_MSG || "Elix Is Alive NoW👍🇱🇰✅
   ®𝗚𝗲𝟆𝗮𝗿𝗮𝐭𝗲𝙙 𝝗𝞤 𝗘ꟾ𝖎✘𝗮 ‐𝝡𝗗
 ",
};
