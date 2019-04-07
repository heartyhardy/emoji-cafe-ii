const Sequelize = require('sequelize');

// CONNECT TO MYSQL DB THROUGH SEQUELIZE - DEV
const sequelize = new Sequelize('emoji_cafe_ii', 'root', '123321', {
    host: 'localhost',
    dialect: 'mysql'
});

// FOR PROD PROBABLY WILL BE USING A CONNECTION URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = sequelize;