module.exports = (sequelize, Sequelize) => {
    const eventCategory = sequelize.define(
      "eventCategory",
      {
        eventId: {
            type: Sequelize.INTEGER
        },
        categoryId: {
            type: Sequelize.INTEGER
        }
      },
      {
        timestamps: false,
        tableName: "event_category",
      }
    );
  
    return eventCategory;
  };
  