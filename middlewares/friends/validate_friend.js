const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");
const findFriend = require("../tools/friend_finder")

function validateFriend(req, res, next) {
    const friendEmail = req.body.friendEmail
    const userEmail = req.body.userEmail

    findFriend(friendEmail).then(isFriendValidated => {
        if (isBlank(friendEmail)) {
            next(validationError("Users Email is required")) 
        } else if (userEmail === '') {
            next(validationError("Please login to add friends")) 
        } else if (!isFriendValidated.exists) {
            next(validationError(`User not found`)) 
        }
    
        next()
    })
}

module.exports = validateFriend
