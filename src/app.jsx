import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import ReminderList from './ReminderList.jsx';

// TODO: import axios to make requests to server endpoints

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      reminders: ['close garage', 'lock doors', 'pack up']
    };

    this.addReminder = this.addReminder.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  addReminder(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      reminders: this.state.reminders.concat(event.target.children[0].value)
    });
    console.log('reminder added')
  }

  login(event) {
    console.log('logging in')
    event.preventDefault();
    event.stopPropagation();
    axios.post('/login', {
      username: event.target.children[0].value,
      password: event.target.children[1].value
    })
    .then((res) => {
      this.setState({
        username: res.data
      });
    })
    .catch((e) => console.log('login error', e));
  }

  signup(event) {

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage username={this.state.username}/>
          </Route>
          <Route exact path='/login'>
            <LoginForm login={this.login}/>
          </Route>
          <Route exact path='/signup'>
            <SignupForm signup={this.signup}/>
          </Route>
          <Route exact path='/reminders'>
            <ReminderList reminders={this.state.reminders} addReminder={this.addReminder}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;