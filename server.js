var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
	socket.on('message', (payload) => {
	  	io.emit('message', payload);
	});

	socket.on('enter', (username) => {
		io.emit('enter', username);
	});
});

http.listen(3001, function() {
  console.log('listening on *:3001');
});