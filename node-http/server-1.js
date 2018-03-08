const http = require('http');

let hostname = 'localhost';
let port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});