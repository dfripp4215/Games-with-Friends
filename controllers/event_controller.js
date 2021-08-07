const express = require("express");
const Event = require("../models/event");
const validateEvent = require("../middlewares/events/validate_events");

const router = express.Router();

router.get('/', (req, res) => {
    const userEmail = req.query.userEmail

    Event
        .findEvents(userEmail)
        .then(events => res.json(events));
});

router.post('/', validateEvent, (req, res) => {

    const { userEmail, friends, date } = req.body;
    const wrappedFriends = `{${friends}}`

    Event.create(userEmail, wrappedFriends, date)
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
