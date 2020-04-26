'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Lists", 
      [
        {
          name: "owner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tenant",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lists", null, {});
  }
};
