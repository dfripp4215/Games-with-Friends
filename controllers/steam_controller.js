const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", (req, res) => {
    const steamID = req.body.steamID;

    axios
        .get(
            `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamID}&include_appinfo=true&include_played_free_games=true`
        )
        .then((response) => {
           

           
           res.send(response.data.response.games)

        });

});

module.exports = router;

// 76561197996609556
