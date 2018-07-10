const Sequelize = require('sequelize');

const sequelize = require('../models/sequelize');

const Users = sequelize.define('users', {
  
    id: { 
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    avatar: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT
    }
  }, { timestamps: false });

module.exports = { Users };  