const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");

function validateUser(req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //should probably be a isBlank(name) method
  if (isBlank(name)) {
    throw validationError("Name is required");
  }
  if (isBlank(email)) {
    throw validationError("Email is required");
  }
  if (isBlank(password)) {
    throw validationError("Password is required");
  } else if (password.length < 8) {
    throw validationError("Password needs to be at least 8 characters long");
  }
  next();
}

module.exports = validateUser;
