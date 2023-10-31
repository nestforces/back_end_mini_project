module.exports = (sequelize, Sequelize) => {
    const ticket = sequelize.define(
      "ticket",
      {
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
      },
      {
        timestamps: false,
        tableName: "tickets",
      }
    );
  
    ticket.associate = (models) => {
      ticket.belongsTo(models.event, { foreignKey: "ticketId" });
      ticket.belongsTo(models.ticketCategory, { foreignKey: "ticketCategoryId"})
      ticket.belongsTo(models.priceCategory, { foreignKey: "priceCategoryId"})
    };
  
    return ticket;
  };
  