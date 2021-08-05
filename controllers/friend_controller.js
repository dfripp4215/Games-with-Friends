const express = require("express");
const Friend = require("../models/friend");
const User = require('../models/user')
const validateFriend = require("../middlewares/friends/validate_friend");

const router = express.Router();

router.get('/', (req, res) => {
    Friend
        .findFriends()
        .then(friends => res.json(friends));
})

router.post('/', validateFriend, (req, res) => {

    const friendEmail = req.body.friendEmail;
    const userEmail = req.body.userEmail;
    let friendListLength = Friend.friendsLength(userEmail).then((res) => friendListLength = res + 1);
    

    Friend.addFriend(friendListLength, friendEmail, userEmail)
        .then(event => res.json({
            event: event,
            message: "Added Friend successfully"
        }));
})

module.exports = router;
