CREATE DATABASE games_with_friends;
\c games_with_friends;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  name TEXT,
  RAWGer_id INTEGER,
  STEAM_id INTEGER
);