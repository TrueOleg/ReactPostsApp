const config = require('../config/config');

const Sequelize = require('sequelize');
const {name, password, port, user, dialect, host} = config.db;

let sequelize = new Sequelize( name, user, password, {
  dialect,
  host,
});

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

const Posts = sequelize.define('posts', {
  
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.TEXT
  },
  content: {
    type: Sequelize.TEXT
  },
  date: {
    type: Sequelize.DATE
  }
}, { timestamps: false });

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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize, Users, Posts, Followers };