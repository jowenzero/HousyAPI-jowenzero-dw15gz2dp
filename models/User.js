'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", 
    {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        defaultValue: "male",
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING
    }, 
    {}
  );
  User.associate = function(models) {
    User.belongsTo(models.List);
    User.hasMany(models.House);
    User.hasMany(models.Transaction);
  };
  return User;
};