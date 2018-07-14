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
    models.Users.hasMany(models.Posts, {
      foreignKey: 'id',
    });
    models.Users.belongsToMany(models.Users, {
      as: 'one',
      through: models.Followers,
      foreignKey: 'follower',
      onDelete: 'cascade',
    });
    models.Users.belongsToMany(models.Users, {
      as: 'two',
      through: models.Followers,
      foreignKey: 'following',
      onDelete: 'cascade',
    });
  };
  

  return Users;
};