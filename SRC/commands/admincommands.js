const Helpers = require('../utils/helpers');

module.exports = (bot, dataManager) => {
    // Add Premium
    bot.onText(/\/addprem (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetId = parseInt(match[1]);
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ LU BUKAN ADMIN ANJING!');
            return;
        }
        
        if (dataManager.premiums.some(user => user.id === targetId)) {
            await bot.sendMessage(chatId, '⚠️ USER UDAH PREMIUM BANG!');
            return;
        }
        
        dataManager.premiums.push({
            id: targetId,
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        });
        dataManager.saveData();
        
        await bot.sendMessage(chatId, `✅ USER ${targetId} UDAH JADI PREMIUM!`);
    });

    // Delete Premium
    bot.onText(/\/delprem (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetId = parseInt(match[1]);
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        const index = dataManager.premiums.findIndex(user => user.id === targetId);
        if (index === -1) {
            await bot.sendMessage(chatId, '⚠️ USER GAK ADA DI PREMIUM!');
            return;
        }
        
        dataManager.premiums.splice(index, 1);
        dataManager.saveData();
        await bot.sendMessage(chatId, `✅ USER ${targetId} DIHAPUS DARI PREMIUM!`);
    });

    // List Premium
    bot.onText(/\/listprem/, async (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        let list = '📋 LIST PREMIUM USERS:\n\n';
        dataManager.premiums.forEach((user, index) => {
            list += `${index+1}. ID: ${user.id}\n`;
            list += `   Expires: ${new Date(user.expiresAt).toLocaleString()}\n\n`;
        });
        
        if (dataManager.premiums.length === 0) {
            list += '⚠️ BELUM ADA USER PREMIUM!';
        }
        
        await bot.sendMessage(chatId, list);
    });

    // Add Admin
    bot.onText(/\/addadmin (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetId = parseInt(match[1]);
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        if (dataManager.admins.includes(targetId)) {
            await bot.sendMessage(chatId, '⚠️ USER UDAH ADMIN!');
            return;
        }
        
        dataManager.admins.push(targetId);
        dataManager.saveData();
        await bot.sendMessage(chatId, `✅ USER ${targetId} JADI ADMIN!`);
    });

    // Delete Admin
    bot.onText(/\/deladmin (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetId = parseInt(match[1]);
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        if (targetId === userId) {
            await bot.sendMessage(chatId, '❌ GAK BISA HAPUS DIRI SENDIRI!');
            return;
        }
        
        const index = dataManager.admins.indexOf(targetId);
        if (index === -1) {
            await bot.sendMessage(chatId, '⚠️ USER GAK ADA DI ADMIN!');
            return;
        }
        
        dataManager.admins.splice(index, 1);
        dataManager.saveData();
        await bot.sendMessage(chatId, `✅ USER ${targetId} DIHAPUS DARI ADMIN!`);
    });

    // Add Sender
    bot.onText(/\/addsender (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetId = parseInt(match[1]);
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        if (dataManager.senders.includes(targetId)) {
            await bot.sendMessage(chatId, '⚠️ USER UDAH ADA DI SENDER!');
            return;
        }
        
        dataManager.senders.push(targetId);
        dataManager.saveData();
        await bot.sendMessage(chatId, `✅ USER ${targetId} JADI SENDER!`);
    });

    // GC Only Toggle
    bot.onText(/\/gconly/, async (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        dataManager.gcOnly = !dataManager.gcOnly;
        dataManager.saveData();
        await bot.sendMessage(chatId, `✅ GC ONLY MODE: ${dataManager.gcOnly ? 'AKTIF' : 'NONAKTIF'}`);
    });
};
