if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const logger = require("./middlewares/logger");
const userController = require("./controllers/users_controller");
const eventController = require('./controllers/event_controller');
const friendController = require('./controllers/friend_controller');
const sessionsController = require("./controllers/sessions_controller");
const gamesController = require("./controllers/games_controller");
const postController = require("./controllers/posts_controller");
const commentController = require("./controllers/comment_controller");
const errorHandler = require("./middlewares/error_handler");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  saveUninitialized: false,
  resave: false,
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(logger);
app.use(express.json());
app.use(express.static("client"));
app.use(session(sessionConfig));
app.use("/api/users", userController);
app.use("/api/sessions", sessionsController);
app.use("/api/games", gamesController);
app.use("/api/events", eventController)
app.use("/api/friends", friendController)
app.use("/api/posts", postController);
app.use("/api/comments", commentController);
app.use(errorHandler);
