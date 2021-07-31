const express = require("express");
const User = require("../models/user");
const router = express.Router();
const validateLogin = require("../middlewares/users/validate_login");
const bcrypt = require("bcryptjs");


router.post("/", validateLogin, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findUserByEmail(email).then((user) => {
    if(bcrypt.compareSync(password, user.password_digest)) {
      req.session.user = {}
      req.session.user.name = user.name
      req.session.user.email = user.email
      req.session.user.loggedIn = true
    } else {
      throw validationError("Password is incorrect")
    }
  })
});

module.exports = router;
