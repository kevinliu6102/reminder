import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import history from 'history';
import Homepage from './Homepage.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import ReminderList from './ReminderList.jsx';

// TODO: import axios to make requests to server endpoints

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null
    };

    console.log('history', history)

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
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
    console.log('signing up')
    event.preventDefault();
    event.stopPropagation();
    axios.post('/signup', {
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

  render() {
    console.log(this.state.username)
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage username={this.state.username}/>
          </Route>
          {
            (this.state.username)
            ? <Switch>
                <Route exact path="/reminders">
                  <ReminderList />
                </Route>
                <Redirect from="/login" to="/reminders" />
                <Redirect from="/signup" to="/reminders" />
              </Switch>
            : <Switch>
                <Route exact path="/login">
                  <LoginForm username={this.state.username} login={this.login}/>
                </Route>
                <Route exact path="/signup">
                  <SignupForm signup={this.signup}/>
                </Route>
              </Switch>
          }
        </Switch>
      </Router>
    );
  }
}

export default App;