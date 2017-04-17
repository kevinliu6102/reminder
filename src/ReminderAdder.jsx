import React from 'react';

const ReminderAdder = (props) => {
  return (
    <form onSubmit={props.addReminder} >
      <input type="text" placeholder="Add a reminder" />
    </form>
  );
};

module.exports = ReminderAdder;