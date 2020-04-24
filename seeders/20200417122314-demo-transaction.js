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
          total: 9000000,
          status: "Pending",
          attachment: "bca.id",
          userId: 2,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: "13-05-2020",
          checkout: "13-05-2021",
          houseId: 3,
          total: 5000000,
          status: "Pending",
          attachment: "bni.id",
          userId: 4,
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: "21-06-2020",
          checkout: "21-07-2020",
          houseId: 4,
          total: 850000,
          status: "Waiting Payment",
          attachment: "permata.id",
          userId: 4,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: "15-08-2020",
          checkout: "15-09-2020",
          houseId: 6,
          total: 500000,
          status: "Pending",
          attachment: "permata.id",
          userId: 2,
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: "09-09-2020",
          checkout: "10-09-2020",
          houseId: 8,
          total: 25000,
          status: "Pending",
          attachment: "mandiri.id",
          userId: 4,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: "26-11-2020",
          checkout: "27-11-2020",
          houseId: 9,
          total: 20000,
          status: "Waiting Payment",
          attachment: "citibank.id",
          userId: 2,
          ownerId: 3,
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
