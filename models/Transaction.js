'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
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
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.House);
    Transaction.belongsTo(models.User);
  };
  return Transaction;
};