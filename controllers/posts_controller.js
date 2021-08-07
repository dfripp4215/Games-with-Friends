const express = require("express");
const Chats = require("../models/chat_mod");
const router = express.Router();


router.get('/', (req, res) => {
  Chats
    .all_post()
    .then(posts => res.json(posts))
})


router.get('/:id', (req, res) => {
  const postId = req.params.id
  Chats
    .single_post(postId)
    .then(post => res.json(post))
})


module.exports = router