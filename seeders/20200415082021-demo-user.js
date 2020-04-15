'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users', 
      [
        {
          username: "spiderman",
          password: "lovespiderman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "spiderman",
          username: "spiderman",
          email: "spiderman@gmail.com",
          password: "lovespiderman",
          listAsId: 1,
          gender: "male",
          address: "Jln. Marvel Universe, RT.21 RW.69",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
