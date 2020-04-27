'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
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
  user.associate = function(models) {
    user.belongsTo(models.list);
    user.hasMany(models.house);
    user.hasMany(models.transaction);
  };
  return user;
};