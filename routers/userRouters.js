//custom imports
const { User, userValidator } = require("../models/user");
const validate = require("../middlewares/validate");
const validateObjectId = require("../middlewares/validateObjectId");
//npm packages
const express = require("express");
const routers = express.Router();

const paramsValidation = (body, query) => {
  if (!query) {
    return {
      error: true, 
      errorMsg: "invalid page number, should start with 1"
    }
  } 
  
  if (!query.pageNumber || !query.pageNumber < 0 || query.pageNumber === 0) {
    return {
      error: true,
      errorMsg: "invalid page number, should start with 1"
    };
  }

  if (!query.pageSize || !query.pageSize < 0 || query.pageSize === 0) {
    return {
      error: true,
      errorMsg: "invalid page size, should start with 1"
    };
  }

  return {
    error: false,
  };
}

//update user
routers.patch("/updateUser", [validateObjectId ,validate(userValidator)] ,async (req, res) => {
    try {
      let {id, emailId} = req.body;
      await User.findByIdAndUpdate(id, {emailId});
      return res.status(200).send({message: "updated sucessfully."});
    } catch(err) {
      return res.status(400).send({message: "updated failed."});
    }
});

//fetching all users
routers.get("/", [validate(paramsValidation)] ,async (req, res) => {
  const {pageSize, pageNumber} = req.query
  const offset = pageSize * (pageNumber - 1)
  const userCollection = await User.find().skip(offset).limit(pageSize)
  const totalCount = await User.count()

  return res.send({
    "count": totalCount,
    "rows": userCollection,
    "pageCount": Math.ceil(totalCount / pageSize),
    "pageNumber": pageNumber,
    "pageSize": pageSize
  });
});

module.exports = routers;
