'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tickets", {
      ticket_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_of_ticket: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ticket_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ticket_end_date: {
            type: Sequelize.STRING,
            allowNull:false
        },
        ticketCategoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        priceCategoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        eventId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tickets");
  },
};
