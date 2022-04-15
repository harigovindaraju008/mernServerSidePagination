const express = require("express");
const cors = require("cors");
const users = require("../routers/userRouters");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  //routers
  app.use("/api/users", users);
  app.use(error);
};
