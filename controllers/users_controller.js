const express = require("express");
const User = require("../models/user");
const router = express.Router();
const validateUser = require("../middlewares/users/validate_user");

router.post("/", validateUser, (req, res) => {
  if(req.body.id === "login-form") {
    const email = req.body.email;
    const password = req.body.password;
  
    User.login(email, password).then((user) => {
      res.json({
        user: user,
        message: "logged in!",
      });
    });
    res.redirect("/")
  }
  if(req.body.id === "sign-up-form") {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
  
    User.create(name, email, password).then((user) => {
      res.json({
        user: user,
        message: "created user succesfully",
      });
    });
  };
});

module.exports = router;
