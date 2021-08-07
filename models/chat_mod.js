const db = require("../db/db");

const Chats = {

  all_post() {
    const sql = `SELECT * FROM posts`;
    return db.query(sql).then((dbResponse) => {
      return dbResponse.rows
    })
  },

  single_post(post_id) {
    const sql = `SELECT * FROM posts WHERE id = $1`;
    return db.query(sql, [post_id]).then((dbResponse) => {
      return dbResponse.rows
    })
  },

  update_post(title, body_text) {
    const sql = `UPDATE posts SET post_title = $1, body = $2`;
    return db.query(sql, [title, body_text]).then((dbResponse) => {
      return dbResponse.rows
    })
  }

}

module.exports = Chats

// SELECT * FROM posts WHERE id = 1;