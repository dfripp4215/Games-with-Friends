const User = require('../../models/user')

function findFriend(friendEmail) {

    let validEmail = User.findUserByEmail(friendEmail).then((res) => validEmail = res)

    return validEmail.email === friendEmail ? true : false
}

module.exports = findFriend
