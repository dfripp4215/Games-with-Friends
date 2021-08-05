const express = require("express");
const Friend = require("../models/friend");
const validateFriend = require("../middlewares/friends/validate_friend");

const router = express.Router();

router.get('/', (req, res) => {
    Friend
        .findFriends(userData.user.email)
        .then(friends => res.json(friends));
})

router.post('/', validateFriend, (req, res) => {

    const friendEmail = req.body;
    const userEmail = userData.user.email;

    Friend.addFriend(friendEmail, userEmail)
        .then(event => res.json({
            event: event,
            message: "Added Friend successfully"
        }));
})

module.exports = router;
