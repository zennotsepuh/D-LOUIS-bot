require('dotenv').config();

module.exports = {
    token: process.env.BOT_TOKEN,
    adminIds: process.env.ADMIN_IDS.split(',').map(id => parseInt(id)),
    developer: process.env.DEVELOPER,
    botName: process.env.BOT_NAME,
    version: process.env.VERSION,
    
    // File paths
    dataPath: './data/',
    premiumFile: './data/premium.json',
    adminsFile: './data/admins.json',
    sendersFile: './data/senders.json',
    
    // Bug settings
    maxDelayCount: 9999,
    maxCrashCount: 5000,
    maxBlankCount: 10000,
    maxForceCloseCount: 3000,
    maxInvisibleCount: 2000
};
