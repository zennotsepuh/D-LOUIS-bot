const Helpers = require('../utils/helpers');

module.exports = (bot, dataManager) => {
    // Start Command
    bot.onText(/\/start/, async (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const username = msg.from.username || 'Tidak ada username';
        
        const caption = `
❏━━━[ 𝐃 - 𝐋𝐎𝐔𝐈𝐒 ${dataManager.version} 𝐏𝐑𝐎 ]━━━❏
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃⚇ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : ${dataManager.developer}
┃⚇ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${dataManager.botName}
┃⚇ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : ${dataManager.version} 𝚅𝙸𝙿
┃⚇ 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 : 𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃
┃⚇ 𝙿𝚁𝙴𝙵𝙸𝚇 : / [ 𝚂𝙻𝙰𝚂𝙷 ]
┗━━━━━━━━━━━━━━━━━━━━━━┛

USER INFO:
👤 ID: ${userId}
👤 USERNAME: ${username}
👤 STATUS: ${dataManager.isAdmin(userId) ? 'ADMIN' : 
           dataManager.isPremium(userId) ? 'PREMIUM' : 
           dataManager.isSender(userId) ? 'SENDER' : 'USER'}
⏰ RUNTIME: ${Helpers.getRuntime()}

⚠️ GUNAKAN DENGAN BIJAK! 
⚠️ SEMUA RESIKO TANGGUNG SENDIRI!
`;

        const buttons = [
            [
                { text: "𝗕𝘂𝗴 𝗠𝗲𝗻𝘂", callback_data: "bugshow" },
                { text: "𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂", callback_data: "ownermenu" }
            ],
            [
                { text: "𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼", callback_data: "thanksto" },
                { text: "𝗧𝗼𝗼𝗹𝘀", callback_data: "tools" }
            ],
            [
                { text: "𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻", url: "https://t.me/aboutzuxyofficial" }
            ]
        ];
        
        await bot.sendPhoto(chatId, 'https://telegra.ph/file/your-image-url-here.jpg', {
            caption,
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: buttons }
        });
    });
};
