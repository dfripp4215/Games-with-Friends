const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
  const gameName = req.body.name;

  Game.create(gameName).then((game) => {
    res.json({
      game: game,
      message: "added game succesfully",
    });
  });
});


module.exports = router;
