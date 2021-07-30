const express = require("express");
const User = require("../models/user");
const router = express.Router();
const validateUser = require("../middlewares/users/validate_user");
const validateLogin = require("../middlewares/users/validate_login");


router.post("/login", validateLogin, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.login(email, password).then((user) => {
    res.json({
      user: user,
      message: "logged in!",
    });
  });
  res.redirect("/")
});

router.post("/signup", validateUser, (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  User.create(name, email, password).then((user) => {
    res.json({
      user: user,
      message: "created user succesfully",
    });
  });
});


module.exports = router;
