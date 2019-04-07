const Sequelize = require('sequelize');

const sequelize = require('../data/config/sequelize');

const Emoji = sequelize.define('emoji', {
    _id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            isUUID: 4
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [3, 50]
        }
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [3, 50]
        }
    }
})

module.exports = Emoji