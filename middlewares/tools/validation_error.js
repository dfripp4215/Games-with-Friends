function validationError(message) {
  console.log(message)
  const error = new Error(message);
  error.status = 422;
  return error;
}

module.exports = validationError;