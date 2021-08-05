const db = require("../db/db");

const Friend = {
  findFriends(email) {
    const sql = `SELECT friends FROM users WHERE email = $1`;

    return db
      .query(sql, [email]).then((dbResponse) => {
        return dbResponse.rows[0]
      })
      .catch(function (error) {
        console.log("Error:" + String(error));
      });
  },

  addFriend(friendEmail, userEmail) {
    const sql = `UPDATE users SET friends = friends || $1 where email = $2`;

    return db
      .query(sql, [friendEmail, userEmail]).then((dbResponse) => {
        return dbResponse.rows[0]
      })
      .catch(function (error) {
        console.log("Error:" + String(error));
      });
  }
};

module.exports = Friend;
