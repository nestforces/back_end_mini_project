module.exports = (sequelize, Sequelize) => {
    const transaction = sequelize.define(
      "transaction",
      {
        totalQuantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        TotalPrice: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        referralCode: {
          type: Sequelize.STRING,
          allowNull: true,  
        },
        referralCodeBy: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        eventId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        // eventAttendeeId: {
        //     type: Sequelize.INTEGER,
        //   },
        transactionImages:{
          type: Sequelize.STRING
        }
        
      },
      {
        timestamps: false,
        tableName: "transactions",
      }
    );
  
    transaction.associate = (models) => {
    transaction.belongsTo(models.user, { foreignKey: "userId" });
    transaction.belongsTo(models.event, { foreignKey: "eventId" });
    transaction.hasMany(models.category, { foreignKey: "categoryId"})
    transaction.hasMany(models.ticket, { foreignKey: "ticketId"})
    transaction.hasMany(models.transactionItem, { foreignKey: "transactionId"})
    transaction.hasMany(models.eventAttendee, { foreignKey: "eventAttendeeId"})
    };
  
    return transaction;
  };
  