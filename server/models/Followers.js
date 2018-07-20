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
    // Followers.belongsTo(models.Users, { as: 'Follower', foreignKey: 'follower'});

    Followers.belongsTo(models.Users, { as: 'Following', foreignKey: 'id'});
    
  };

  return Followers;
};