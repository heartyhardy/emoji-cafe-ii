const sequelize = require('./sequelize');

const Emoji = require('../../models/emoji');

// GLOBAL SYNC
const sync_db = async() => {
    try{
        let result = await sequelize.sync();
        return true;
    }catch(e)
    {
        return false;
    }
}

module.exports = {sync_db, sequelize, Emoji}