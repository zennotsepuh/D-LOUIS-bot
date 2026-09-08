const Helpers = require('./helpers');
const config = require('./config');

class DataManager {
    constructor() {
        this.admins = Helpers.loadJSON(config.adminsFile);
        this.premiums = Helpers.loadJSON(config.premiumFile);
        this.senders = Helpers.loadJSON(config.sendersFile);
        this.gcOnly = false;
        this.developer = config.developer;
        this.botName = config.botName;
        this.version = config.version;
    }

    saveData() {
        Helpers.saveJSON(config.adminsFile, this.admins);
        Helpers.saveJSON(config.premiumFile, this.premiums);
        Helpers.saveJSON(config.sendersFile, this.senders);
    }

    isAdmin(userId) {
        return Helpers.isAdmin(userId, this.admins);
    }

    isPremium(userId) {
        return Helpers.isPremium(userId, this.premiums);
    }

    isSender(userId) {
        return Helpers.isSender(userId, this.senders);
    }

    isAuthorized(userId) {
        return Helpers.isAuthorized(userId, this.admins, this.premiums, this.senders);
    }
}

module.exports = DataManager;
