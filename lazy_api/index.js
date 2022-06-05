const app = require("./config/express");
require("colors");
const sequelize = require("./config/db");

const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!".green);
  } catch (error) {
    console.log("Unable to connect to the database:".red);
    console.log(error.message.red);
    process.exit(1);
  }
};

const init = async () => {
  await testDatabaseConnection();

  app.listen(app.get("port"), () => {
    console.log(
      `The server is running on port ${app.get("port")} in ${
        process.env.NODE_ENV
      } mode`.yellow
    );
  });
};

init();
