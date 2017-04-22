const db = require('../db/dbHelpers');

exports.fetch = function(req, res) {
  // pull username from req and query db for associated reminders
  db.retrieveReminders(req.query.username, (data) => {
    res.json(data);
  });
};

exports.post = function(req, res) {
  // pull new reminder text and username from req and insert into tables
  // TODO: write createReminder
  console.log('new reminder req is ', req.body)
  db.createReminder(req.body.username, req.body.text, () => {
    res.send('Reminder created');
  });
};