const mongoose = require('mongoose');
// id validator
module.exports = function(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.body.id))
    return res.status(400).send('Invalid ID.');
  
  next();
}