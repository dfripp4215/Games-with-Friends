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

router.post('/create', (req, res) => {

  // console.log(req.body)
  const title = req.body.title
  const body_text = req.body.body
  const user_id = req.body.userId
  const user_name = req.body.user_name
 

  Chats
    .create_post(title, body_text, user_id, user_name)
    .then(post => res.json())
})

router.post('/update/:id', (req, res) => {
  
  const title = req.body.title
  const body_text = req.body.body
  const id = req.params.id
 

  Chats
    .update_post(title, body_text, id)
    .then(post => res.json(post))
    console.log(req.body.id)
})


module.exports = router