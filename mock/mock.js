const WebSocket = require('ws');
const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running\n');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('A new client connected');

  ws.on('message', (data) => {
    // Parse the incoming message data
    const { username, message } = JSON.parse(data);
    console.log(`Received message from ${username}: ${message}`);
    
    // Send a response back to the client
    ws.send(`${username}: ${message}`);
  });

  ws.on('close', () => {
    console.log('A client disconnected');
  });

  ws.on('error', (err) => {
    console.log('WebSocket error: ', err);
  });
});

server.listen(8080, () => {
  console.log('WebSocket server running on ws://localhost:8080');
});
