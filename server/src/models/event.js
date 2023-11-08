module.exports = (sequelize, Sequelize) => {
  const event = sequelize.define(
    "event",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxRefferalCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      points: {
        type: Sequelize.INTEGER,
      }
    },
    {
      tableName: "events",
    }
  );

  event.associate = (models) => {
    event.belongsTo(models.user, { foreignKey: "userId" });
    event.belongsToMany(models.category, {as:"eventId", through: "event_category"})
    event.hasMany(models.ticket, { foreignKey: "eventId"})
    event.hasMany(models.eventAttendee, { foreignKey: "eventAttendeeId"})
    event.hasMany(models.transaction, {foreignKey: "eventId"})
    event.belongsTo(models.city, {foreignKey: "cityId"})
  };

  return event;
};
