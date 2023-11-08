module.exports = (sequelize, Sequelize) => {
    const eventAttendee = sequelize.define(
      "eventAttendee",
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ticketId: {
            type: Sequelize.INTEGER,
          },
          transactionItemId: {
            type: Sequelize.INTEGER,
          },
        quantity: {
          type: Sequelize.INTEGER,
        },
      },
      {
        timestamps: false,
        tableName: "eventAttendees",
      }
    );
  
    eventAttendee.associate = (models) => {
    eventAttendee.belongsTo(models.transactionItem, { foreignKey: "transactionItemId"})
    };
  
    return eventAttendee;
  };
  