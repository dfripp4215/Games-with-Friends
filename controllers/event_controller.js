const express = require("express");
const Event = require("../models/event");
const validateEvent = require("../middlewares/events/validate_events");

const router = express.Router();

router.get('/', (req, res) => {
    const userEmail = req.body.userEmail

    Event
        .findAll(userEmail)
        .then(events => res.json(events));
});

router.post('/', validateEvent, (req, res) => {

    const { userEmail, friends, date } = req.body;

    Event.create(userEmail, friends, date)
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
