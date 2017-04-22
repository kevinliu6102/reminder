import React from 'react';

const ReminderItem = (props) => {
  return (
      <label htmlFor={'rem' + props.index}>
        <input id={'rem' + props.index} type="checkbox" checked={props.reminder[1]}/>
        {props.reminder[0]}
      </label>
  );
};

export default ReminderItem;