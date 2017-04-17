import React from 'react';
import ReactDOM from 'react-dom';
import NamePicker from './NamePicker.jsx';
import ReminderList from './ReminderList.jsx';

// TODO: import axios to make requests to server endpoints

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      reminders: ['close garage', 'lock doors', 'pack up']
    }

    this.submitUsername = this.submitUsername.bind(this);
    this.addReminder = this.addReminder.bind(this);
  }

  submitUsername(event) {
    event.preventDefault();
    event.stopPropagation();
    let username = event.target.children[0].value;
    this.setState({
      username: username
    });
    console.log('username set')
  }

  addReminder(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      reminders: this.state.reminders.concat(event.target.children[0].value)
    });
    console.log('reminder added')
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.username === null)
            ? <NamePicker submitUsername={this.submitUsername} />
            : <ReminderList reminders={this.state.reminders} addReminder={this.addReminder} />
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));