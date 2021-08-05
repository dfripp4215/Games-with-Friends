const express = require("express");
const Event = require("../models/event");
const validateEvent = require("../middlewares/events/validate_events");

const router = express.Router();

router.get('/', (req, res) => {
    Event
        .findAll(userData.user.email)
        .then(events => res.json(events))
})

router.post('/', validateEvent, (req, res) => {

    const { friends, date } = req.body
    const userEmail = userData.user.email

    Event.create(userEmail, friends, date)
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
