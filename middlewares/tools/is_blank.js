function isBlank(name) {
  return name === "" || name === undefined || name === null ? true : false;
}

module.exports = isBlank;
