const express = require("express");
const Event = require("../models/event");
const validateEvent = require("../middlewares/events/validate_events");

const router = express.Router();

router.get('/', (req, res) => {
    Event
        .findAll()
        .then(events => res.json(events))
})

router.post('/', validateEvent, (req, res) => {

    const {date, friends} = req.body
    const userId = getCurrentUserId()
    
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
