const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");
const findFriend = require("../tools/friend_finder")

function validateFriend(req, res, next) {
    const friendEmail = req.body.friendEmail
    const userEmail = req.body.userEmail

    if (isBlank(friendEmail)) {
        throw validationError("Users Email is required")
    } else if (findFriend(friendEmail)) {
        throw validationError("User not found")
    } else if (userEmail === '') {
        throw validationError("Please login to add friends")
    }

    next()
}

module.exports = validateFriend
