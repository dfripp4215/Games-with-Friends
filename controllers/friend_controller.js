const express = require("express");
const Friend = require("../models/friend");
const validateFriend = require("../middlewares/friends/validate_friend");

const router = express.Router();

router.get('/', (req, res) => {
    const userEmail = req.query.userEmail

    Friend
        .findFriends(userEmail)
        .then(friends => res.json(friends));
})

router.post('/', validateFriend, (req, res) => {

    const friendEmail = req.body.friendEmail;
    const emailWrapped = `{${friendEmail}}`
    const userEmail = req.body.userEmail;

    Friend.addFriend(emailWrapped, userEmail)
        .then(friend => {
            res.json(friend)
        });
})

module.exports = router;
