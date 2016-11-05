const PORT = process.env.PORT || 8000;

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

require('./config/socketio')(app, io);
require('./config/webpack')(app);

app.use('/api', require('./routes/api'));
app.get('*', (req, res, next) => {
  let indexPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexPath);
});
