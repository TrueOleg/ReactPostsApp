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

  

  return Followers;
};