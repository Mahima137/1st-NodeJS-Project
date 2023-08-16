
// Create a server , run it on port 4000 and console log your name.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, I am Mahima');
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
}); 


