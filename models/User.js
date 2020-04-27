'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", 
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
    User.belongsTo(models.list);
    User.hasMany(models.house);
    User.hasMany(models.transaction);
  };
  return User;
};