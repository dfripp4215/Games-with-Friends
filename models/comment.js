const db = require("../db/db");

const Comments = {

single_post_comments(post_id) {
    const sql = `SELECT * FROM comments WHERE post_id = $1`;
    return db.query(sql, [post_id]).then((dbResponse) => {
      return dbResponse.rows
    })
  }, 

  create_comment(comment,user_name, user_id, user_email, post_id) {
    const sql = `INSERT INTO comments (comment, user_name, user_id, user_email, post_id) VALUES ($1, $2, $3, $4, $5)`;
    return db.query(sql, [comment, user_name ,user_id, user_email, post_id]).then((dbResponse) => {
      return dbResponse.rows
    })
  }


}


module.exports = Comments