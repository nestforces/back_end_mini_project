module.exports = (sequelize, Sequelize) => {
    const priceCategory = sequelize.define(
      "priceCategory",
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "priceCategories",
      }
    );
  
    priceCategory.associate = (models) => {
        priceCategory.hasMany(models.ticket, { foreignKey: "priceCategoryId"})
    };
  
    return priceCategory;
  };
  