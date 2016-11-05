module.exports = function(app, io) {
  io.on('connection', function(socket) {
    console.log('socket connected');

    /*
  
    // EXAMPLE ACTION EMIT

    setInterval(() => {
      socket.emit('action', {
        type: 'TEST',
        payload: 'MORE TEST'
      })
    }, 1000)
  
    */
    
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });

  app.use((req, res, next) => {
    req.io = io;
    next();
  });
}

