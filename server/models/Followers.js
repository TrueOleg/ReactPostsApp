const Sequelize = require('sequelize');

const sequelize = require('../models/sequelize');

const Followers = sequelize.define('followers', {
  
    follower: { 
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    following: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true
    }
  }, { timestamps: false });

module.exports = { Followers };  