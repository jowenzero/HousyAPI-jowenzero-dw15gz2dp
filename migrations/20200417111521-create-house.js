'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('houses', {
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
          model: "cities",
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
        type: Sequelize.STRING,
        get() {
          return this.getDataValue('amenities').split(', ')
        },
        set(val) {
          this.setDataValue('amenities',val.join(', '));
        },
      },
      bedRoom: {
        type: Sequelize.INTEGER
      },
      bathRoom: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('houses');
  }
};