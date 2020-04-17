'use strict';
// BlanK pass: zeds2020
// jesTER pass: cherry4laifu

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users', 
      [
        {
          fullName: "Ray Collins",
          username: "BlanK",
          email: "raycollins@gmail.com",
          password: "$2b$10$LpspbePytW14/w1CnpTuk.KRIQycHp6Rn3WLIZhRVijF8k/jtpXTe",
          listId: 1,
          gender: "male",
          address: "Kalta Sector 6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kazuya Nishigami",
          username: "jester",
          email: "kazuNishi@gmail.com",
          password: "$2b$10$USho0h9uiwcCo4CvYXONduTXzcpe/JSrMldsrveY7.sgVzyJrPwUe",
          listId: 2,
          gender: "male",
          address: "Kalta Sector 4",
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
