'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cities", 
      [
        {
          name: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tangerang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bandung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cities", null, {});
  }
};
