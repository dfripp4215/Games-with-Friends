const db = require("../db/db");

const Event = {
    create(userEmail, invitedFriends, date) {

        const sql = `INSERT INTO events(user_email, invited_friends, date) VALUES($1, $2, $3) RETURNING *`;

        return db
            .query(sql, [userEmail, invitedFriends, date])
            .then(dbRes => dbRes.rows[0])
            .catch(function (error) {
                console.log("Error:" + String(error));
            });
    },

    findEvents(userEmail) {
        const sql = `SELECT * FROM events WHERE user_email = $1`;

        return db
            .query(sql, [userEmail])
            .then(dbRes => {
                return dbRes.rows
            })
            .catch(function (error) {
                console.log("Error:" + String(error));
            });
    },

    delete(id) {
        const sql = `DELETE FROM events WHERE id = $1`;

        return db
            .query(sql, [id])
            .catch(function (error) {
                console.log("Error:" + String(error));
            });;
    }
}

module.exports = Event;
