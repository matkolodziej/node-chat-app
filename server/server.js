const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'Jon',
        text: 'See you then',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('create Message', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.')
    })

});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
})
