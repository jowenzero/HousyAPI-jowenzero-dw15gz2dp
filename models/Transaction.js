'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction', 
    {
      checkin: DataTypes.STRING,
      checkout: DataTypes.STRING,
      total: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM,
        values: ["Waiting Payment", "Waiting Approve", "Approve"],
        defaultValue: "Waiting Payment",
      },
      attachment: DataTypes.STRING
    }, 
    {})
  ;
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.House);
    Transaction.belongsTo(models.User);
  };
  return Transaction;
};