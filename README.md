# LisaChat
A basic chat app using websockets to learn Node.js, React, and Socket.io.

## Structure
The overall structure of the project is defined by [create-react-app](https://github.com/facebookincubator/create-react-app).
- `public` holds all static assets. This includes images, stylesheets, etc.
- `src` holds all source code.
  - `App.js` is the only relevant file here.
  - `App.css` or `index.css` can be used to inject CSS.
  - `components` folder holds on the smaller components used in App.js.
- `server.js` starts a websocket server (using [socket.io](https://github.com/socketio/socket.io/)) at port `3001`.

## Initial Install
All required packages are registered in `package.json`. Installing required dependencies is a single command.
```
npm install
```

## How to Run
The app requires both the server and client to function.
1. `node server.js` starts the server. This process must be kept active (e.g. do not `CTRL+C` to stop it). Alternatively, you can `CTRL+z` and then use command `bg` to background it (Unix shell only).
2. `npm start` will use create-react-app's built in file server (with hot-reloading!) to serve the client. The prompt will tell you at which port the client is served at (default `localhost:3000`).

## How to Implement
Two key files to work with:
- `server.js`: any new socket or server functionality must be added here. For example, adding a new event to the socket is shown below. **REMEMBER TO RESTART THE SERVER PROCESS AFTER MAKING CHANGES, OR NOTHING WILL BE APPLIED.**
```
io.on('connection', (socket) => {
  socket.on('eventName', (payload) => {
    // Handle event.
  });
  
  ...
});
```
- `App.js`: to keep things simple, the socket connection should just be handled in this file. For example, send an event with a payload to the socket:
```
io.emit('eventName', payload);
```
Additional components can be added to the `components` folder to practice modularization. The template for a component is as follows:
```
import React from 'react';

export default class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div />
    );
  }
}
```
Details about the implementation of a component can be found with [React](https://facebook.github.io/react/) documentation. A good thing to read up first is the [component lifecycle](http://busypeoples.github.io/post/react-component-lifecycle/).

