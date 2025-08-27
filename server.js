const http = require('http');
const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Collaboration server is running');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req, {});
});

const port = process.env.PORT || 1234;
server.listen(port, () => {
  console.log(`Collaboration server listening on port ${port}`);
});
