// server config validation
module.exports = function () {
  if (!process.env.MONGODB_URL) {
    throw new Error("FATAL ERROR: MongoDB URL is not defined.");
  }
};
