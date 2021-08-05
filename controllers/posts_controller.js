const express = require("express");
const Chats = require("../models/chat_mod");
const router = express.Router();


router.get('/', (req, res) => {
    Chats
    .all_post()
    .then(post => res.json(post))
  })



module.exports = router