const express = require('express');
const app = express();
const http = require("http");
const path = require('path');

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// FIXED SOCKET CODE
io.on('connection', function (socket) {
    console.log("A user connected:", socket.id);

    socket.on("send-location", function (data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });
    socket.on('disconnect', function () {
        console.log("A user disconnected:", socket.id);
        io.emit("user-disconnected", socket.id);
    });
});

// FIXED ROUTE
app.get('/', function (req, res) {
    res.render('index');
});

// FIXED SERVER START
server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on 0.0.0.0:3000");
});
