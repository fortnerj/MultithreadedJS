const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  console.log('Connected to server');
});

socket.addEventListener('message', (event) => {
  console.log('Received data:', event.data);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server');
});
