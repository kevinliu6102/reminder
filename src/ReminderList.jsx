import React from 'react';
import ReminderAdder from './ReminderAdder.jsx';
import ReminderItem from './ReminderItem.jsx';

class ReminderList extends React.Component {
  constructor() {
    super();
    this.state = {
      reminders: ['close garage', 'lock doors', 'pack up']
    }

    this.addReminder = this.addReminder.bind(this);
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