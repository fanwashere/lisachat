import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

import Message from './components/message.jsx';
import User from './components/user.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      transcript: []
    };

    this.socket = io(`http://localhost:3001`);
  }
  componentDidMount() {
    this.socket.on('connection', (socket) => {
      console.log('Connected to socket.');
    });

    this.socket.on('message', (payload) => {
      this.setState({
        transcript: this.state.transcript.concat(payload)
      });
    });

    this.socket.on('enter', (username) => {
      this.setState({
        transcript: this.state.transcript.concat({
          username: 'System', 
          message: `${username} entered the room at ${(new Date()).toDateString()}.`
        })
      });
    });
  }
  sendMessage() {
    this.socket.emit('message', {
      username: this.state.username, 
      message: this.refs.input.value
    });
    this.refs.input.value = '';
  }
  setUsername(username) {
    this.setState({
      username: username
    });

    this.socket.emit('enter', username);
  }
  render() {
    if (!this.state.username) {
      return (<User setUsername={this.setUsername.bind(this)} />);
    }
    else {
      return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{height: 'calc(100vh - 150px)', width: '100vw', overflowY: 'scroll'}}>
            {this.state.transcript.map((item) => {
              return (<Message username={item.username} message={item.message} />);
            })}
          </div>
          <div style={{width: '100vw', height: '150px'}}>
            <textarea ref={'input'} style={{width: '100vw', height: '100px'}} />
            <div style={{width: '100vw', height: '50px', backgroundColor: 'gray', color: 'white'}} onClick={this.sendMessage.bind(this)}>Send</div>
          </div>
        </div>
      );
    }
  }
}

export default App;
