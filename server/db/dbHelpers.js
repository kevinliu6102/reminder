let { User, Reminder } = require('./db');

exports.retrieveReminders = function (username) {
  return User.findOrCreate({
      where: {
        username: username
      }
    })
    .then(function (data) {
      let userId = data[0].dataValues.id
      return Reminder.findAll({
        where: {
          text: 'Teehee'
        },
        include: {
          model: User,
          where: {
            id: userId
          }
        }
      });
    })
    // .then(function (data) {
    //   console.log(data);
    // })
    .catch(function (e) {
      console.log('error fetching reminders', e.message);
    });
};