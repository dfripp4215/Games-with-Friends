const db = require("../db/db");

const Game = {
  create(name) {
    const sql = `
      INSERT INTO games (name)
      VALUES($1) RETURNING *
    `;

    return db
      .query(sql, [name])
      .then((dbResponse) => {
        return dbResponse.rows[0];
      })
      .catch(function (error) {
        console.log("Error:" + String(error));
      });
  },
};

module.exports = Game;
