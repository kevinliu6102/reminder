
exports.fetch = function(req, res) {
  // pull username from req and query db for associated reminders
  console.log('body is ', Object.keys(req.query));
}

exports.post = function(req, res) {
  // pull new reminder text and username from req and insert into tables
}