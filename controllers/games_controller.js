const express = require("express");
const router = express.Router();
const Game = require("../models/game");
const User = require("../models/user");

router.post("/", (req, res) => {
  const gameName = req.body.name;
  const userEmail = req.body.userEmail;

  Game.create(gameName)
    .then((res) => {
      Game.addToUserGame(User.findUserByEmail(userEmail), res.id);
    })
    .then((game) => {
      res.json({
        game: game,
        message: "added game succesfully",
      });
    });
});

module.exports = router;
