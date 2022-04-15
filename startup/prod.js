const helmet = require("helmet");
// security stuffs
module.exports = function (app) {
  app.use(helmet());
};
