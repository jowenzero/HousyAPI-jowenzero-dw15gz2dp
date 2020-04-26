'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "lists", 
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
    return queryInterface.bulkDelete("lists", null, {});
  }
};
