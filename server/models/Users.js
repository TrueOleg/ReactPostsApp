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
    
    // models.Users.hasMany(models.Followers, {
    //   as: 'Following',
    //   foreignKey: 'following',
    // });

    Users.belongsToMany(Users, {
      through: models.Followers,
      as: 'Follower',
      foreignKey: 'follower',
    });

    Users.belongsToMany(Users, {
      through: models.Followers,
      as: 'Following',
      foreignKey: 'following',
    });
  };
  

  return Users;
};