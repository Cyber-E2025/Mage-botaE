const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os'); // Corrected require statement

cmd({
    pattern: "alive",
    desc: "Check if the bot is online.",
    category: "main",
    react: "🖥️",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, 
    botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, 
    participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        const Alive = `
        ╭ ❰ *ɪᴍ*  𝗘ꟾ𝖎✘𝗮 ‐𝝡𝗗 ❱❱
┃
┃ *ʜɪ*  ${pushname} *ɪ'ᴍ ᴀʟɪᴠᴇ* 
┃
┃⦁✅ *ʀᴜɴᴛɪᴍᴇ*: ${runtime(process.uptime())}
┃⦁🖥️ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem() / 1024 / 1024)} MB
┃ *⦁👩‍💻ᴄʀᴇᴀᴛᴏʀ* : Nethindu Thaminda
┃⦁🤝 *ᴏᴡɴᴇʀ* : ${config.OWNER}
┃
╰═══════════════

> 𝙰𝙻𝙻 𝙼𝙴𝙽𝚄

┃ *.𝚖𝚎𝚗𝚞* 📃
┃ *.𝚖𝚊𝚒𝚗𝚖𝚎𝚗𝚞* ✅  
┃*. 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚖𝚎𝚗𝚞* ⬇️  
┃ *.𝚐𝚛𝚘𝚞𝚙𝚖𝚎𝚗𝚞*  👥  
┃ *.𝚐𝚊𝚖𝚎𝚜𝚖𝚎𝚗𝚞* 🎮  
┃ *.𝚊𝚒𝚖𝚎𝚗𝚞*  🦾  
┃ *.𝚊𝚍𝚖𝚒𝚗𝚖𝚎𝚗𝚞* 🧑‍💻  
┃ *.𝚜𝚎𝚛𝚌𝚑𝚖𝚎𝚗𝚞* 🔎  
┃ *.𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛𝚖𝚎𝚗𝚞* 🧪  
┃ *.𝚏𝚞𝚗𝚖𝚎𝚗𝚞* 🤗  
┃ *.𝚘𝚠𝚗𝚎𝚛𝚖𝚎𝚗𝚞* ❤️
╰═══════════════
> 𝗯𝘆 𝗕𝗜𝗧 𝘅 ᵀᴹ

> *ꜰʀᴏᴍ 🇱🇰 ʙʏ ᴇʙᴏx❤️*

> 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗘𝗹𝗶𝘅𝗮 𝗠𝗗`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: Alive
        }, { quoted: mek });

        await conn.sendMessage(from, {
            react: { text: '❤️', key: sentMsg.key } // React to the message just sent
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
