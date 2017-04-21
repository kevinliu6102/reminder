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
    axios.get('/fetch', {
      params: {
        username: props.username
      }
    })
         .then((res) => console.log(res))
         .catch((e) => console.log('error fetching reminders', e));
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
      <ul>
        <ReminderAdder addReminder={this.addReminder} />
        {this.state.reminders.map((reminder, i) => <ReminderItem reminder={reminder} index={i} />)}
      </ul>
    );
  }
}

export default ReminderList;