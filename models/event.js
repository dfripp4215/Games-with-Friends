const db = require("../db/db");

const Event = {
    create(userEmail, invitedFriends, date) {

        const sql = `INSERT INTO events(userEmail, invitedFriends, date) VALUES($1, $2, $3) RETURNING *`;

        return db.query(sql, [userEmail, invitedFriends, date]).then(dbRes => dbRes.rows[0]);
    },

    findAll(userEmail) {
        const sql = `SELECT * FROM events WHERE email = $1`;

        return db.query(sql, [userEmail]).then(dbRes => dbRes.rows);
    },

    delete(id) {
        const sql = `DELETE FROM events WHERE id = $1`;

        return db.query(sql, [id]);
    }
}

module.exports = Event;
