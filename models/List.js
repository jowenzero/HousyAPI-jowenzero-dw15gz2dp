'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    "list", 
    {
      name: DataTypes.STRING
    }, 
    {}
  );
  List.associate = function(models) {
    List.hasMany(models.User);
  };
  return List;
};