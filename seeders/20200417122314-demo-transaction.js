'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'transactions', 
      [
        {
          checkin: "30-03-2020",
          checkout: "30-03-2021",
          houseId: 1,
          total: 3000000,
          status: "Waiting Payment",
          attachment: "bca.id",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: "13-01-2020",
          checkout: "13-01-2021",
          houseId: 2,
          total: 5000000,
          status: "Waiting Approve",
          attachment: "bni.id",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  }
};
