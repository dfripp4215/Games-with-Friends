const User = require('../../models/user')

function findFriend(friendEmail) {
    return User.findUserByEmail(friendEmail) ? true : false
}

module.exports = findFriend
