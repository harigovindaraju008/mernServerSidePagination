const message = require("../middlewares/message");
// custom validator
module.exports = (validator) => {
  return (req, res, next) => {
    const { error, errorMsg } = validator(req.body, req.query);
    const msg = (error && error.details && error.details.length > 0 && error.details[0].message) ? error.details[0].message : errorMsg
    if (error) return res.status(400).send(message(msg));
    next();
  };
};
