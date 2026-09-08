module.exports = (bot, dataManager) => {
    const menuData = {
        bugshow: {
            caption: `
❏━━━[ 𝐃 - 𝐋𝐎𝐔𝐈𝐒 ${dataManager.version} 𝐏𝐑𝐎 ]━━━❏
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃⚇ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : ${dataManager.developer}
┃⚇ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${dataManager.botName}
┃⚇ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : ${dataManager.version} 𝚅𝙸𝙿
┃⚇ 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 : 𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃
┃⚇ 𝙿𝚁𝙴𝙵𝙸𝚇 : / ( 𝚂𝙻𝙰𝚂𝙷 )
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━[ 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂 ]━━━━━━━┓
┃⚇ /Dlouisdelay 62××× [ Delay Invisble ]
┃⚇ /Dlouiscrashinvis 62××× [ Crash Invisble ]
┃⚇ /Dlouisforcebeta 62××× [ Forclose Beta ]
┃⚇ /Dlouisdelayv2 62××× [ Bebas Spam ]
┃⚇ /Dlouisblank 62xxx [ Blank Hard ]
┃⚇ /Dlouiscrash 62xxx [ Crash Notif ]
┗━━━━━━━━━━━━━━━━━━━━━┛
`,
            buttons: [[{ text: "𝗕𝗮𝗰𝗸", callback_data: "mainmenu" }]]
        },
        ownermenu: {
            caption: `
❏━━━[ 𝐃 - 𝐋𝐎𝐔𝐈𝐒 ${dataManager.version} 𝐏𝐑𝐎 ]━━━❏
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃⚇ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : ${dataManager.developer}
┃⚇ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${dataManager.botName}
┃⚇ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : ${dataManager.version} 𝚅𝙸𝙿
┃⚇ 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 : 𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃
┃⚇ 𝙿𝚁𝙴𝙵𝙸𝚇 : / ( 𝚂𝙻𝙰𝚂𝙷 )
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━[ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗠𝗲𝗻𝘂 ]━━━━━┓
┃⚇ /addprem
┃⚇ /delprem
┃⚇ /listprem
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━[ 𝗔𝗱𝗺𝗶𝗻 𝗠𝗲𝗻𝘂 ]━━━━━┓
┃⚇ /addadmin
┃⚇ /deladmin
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━[ 𝗖𝗼𝗻𝘁𝗿𝗼𝗹 𝗠𝗲𝗻𝘂 ]━━━━━┓
┃⚇ /addsender
┃⚇ /gconly
┗━━━━━━━━━━━━━━━━━━━━━┛
`,
            buttons: [[{ text: "𝗕𝗮𝗰𝗸", callback_data: "mainmenu" }]]
        },
        thanksto: {
            caption: `
┏━━━━━━[ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼 ]━━━━━┓
┃⚇ Zenxy.sexx [ Developer ]
┃⚇ Allah Swt [ My God ]
┃⚇ Orang Tua [ Support ]
┃⚇ All Buyer [ Support ]
┗━━━━━━━━━━━━━━━━━━━━┛
`,
            buttons: [[{ text: "𝗕𝗮𝗰𝗸", callback_data: "mainmenu" }]]
        },
        tools: {
            caption: `
┏━━━━━━[ 𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 ]━━━━━┓
┃⚇ /tourl [ 𝚁𝙴𝙿𝙻𝚈 𝙼𝙴𝙳𝙸𝙰 ]
┃⚇ /nfsw [ 𝚂𝙴𝙰𝚁𝙲𝙷 𝟷𝟾+ ]
┃⚇ /iqc [ 𝚂𝚃𝙸𝙺𝙴𝚁 𝙸𝙿𝙷𝙾𝙽𝙴 ]
┃⚇ /time [ 𝙲𝙴𝙺 𝚆𝙰𝙺𝚃𝚄 𝚂𝙴𝙺𝙰𝚁𝙰𝙽𝙶 ]
┗━━━━━━━━━━━━━━━━━━━━┛
`,
            buttons: [[{ text: "𝗕𝗮𝗰𝗸", callback_data: "mainmenu" }]]
        },
        mainmenu: {
            caption: `
❏━━━[ 𝐃 - 𝐋𝐎𝐔𝐈𝐒 ${dataManager.version} 𝐏𝐑𝐎 ]━━━❏
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃⚇ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : ${dataManager.developer}
┃⚇ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${dataManager.botName}
┃⚇ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : ${dataManager.version} 𝚅𝙸𝙿
┃⚇ 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 : 𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃
┃⚇ 𝙿𝚁𝙴𝙵𝙸𝚇 : / [ 𝚂𝙻𝙰𝚂𝙷 ]
┗━━━━━━━━━━━━━━━━━━━━━━┛
`,
            buttons: [
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
            ]
        }
    };

    bot.on('callback_query', async (callbackQuery) => {
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;
        const data = callbackQuery.data;
        
        const menu = menuData[data] || menuData.mainmenu;
        
        await bot.editMessageCaption(menu.caption, {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: menu.buttons }
        });
    });
};
