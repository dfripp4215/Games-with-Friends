// Google Calendar
const fs = require('fs');
const Calendar = require('../models/calendar')
const authorize = require('../middlewares/calendar/authorize_calendar')

// Express
const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
  // Load client secrets from a local file.
    fs.readFile('credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Calendar API.
      authorize(JSON.parse(content), Calendar.listEvents);
    })
})

module.exports = router
