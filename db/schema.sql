CREATE DATABASE games_with_friends;
\c games_with_friends;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT,
  friends TEXT []
);

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  name TEXT,
  RAWGer_id INTEGER,
  STEAM_id INTEGER
);

CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  time TIMESTAMP,
  userId TEXT,
  invitedFriends TEXT [],
  date DATE NOT NULL
);

CREATE TABLE user_games(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  game_id INTEGER
);
