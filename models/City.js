'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define(
    "city", 
    {
      name: DataTypes.STRING
    }, 
    {}
  );
  city.associate = function(models) {
    city.hasMany(models.house);
  };
  return city;
};