module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define(
      "category",
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "categories",
      }
    );
  
    category.associate = (models) => {
      category.belongsToMany(models.event, {as: "event", through: "event_category"});
    };
  
    return category;
  };
  