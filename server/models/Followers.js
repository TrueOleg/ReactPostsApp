module.exports = (sequelize, DataTypes) => {
  const Followers = sequelize.define('followers', {
    follower: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    following: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true
    }
  });

  Followers.associate = function (models) {
    models.Followers.belongsTo(models.Users, {
      as: 'one',
      foreignKey: 'follower',
      targetKey: 'id'
    });
    models.Followers.belongsTo(models.Users, {
      as: 'two',
      foreignKey: 'following',
      targetKey: 'id'
    });
  };

  

  return Followers;
};