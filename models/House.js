'use strict';
module.exports = (sequelize, DataTypes) => {
  const house = sequelize.define(
    "house", 
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      typeRent: {
        type: DataTypes.ENUM,
        values: ["day", "month", "year"],
        defaultValue: "year",
      },
      amenities: {
        type: DataTypes.STRING,
        set(value) {
          return this.setDataValue("amenities", value.toString());
        },
        get() {
          return this.getDataValue("amenities") && this.getDataValue("amenities").split(",")
        }
      },
      bedRoom: DataTypes.INTEGER,
      bathRoom: DataTypes.INTEGER,
      area: DataTypes.INTEGER,
      description: DataTypes.STRING(1000)
    }, 
    {})
  ;
  house.associate = function(models) {
    house.belongsTo(models.city);
    house.hasMany(models.transaction);
    house.belongsTo(models.user);
  };
  return house;
};