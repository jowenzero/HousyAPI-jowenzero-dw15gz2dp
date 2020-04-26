'use strict';
// BlanK pass: admin
// jester pass: cherry4laifu
// KING pass: iamking
// emili4 pass: emilibot

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users", 
      [
        {
          fullName: "Ray Collins",
          username: "BlanK",
          email: "raycollins@gmail.com",
          password: "$2b$10$waqbalm7Pg2ErQeiZvOueumh6AY0yMjVteNmVgnqLpM3iizzA2KIi",
          listId: 1,
          gender: "Male",
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
          gender: "Male",
          phone: "0812-2364-0948",
          address: "Kalta Sector 4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kiyazi Nishigami",
          username: "KING",
          email: "kiyaziKING@gmail.com",
          password: "$2b$10$uUdZ31hOXhIJa8/35LkgHO6z6Ybm1BngGALntcrTWdIgkoaQAy53m",
          listId: 1,
          gender: "Male",
          phone: "0813-5613-5494",
          address: "Kalta Sector 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Emilia Valentine",
          username: "emili4",
          email: "emiliavalentine@gmail.com",
          password: "$2b$10$4qacbaaChAIaNq5KT8G71eXOm3jwrK.9xXKWpOKlwrSzLLFXkIRKq",
          listId: 2,
          gender: "Female",
          phone: "0812-2356-7674",
          address: "Kalta Sector 5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
