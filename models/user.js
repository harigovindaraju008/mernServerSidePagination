// user model
const mongoose = require("mongoose");
const Joi = require("joi");
const userShemea = new mongoose.Schema(
  {
    name: String,
    emailId: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

//validators
const userValidator = (data) => {
  const schemas = Joi.object({
    name: Joi.string().min(3).max(20),
    emailId: Joi.string().email().required(),
    id: Joi.string()
  });
  return schemas.validate(data);
};

const savedUser = mongoose.model("user", userShemea);
exports.User = savedUser;
exports.userValidator = userValidator;
