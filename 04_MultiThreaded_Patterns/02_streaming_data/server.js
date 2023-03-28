import { Server } from 'ws';
const server = new Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Client connected');

  // Send data to the client every second
  const interval = setInterval(() => {
    const stockPrice = Math.random() * 100;
    socket.send(`Current stock price: ${stockPrice}`);
  }, 1000);

  socket.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});
