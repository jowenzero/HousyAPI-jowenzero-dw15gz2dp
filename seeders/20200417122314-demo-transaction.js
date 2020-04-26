'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'transactions', 
      [
        {
          checkin: new Date("2020-04-30"),
          checkout: new Date("2021-04-30"),
          houseId: 1,
          total: 9000000,
          status: "Approve",
          attachment: "bca.id",
          duration: 1,
          userId: 2,
          ownerId: 3,
          createdAt: new Date("2020-04-25"),
          updatedAt: new Date("2020-04-25"),
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
          createdAt: new Date("2020-04-21"),
          updatedAt: new Date("2020-04-21"),
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
          createdAt: new Date("2020-04-19"),
          updatedAt: new Date("2020-04-19"),
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
          createdAt: new Date("2020-04-24"),
          updatedAt: new Date("2020-04-24"),
        },
        {
          checkin: new Date("2020-09-09"),
          checkout: new Date("2020-09-10"),
          houseId: 8,
          total: 25000,
          status: "Cancel",
          attachment: "mandiri.id",
          duration: 1,
          userId: 4,
          ownerId: 3,
          createdAt: new Date("2020-03-17"),
          updatedAt: new Date("2020-03-17"),
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
          createdAt: new Date("2020-04-17"),
          updatedAt: new Date("2020-04-17"),
        }
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  }
};
