const bcrypt = require("bcryptjs");
const db = require("../db/db");

const User = {
  create(name, email, password) {
    const password_digest = bcrypt.hashSync(password, 10);

    const sql = `
      INSERT INTO users(name, email, password_digest)
      VALUES($1, $2, $3) RETURNING *
    `;

    return db.query(sql, [name, email, password_digest]).then((dbResponse) => {
      return dbResponse.rows[0];
    }).catch(function(error ){
      console.log("Error:" + String(error));
  })
  },

  login(email, password) {
    const sql = 'SELLECT * FROM users WHERE email = $1';

    const userData = db.query(sql, [email]).then(dbResponse => {
      return dbResponse.rows[0]
    })
    if(bcrypt.compareSync(password, userData.password_digest)) {
      console.log("logged in! ")
    } else {
      throw validationError("Password is incorrect");    }
  }
};

module.exports = User;
