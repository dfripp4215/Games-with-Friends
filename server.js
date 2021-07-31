if (process.env.NODE_ENV !== 'production') { require('dotenv').config();}
const express = require('express');
const logger = require("./middlewares/logger");
const userController = require("./controllers/users_controller");
const sessionsController = require("./controllers/sessions_controller");
const errorHandler = require("./middlewares/error_handler");
const session = require('express-session');


const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var sess = {
  secret: 'keyboard cat',
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(logger);
app.use(session(sess))
app.use(express.static("client"));
app.use(express.json());
app.use("/api/users", userController);
app.use("/api/sessions", sessionsController);
app.use(errorHandler);
