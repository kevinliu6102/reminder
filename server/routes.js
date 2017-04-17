let router = require('express').Router();

router.get('/fetch', function(req, res) {
  // pull username from req and query db for associated reminders
});

router.post('/newrem', function(req, res) {
  // pull new reminder text and username from req and insert into tables
});

module.exports = router;