import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username
    };
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.username === null)
            ? <Redirect to="/login"/>
            : <Redirect to="/reminders"/>
        }
      </div>
    )
  }
}

export default Homepage;