'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "eventImages", {
        type: Sequelize.STRING,
      
    });
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "eventImages");
  }
};