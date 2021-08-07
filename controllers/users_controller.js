const express = require("express");
const User = require("../models/user");
const router = express.Router();
const validateUser = require("../middlewares/users/validate_user");


router.post("/", validateUser, (req, res) => {
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

router.get("/", (req, res) => {
  
  User.findGamesOwned(req.query.id).then((gamesOwned) => {
    res.send({
      gamesOwned: gamesOwned,
    });
  });
});



module.exports = router;
