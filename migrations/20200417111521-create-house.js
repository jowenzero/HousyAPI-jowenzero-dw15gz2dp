'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Houses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cities",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      address: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      typeRent: {
        type: Sequelize.STRING
      },
      amenities: {
        type: Sequelize.STRING
      },
      bedRoom: {
        type: Sequelize.INTEGER
      },
      bathRoom: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Houses");
  }
};