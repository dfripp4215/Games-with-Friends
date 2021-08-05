const db = require("../db/db");

const Friend = {
  findFriends(email) {
    const sql = `SELECT friends FROM users WHERE email = $1`;

    return db.query(sql, [email]).then((dbResponse) => {
      return dbResponse.rows[0]
    })
  },

  friendsListLength(email) {
    const sql = `SELECT array_length(users, 1) FROM users WHERE email = $1;`

    return db.query(sql, [email]).then((dbResponse) => {
      return dbResponse.rows[0]
    }) 
  },

  // Friends
  addFriend(friendsListLength, friendEmail, userEmail) {
    const sql = `UPDATE users SET friends[$1] = $2 WHERE email = $3`

    return db.query(sql, [friendsListLength, friendEmail, userEmail]).then((dbResponse) => {
      return dbResponse.rows[0]
    })
  }
}

module.exports = Friend;
