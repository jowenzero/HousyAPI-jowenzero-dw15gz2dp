'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define(
    'House', 
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      typeRent: DataTypes.STRING,
      amenities: DataTypes.STRING,
      bedRoom: DataTypes.INTEGER,
      bathRoom: DataTypes.INTEGER
    }, 
    {})
  ;
  House.associate = function(models) {
    House.belongsTo(models.City);
    House.hasMany(models.Transaction);
  };
  return House;
};