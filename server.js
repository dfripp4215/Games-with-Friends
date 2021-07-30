const express = require('express')
const logger = require("./middlewares/logger");
const userController = require("./controllers/users_controller");
const errorHandler = require("./middlewares/error_handler");


const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(logger);
app.use(express.static("client"));
app.use(express.json());
app.use("/api/users", userController);
app.use(errorHandler);
