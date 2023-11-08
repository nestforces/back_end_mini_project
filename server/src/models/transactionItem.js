module.exports = (sequelize, Sequelize) => {
    const transactionItem = sequelize.define(
      "transactionItem",
      {
        transactionId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ticketId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "transactionItems",
      }
    );
  
    transactionItem.associate = (models) => {
        transactionItem.belongsTo(models.transaction, { foreignKey: "transactionId" });
        transactionItem.belongsTo(models.ticket, { foreignKey: "ticketId" });
        transactionItem.hasOne(models.eventAttendee, { foreignKey: "transactionItemId"});
    };
  
    return transactionItem;
  };
  