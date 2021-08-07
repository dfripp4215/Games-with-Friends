const isBlank = require("../tools/is_blank");
const validationError = require("../tools/validation_error");

function validateEvent(req, res, next) {
    const date = req.body.date
    const friends = req.body.friends

    if (isBlank(date)) {
        throw validationError("Date is required")

    } else if (friends.length === 0) {   
        throw validationError("Must choose at least 1 friend")
    }
    next()
}

module.exports = validateEvent
