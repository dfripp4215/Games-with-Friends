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


router.delete('/:id', (req, res) => {
  const postId = req.params.id
  Chats
    .delete_post(postId)
    .then(post => res.json())
})


module.exports = router