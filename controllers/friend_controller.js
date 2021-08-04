const express = require("express");
const User = require("../models/user")
const Friend = require("../models/friend")
const validateFriend = require("../middlewares/friends/validate_friend");


const router = express.Router();

const userEmail = userData.user.email

router.get('/', (req, res) => {
    Friend
        .findFriends(userEmail)
        .then(friends => res.json(friends))
})

router.post('/', validateFriend, (req, res) => {

    const friendEmail = req.body
    const userId = User.findUserByEmail(userEmail).then((dbRes) => dbRes.rows[0].id)

    Friend.addFriend(friendEmail, userId)
        .then(event => res.json({
            event: event,
            message: "Added Friend successfully"
        }))
})

module.exports = router
