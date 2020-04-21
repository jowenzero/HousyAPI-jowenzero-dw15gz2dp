'use strict';
// BlanK pass: admin
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
          password: "$2b$10$waqbalm7Pg2ErQeiZvOueumh6AY0yMjVteNmVgnqLpM3iizzA2KIi",
          listId: 1,
          gender: "male",
          phone: "0812-3749-3827",
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
          phone: "0812-2364-0948",
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
