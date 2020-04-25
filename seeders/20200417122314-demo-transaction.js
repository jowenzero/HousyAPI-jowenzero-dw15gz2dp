'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'transactions', 
      [
        {
          checkin: new Date("2020-03-30"),
          checkout: new Date("2021-03-30"),
          houseId: 1,
          total: 9000000,
          status: "Pending",
          attachment: "bca.id",
          duration: 1,
          userId: 2,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: new Date("2020-05-13"),
          checkout: new Date("2021-05-13"),
          houseId: 3,
          total: 5000000,
          status: "Pending",
          attachment: "bni.id",
          duration: 1,
          userId: 4,
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: new Date("2020-06-21"),
          checkout: new Date("2021-06-21"),
          houseId: 4,
          total: 850000,
          status: "Waiting Payment",
          attachment: "permata.id",
          duration: 1,
          userId: 4,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: new Date("2020-08-15"),
          checkout: new Date("2020-09-15"),
          houseId: 6,
          total: 500000,
          status: "Pending",
          attachment: "permata.id",
          duration: 1,
          userId: 2,
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: new Date("2020-09-09"),
          checkout: new Date("2020-09-10"),
          houseId: 8,
          total: 25000,
          status: "Pending",
          attachment: "mandiri.id",
          duration: 1,
          userId: 4,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: new Date("2020-11-26"),
          checkout: new Date("2020-11-27"),
          houseId: 9,
          total: 20000,
          status: "Waiting Payment",
          attachment: "citibank.id",
          duration: 1,
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
