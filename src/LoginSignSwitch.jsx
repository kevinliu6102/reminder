import React from 'react';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

const ReminderSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginForm username={props.username} login={props.login}/>
      </Route>
      <Route exact path="/signup">
        <SignupForm signup={props.signup}/>
      </Route>
    </Switch>
  );
};

export default ReminderSwitch;