const pg = require("pg");

const db = new pg.Pool({
  database: "games_with_friends",
});

db.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message)
})

module.exports = db;
