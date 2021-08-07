const express = require("express");
const Chats = require("../models/chat_mod");
const router = express.Router();


router.get('/', (req, res) => {
    Chats
    .all_post()
    .then(posts => res.json(posts))
  })



module.exports = router