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
        allowNull: false,
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
        allowNull: false,
      },
      maxRefferalCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ticketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );

  event.associate = (models) => {
    event.belongsTo(models.user, { foreignKey: "userId" });
    event.hasMany(models.category, { foreignKey: "categoryId"})
    event.hasMany(models.ticket, { foreignKey: "ticketId"})
  };

  return event;
};