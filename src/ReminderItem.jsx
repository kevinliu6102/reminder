import React from 'react';

const ReminderItem = (props) => {
  return (
      <label htmlFor={'rem' + props.index}>
        <input id={'rem' + props.index} type="checkbox"/>
        {props.reminder}
      </label>
  );
};

module.exports = ReminderItem;