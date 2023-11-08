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
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pointToUser: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      maxReferralCode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // createdAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      // },
      // updatedAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      // }
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );

  event.associate = (models) => {
    event.belongsTo(models.user, { foreignKey: "userId" });
    event.belongsToMany(models.category, {as:"category", through: "event_category"})
    event.hasMany(models.ticket, { foreignKey: "eventId"})
    event.hasMany(models.transaction, {foreignKey: "eventId"})
  };

  return event;
};
