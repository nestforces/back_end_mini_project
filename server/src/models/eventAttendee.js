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
        eventId: {
            type: Sequelize.INTEGER,
          },
      },
      {
        timestamps: false,
        tableName: "eventAttendees",
      }
    );
  
    eventAttendee.associate = (models) => {
        eventAttendee.belongsTo(models.event, { foreignKey: "eventAttendeeId" });
    };
  
    return eventAttendee;
  };
  