const db = require("../db/db");
const User = require("./user");

const Game = {
  create(name) {
    //creates game, need to add to check if game already exists
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

  addToUserGame(userID, gameID) {
    const sql = `
      INSERT INTO user_games (user_id,
        game_id)
      VALUES($1, $2) RETURNING *
    `;

    return db
      .query(sql, [userID, gameID])
      .then((dbResponse) => {
        return dbResponse.rows[0];
      })
      .catch(function (error) {
        console.log("Error:" + String(error));
      });
  },

  createGameAndUserList(name, userID) {
    const gameCreated = this.create(name);
    const addedToUser = this.addToUserGame(userID, gameCreated.id);
    return gameCreated, addedToUser;
  },

  findAllFriendsGames(friendId) {
    const sql = 'SELECT * FROM user_games WHERE user_id = $1'

    return db
      .query(sql, [friendId])
      .then((dbResponse) => {
        return dbResponse.rows;
      })
  }
};
// to do list, add to user_games DB
// query RAWG to get ID and steam ID

module.exports = Game;
