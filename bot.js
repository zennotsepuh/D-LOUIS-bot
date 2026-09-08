const TelegramBot = require('node-telegram-bot-api');
const config = require('./utils/config');
const Helpers = require('./utils/helpers');
const DataManager = require('./utils/dataManager');

// Load semua commands
const bugCommands = require('./commands/bugCommands');
const adminCommands = require('./commands/adminCommands');
const userCommands = require('./commands/userCommands');
const callbackHandler = require('./handlers/callbackHandler');
const errorHandler = require('./handlers/errorHandler');

// Init bot
const bot = new TelegramBot(config.token, { polling: true });

// Init data manager
const dataManager = new DataManager();

// Register semua handlers
bugCommands(bot, dataManager);
adminCommands(bot, dataManager);
userCommands(bot, dataManager);
callbackHandler(bot, dataManager);
errorHandler(bot);

// Startup message
console.log(`
╔═══════════════════════════════════════════════════╗
║  𝐃 - 𝐋𝐎𝐔𝐈𝐒 ${config.version} 𝐏𝐑𝐎 - TELEGRAM BUG BOT     ║
║  DEVELOPER: ${config.developer}                        ║
║  STATUS: ONLINE ✅                                ║
║  MODE: UNRESTRICTED 🔥                           ║
║  ADMIN COUNT: ${dataManager.admins.length}                        ║
║  PREMIUM COUNT: ${dataManager.premiums.length}                      ║
║  SENDER COUNT: ${dataManager.senders.length}                       ║
╚═══════════════════════════════════════════════════╝
`);

module.exports = { bot };
