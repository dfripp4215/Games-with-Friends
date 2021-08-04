const db = require("../db/db");

const Event = {
    create(friends, date) {
        // TODO Make getCurrentUserById function
        const userId = findUserByEmail(userData.user.email).then(dbRes => dbRes.rows[0].id)

        const sql = `
            INSERT INTO events(userID, friends, date) VALUES($1, $2 $3) RETURNING *
        `

        return db.query(sql, [userId, friends, date]).then((dbRes) => dbRes.rows[0])
    },

    findAll(userId) {
        const sql = `SELECT * FROM events WHERE userId = $1`

        return db.query(sql, [userId]).then(dbRes => dbRes.rows)
    },

    delete(id) {
        const sql = `DELETE FROM events WHERE id = $1`

        return db.query(sql, [id])
    }
}

module.exports = Event
