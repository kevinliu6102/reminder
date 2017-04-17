import React from 'react';
import ReminderAdder from './ReminderAdder.jsx';
import ReminderItem from './ReminderItem.jsx';

const ReminderList = (props) => {
  return (
    <ul>
      <ReminderAdder addReminder={props.addReminder} />
      {props.reminders.map((reminder, i) => <ReminderItem reminder={reminder} index={i} />)}
    </ul>
  );
};

module.exports = ReminderList;