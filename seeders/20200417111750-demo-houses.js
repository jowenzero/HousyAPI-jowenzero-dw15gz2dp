'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'houses', 
      [
        {
          name: "House Astina",
          cityId: 1,
          address: "Permata Bintaro Residence Pondok Aren,Tangerang Selatan",
          price: 3000000,
          typeRent: "year",
          amenities: "Furnished",
          bedRoom: 3,
          bathRoom: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House Sultan",
          cityId: 2,
          address: "Permata Bintaro Residence Pondok Aren,Tangerang Selatan",
          price: 4000000,
          typeRent: "year",
          amenities: "Furnished",
          bedRoom: 2,
          bathRoom: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('houses', null, {});
  }
};
