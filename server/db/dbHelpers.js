let { User, Reminder } = require('./db');
const bcrypt = require('bcrypt-nodejs');

exports.retrieveReminders = (username, cb) => {
  return User.find({
      where: {
        username: username
      }
    })
    .then(function (data) {
      let userId = data.dataValues.id
      return Reminder.findAll({
        where: {
          userId: userId
        }
      });
    })
    .then(function (data) {
      cb(data);
    })
    .catch(function (e) {
      console.log('error fetching reminders', e.message);
    });
};

exports.createReminder = (username, text, cb) => {
  return User.find({
      where: {
        username: username
      }
    })
    .then(function (data) {
      let userId = data.dataValues.id
      return Reminder.create({
        text: text,
        done: false,
        userId: userId
      });
    })
    .then(function (data) {
      console.log('reminder created', data);
      cb();
    })
    .catch(function (e) {
      console.log('error creating reminder', e.message);
    });
};

exports.login = (username, password, cb) => {
  User.find({
    where: {
      username: username
    }
  })
  .then((result) => {
    if (result) {
      bcrypt.compare(password, result.dataValues.password, (err, match) => {
        cb(match, result);
      });
    } else {
      cb(false);
    }
  });
};

exports.createUser = (username, password, cb) => {
  bcrypt.hash(password, null, null, (err, hash) => {
    console.log('creating user', username, hash);
    let newUser = User.build({
      username: username,
      password: hash
    });
    newUser.save()
           .then(cb)
           .catch((e) => console.log('new user error', e));
  });
};