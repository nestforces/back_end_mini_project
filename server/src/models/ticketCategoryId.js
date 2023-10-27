module.exports = (sequelize, Sequelize) => {
    const ticketCategory = sequelize.define(
      "ticketCategory",
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "ticketCategories",
      }
    );
  
    ticketCategory.associate = (models) => {
        ticketCategory.hasMany(models.ticket, { foreignKey: "ticketCategoryId" });
    };
  
    return ticketCategory;
  };
  