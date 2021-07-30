const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");

function validateUser(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  //should probably be a isBlank(name) method
  if (isBlank(email)) {
    throw validationError("Email is required");
  }
  if (isBlank(password)) {
    throw validationError("Password is required");
  }
  next();
}

module.exports = validateUser;
