module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT
    },
    avatar: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT
    }
  });

  Users.associate = function (models) {
    Users.belongsTo(models.Posts, {
      foreignKey: 'id',
      as: 'message',
    });
  };
  

  return Users;
};