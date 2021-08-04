const User = require('../../models/user')

function findFriend(friendEmail) {
    return User.findUserByEmail(friendEmail).then(res => res.email)
}

module.exports = findFriend
