const Sequelize = require('sequelize');

const sequelize = new Sequelize('student', '1', 'nodejs', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  define: {
    timestamps: false
  }
});

const models = {
  Users: sequelize.import('./Users'),
  Followers: sequelize.import('./Followers'),
  Posts: sequelize.import('./Posts'),
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;