import React from 'react';
import ReminderItem from './ReminderItem.jsx';

const ReminderList = (props) => {
  return (
    <ul>
      {props.reminders.map((reminder, i) => <ReminderItem reminder={reminder} index={i} />)}
    </ul>
  );
};

module.exports = ReminderList;