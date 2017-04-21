import React from 'react';
import ReminderList from './ReminderList.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

const ReminderSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/reminders">
        <ReminderList username={props.username} />
      </Route>
      <Redirect from="/login" to="/reminders" />
      <Redirect from="/signup" to="/reminders" />
    </Switch>
  );
};

export default ReminderSwitch;