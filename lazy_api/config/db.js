const { Sequelize } = require("sequelize");
const PostitModel = require("../models/postit.model");
require("colors");

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    freezeTableName: true,
  },
});

PostitModel(sequelize);

module.exports = sequelize;
