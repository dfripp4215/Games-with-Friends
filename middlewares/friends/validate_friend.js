const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");
const findFriend = require("../tools/friend_finder")

function validateFriend(req, res, next) {
    const friendEmail = req.body.friendEmail

    if (isBlank(friendEmail)) {
        throw validationError("Users Email is required")
    } else if (findFriend(friendEmail)) {
        throw validationError("User not found")
    }

    next()
}

module.exports = validateFriend
