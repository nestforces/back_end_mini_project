module.exports = (sequelize, Sequelize) => {
  const city = sequelize.define(
    "city",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "city",
    }
  );

  city.associate = (models) => {
    city.hasMany(models.event, {
      foreignKey: "cityId",
    });
  };

  return city;
};
