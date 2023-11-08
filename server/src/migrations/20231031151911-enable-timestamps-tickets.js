'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Tickets", "createdAt", {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      
    });
    await queryInterface.addColumn("Tickets", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    
  });
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Tickets", "createdAt");
    await queryInterface.removeColumn("Tickets", "updatedAt");
  }
};
