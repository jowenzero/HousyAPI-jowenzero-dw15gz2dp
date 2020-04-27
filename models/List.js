'use strict';
module.exports = (sequelize, DataTypes) => {
  const list = sequelize.define(
    "list", 
    {
      name: DataTypes.STRING
    }, 
    {}
  );
  list.associate = function(models) {
    list.hasMany(models.user);
  };
  return list;
};