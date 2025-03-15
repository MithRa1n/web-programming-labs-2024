const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('moviesdb', 'root', 'Qwerty123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
