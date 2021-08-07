const User = require('../../models/user')
const db = require("../../db/db");

function findFriend(friendEmail) {

    const sql = `select exists(select friends from users where email=$1)`

    return db
      .query(sql, [friendEmail]).then((dbResponse) => {
        return dbResponse[0].
      })
      .catch(function (error) {
        console.log("Error:" + String(error));
      });
}

module.exports = findFriend
