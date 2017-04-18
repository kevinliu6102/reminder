let Sequelize = require('sequelize');
let connection = new Sequelize('remind_data', 'root', '');

// TODO: ?? maybe enforce minimum and maximum chars

// reminder-text, reminder-instances, users
Reminder = connection.define('reminder', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  done: {
    type: Sequelize.BOOLEAN
  }
});

User = connection.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasMany(Reminder);
Reminder.belongsTo(User);

User.sync();
Reminder.sync();

module.exports = {
  User: User,
  Reminder: Reminder
};