import React from 'react';
import ReactDOM from 'react-dom';
import NamePicker from './NamePicker.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null
    }

    this.submitUsername = this.submitUsername.bind(this);
  }

  submitUsername(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      username: event.target.children[0].value
    });
    console.log('username set')
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.username === null)
            ? <NamePicker submitUsername={this.submitUsername} />
            : <div>Hi</div>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));