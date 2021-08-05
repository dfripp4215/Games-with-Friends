const db = require("../db/db");

const Friend = {
    findFriends(email) {
        const sql = 'SELECT friends FROM users WHERE email = $1'
    
        return db.query(sql, [email]).then((dbResponse) => {
          return dbResponse.rows[0]
        })
      },
    
      addFriend(friendEmail, userEmail) {
        const friendsList = this.findFriends(userData.user.email)
        const sql = `UPDATE users SET friends[${friendsList[0].length}] = $1 WHERE email = $2`
    
        return db.query(sql, [friendEmail, userEmail]).then((dbResponse) => {
          return dbResponse.rows[0]
        })
      }
}

module.exports = Friend
