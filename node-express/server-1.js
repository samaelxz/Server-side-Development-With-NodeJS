const express = require('express');
const http = require('http');

let hostname = 'localhost';
let port = 3000;

let app = express();

app.use((req, res, next) => {
  console.log(req.headers);

  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});