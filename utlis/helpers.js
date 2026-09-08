const fs = require('fs');
const path = require('path');
const config = require('./config');

class Helpers {
    static ensureDir(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    static loadJSON(file) {
        try {
            this.ensureDir(path.dirname(file));
            if (!fs.existsSync(file)) {
                fs.writeFileSync(file, JSON.stringify([]));
            }
            return JSON.parse(fs.readFileSync(file));
        } catch (error) {
            console.error('Error loading JSON:', error);
            return [];
        }
    }

    static saveJSON(file, data) {
        try {
            this.ensureDir(path.dirname(file));
            fs.writeFileSync(file, JSON.stringify(data, null, 2));
            return true;
        } catch (error) {
            console.error('Error saving JSON:', error);
            return false;
        }
    }

    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static generateId() {
        return Math.random().toString(36).substring(2, 15);
    }

    static isAdmin(userId, admins) {
        return admins.includes(userId);
    }

    static isPremium(userId, premiums) {
        return premiums.some(user => 
            user.id === userId && new Date(user.expiresAt) > new Date()
        );
    }

    static isSender(userId, senders) {
        return senders.includes(userId);
    }

    static isAuthorized(userId, admins, premiums, senders) {
        return this.isAdmin(userId, admins) || 
               this.isPremium(userId, premiums) || 
               this.isSender(userId, senders);
    }

    static getRuntime() {
        const uptime = process.uptime();
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

module.exports = Helpers;
