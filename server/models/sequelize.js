const config = require('../config/config');

const Sequelize = require('sequelize');
const {name, password, port, user, dialect, host} = config.db;

let sequelize = new Sequelize( name, user, password, {
  dialect,
  host,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;