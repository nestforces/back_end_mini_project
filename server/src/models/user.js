module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      points: {
        type: Sequelize.INTEGER,
      },
      avatar: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  user.associate = (models) => {
    user.belongsTo(models.role, { foreignKey: "roleId" });
    user.hasMany(models.event, { foreignKey: "userId" });
    user.hasMany(models.transaction, { foreignKey: "userId" });
  };

  return user;
};
