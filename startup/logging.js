const winston = require("winston");
require("express-async-errors");

module.exports = function () {
  // error handling
  new winston.ExceptionHandler(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  )
  // blocking error handler
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
  // log file 
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(new winston.transports.Console({ colorize: true, prettyPrint: true }));
};
