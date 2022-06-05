const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Postit", {
    title: {
      type: DataTypes.STRING(80),
      allowNull: false,
      validate: { notNull: true },
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
      validate: { notNull: true },
    },
    finalDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      validate: { notNull: true, isDate: true },
    },
  });
};
