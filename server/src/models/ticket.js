module.exports = (sequelize, Sequelize) => {
    const ticket = sequelize.define(
      "ticket",
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          price: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          endSale: {
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
  