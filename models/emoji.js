const Sequelize = require('sequelize');

const sequelize = require('../data/config/sequelize');

const Emoji = sequelize.define('emoji', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        validate: {
            isInt: true,
            isNumeric: true,
            isUUID: 4
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    emoji: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [1, 2]
        }
    }
})

module.exports = Emoji