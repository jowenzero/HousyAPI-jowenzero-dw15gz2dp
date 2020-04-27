'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction", 
    {
      checkin: DataTypes.DATE,
      checkout: DataTypes.DATE,
      total: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM,
        values: ["Waiting Payment", "Pending", "Approve", "Cancel"],
        defaultValue: "Waiting Payment",
      },
      attachment: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER
    }, 
    {})
  ;
  transaction.associate = function(models) {
    transaction.belongsTo(models.house);
    transaction.belongsTo(models.user);
  };
  return transaction;
};