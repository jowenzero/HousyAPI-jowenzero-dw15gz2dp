'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', 
    {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      address: DataTypes.STRING
    }, 
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.List);
  };
  return User;
};