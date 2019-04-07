const Sequelize = require('sequelize');

const sequelize = require('../data/config/sequelize');

const Emoji = sequelize.define('emoji', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true,
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