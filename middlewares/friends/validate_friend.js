const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");
const findFriend = require("../tools/friend_finder")

function validateFriend(req, res, next) {
    const friendEmail = req.body.friendEmail
    const userEmail = req.body.userEmail
    let isFriendValidated = false
    findFriend(friendEmail).then(res => isFriendValidated = res)

    findFriend(friendEmail).then(res => trueEmail = res)
    if (isBlank(friendEmail)) {
        throw validationError("Users Email is required")
    } else if (userEmail === '') {
        throw validationError("Please login to add friends")
    } else if (isFriendValidated) {
        return console.log(isFriendValidated)
        throw validationError(`${isFriendValidated}`)
    }
    

    next()
}

module.exports = validateFriend
