const express = require("express");
const User = require("../models/user");
const router = express.Router();
const validateLogin = require("../middlewares/users/validate_login");
const bcrypt = require("bcryptjs");
const validationError = require('../middlewares/tools/validation_error.js')


router.post("/", validateLogin, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findUserByEmail(email).then((user) => {
    if(user && bcrypt.compareSync(password, user.password_digest)) {
      req.session.user = {}
      req.session.user.name = user.name
      req.session.user.email = user.email
      req.session.user.loggedIn = true
      res.json(req.session)
      return req.session.user
    } else {
      throw validationError("Password is incorrect or user does not exist")
    }
  });
});

router.get('/', (req, res) => {
  res.json(req.session)
})

router.delete("/", (req, res) => {
  req.session.destroy();
  res.json({});
})
module.exports = router;
