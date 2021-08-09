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

  update_post(title, body_text, id) {
    const sql = `UPDATE posts SET post_title = $1, body = $2 WHERE id = $3`;
    return db.query(sql, [title, body_text, id]).then((dbResponse) => {
      return dbResponse.rows
    })
  }, 

  delete_post(post_id) {
    const sql = `DELETE FROM posts WHERE id = $1`;
    return db.query(sql, [post_id]).then((dbResponse) => {
      return dbResponse.rows
    })
  }, 

  create_post(title, body_text, user_id, user_name) {
    const sql = `INSERT INTO posts (post_title, body, user_id, user_name) VALUES ($1, $2, $3, $4)`;
    return db.query(sql, [title, body_text, user_id, user_name]).then((dbResponse) => {
      return dbResponse.rows
    })
  }


}

module.exports = Chats

// SELECT * FROM posts WHERE id = 1;