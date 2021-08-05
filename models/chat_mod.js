const db = require("../db/db");

const Chats = {

  all_post() {
    const sql = `SELECT * FROM posts`;
    return db.query(sql).then((dbResponse) => {
      return dbResponse.rows
    })
  }

}

module.exports = Chats