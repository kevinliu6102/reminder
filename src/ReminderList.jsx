import React from 'react';
import ReminderAdder from './ReminderAdder.jsx';
import ReminderItem from './ReminderItem.jsx';
import axios from 'axios';

class ReminderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: ['close garage', 'lock doors', 'pack up']
    }

    this.addReminder = this.addReminder.bind(this);
  }

  componentDidMount() {
    console.log('fetching reminders')
    axios.get('/db/fetch', {
      params: {
        username: this.props.username
      }
    })
         .then((res) => {
           let reminders = res.data.map((e) => {
             return [e.text, e.done];
           });
           this.setState({
             reminders: reminders
           });
         })
         .catch((e) => console.log('error fetching reminders', e));
  }

  addReminder(event) {
    event.preventDefault();
    event.stopPropagation();
    let app = this;
    let text = event.target.children[0].value
    axios.post('/db/newrem', {
      username: this.props.username,
      text: text
    })
         .then((res) => {
           console.log('newrem response', res)
           app.setState({
             reminders: this.state.reminders.concat([text, false])
           });
        })
         .catch((e) => console.log('newrem error', e));
    console.log('reminder added')
  }

  render() {
    return (
      <ul>
        <ReminderAdder addReminder={this.addReminder} />
        {this.state.reminders.map((reminder, i) => <ReminderItem reminder={reminder} index={i} />)}
      </ul>
    );
  }
}

export default ReminderList;