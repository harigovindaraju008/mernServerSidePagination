const winston = require("winston");
const mongoose = require("mongoose");
// DB connection
module.exports = function () {
  const db = process.env.MONGODB_URL;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => winston.info(`Connected to ${db}...`));
};
