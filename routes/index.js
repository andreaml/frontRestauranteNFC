var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
// WARNING: app.listen(80) will NOT work here!

var Socket;

io.on('connection', function (socket) {
  Socket = socket;
});

app.get('/', function (req, res) {
  res.render('index', { title: 'Restaurant NFC' });
});

app.get('/emit', function(req, res) {
    console.log('Enviando mensaje...');
    Socket.emit('message', { message: 'Comanda N'});
});