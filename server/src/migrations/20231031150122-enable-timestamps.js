'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "createdAt", {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      
    });
    await queryInterface.addColumn("Events", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    
  });
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "createdAt");
    await queryInterface.removeColumn("Events", "updatedAt");
  }
};
