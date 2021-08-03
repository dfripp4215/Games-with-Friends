const express = require("express");
const session = require('express-session')
const Event = require("../models/event");
const User = require("../models/user")
const validateEvent = require("../middlewares/events/validate_events");

const router = express.Router();

router.get('/', (req, res) => {
    Event
        .findAll()
        .then(events => res.json(events))
})

router.post('/', validateEvent, (req, res) => {

    const { date, friends } = req.body
    const userId = User.findUserByEmail(req.session.user.email).then((dbRes) => dbRes.rows[0].id)

    Event.create(userId, friends, date)
        .then(event => res.json({
            event: event,
            message: "Created event successfully"
        }))
})

router.delete('/:id', (req, res) => {
    Event
        .delete(req.params.id)
        .then(() => res.json({}))
})

module.exports = router
