const express = require("express");
const Event = require("../models/event");
const validateEvent = require("../middlewares/events/validate_events");

const router = express.Router();

router.get('/', (req, res) => {
    const userEmail = req.query.userEmail

    Event
        .findAll(userEmail)
        .then(events => res.json(events));
});

router.post('/', validateEvent, (req, res) => {

    const { userEmail, friend, date } = req.body;
    const emailWrapped = `{${friend}}`

    Event.create(userEmail, emailWrapped, date)
        .then(event => res.json({
            event: event,
            message: "Created event successfully"
        }));
});

router.delete('/:id', (req, res) => {
    Event
        .delete(req.params.id)
        .then(() => res.json({}));
});

module.exports = router;
