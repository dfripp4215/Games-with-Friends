const express = require("express");
const Friend = require("../models/friend");
const User = require('../models/user')
const validateFriend = require("../middlewares/friends/validate_friend");

const router = express.Router();

router.get('/', (req, res) => {

    const userEmail = req.body.userEmail

    Friend
        .findFriends(userEmail)
        .then(friends => res.json(friends));
})

router.post('/', validateFriend, (req, res) => {

    const friendEmail = req.body.friendEmail;
    const userEmail = req.body.userEmail;

    Friend.addFriend(friendEmail, userEmail)
        .then(event => res.json({
            event: event,
            message: "Added Friend successfully"
        }));
})

module.exports = router;
