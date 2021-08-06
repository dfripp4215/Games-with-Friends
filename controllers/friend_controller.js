const express = require("express");
const Friend = require("../models/friend");
const User = require('../models/user')
const validateFriend = require("../middlewares/friends/validate_friend");

const router = express.Router();


// If we use sessions to populate friends list then there's no need for this get request.
router.get('/', (req, res) => {

    // Temporary userEmail to get events working
    const userEmail = 'test3@test'

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
