const express = require("express");
const User = require("../models/user")
const Friend = require("../models/friend")
const validateFriend = require("../middlewares/friends/validate_friend");

const router = express.Router();

router.get('/', (req, res) => {
    Friend
        .findFriends(userData.user.email)
        .then(friends => res.json(friends))
})

router.post('/', validateFriend, (req, res) => {

    const friendEmail = req.body
    const userId = User.findUserByEmail(userData.user.email).then((dbRes) => dbRes.rows[0].id)

    Friend.addFriend(friendEmail, userId)
        .then(event => res.json({
            event: event,
            message: "Added Friend successfully"
        }))
})

module.exports = router
