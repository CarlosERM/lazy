require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const morgan = require("morgan");

const postitsRoutes = require("../routes/postit.routes");
app.set("port", process.env.PORT);

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}

app.use("/api/v1/postits", postitsRoutes);

module.exports = app;
