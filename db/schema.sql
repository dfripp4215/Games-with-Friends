CREATE DATABASE games_with_friends;
\c games_with_friends;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT,
  friends TEXT [],
  steam_id INTEGER,
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
  user_email TEXT,
  invited_friends TEXT [],
  date DATE NOT NULL
);

CREATE TABLE user_games(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  game_id INTEGER
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  post_title TEXT,
  body TEXT,
  commentCount INTEGER,
  user_id INTEGER,
  user_name TEXT
);


CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT,
  user_name TEXT,
  user_id INTEGER,
  user_email TEXT,
  post_id INTEGER
);

DROP TABLE comments;
DROP TABLE users;
DROP TABLE games;
DROP TABLE events;
DROP TABLE user_games;
DROP TABLE posts;