'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction', 
    {
      checkin: DataTypes.STRING,
      checkout: DataTypes.STRING,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
      attachment: DataTypes.STRING
    }, 
    {})
  ;
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.House);
  };
  return Transaction;
};