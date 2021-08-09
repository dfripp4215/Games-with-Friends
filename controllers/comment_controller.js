const express = require("express");
const Comments = require("../models/comment");
const router = express.Router();


router.get('/:id', (req, res) => {
    const post_id = req.params.id

    Comments
      .single_post_comments(post_id)
      .then(post => res.json(post))
  })


router.post('/create', (req, res) => {

    console.log(req.body)

    const post_id = req.body.post_id
    const comment = req.body.body
    const user_name = req.body.user_name
    const user_id = req.body.userId
    const user_email = req.body.userEmail

    Comments
      .create_comment(comment,user_name, user_id, user_email, post_id)
      .then(post => res.json(

      ))
  })

  module.exports = router;