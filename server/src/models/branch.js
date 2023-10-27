module.exports = (sequelize, Sequelize) => {
  const branch = sequelize.define(
    "branch",
    {
      branchName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "branchs",
    }
  );



  return branch;
};
