const http = require('http');
const fs = require('fs');
const path = require('path');

let hostname = 'localhost';
let port = 3000;

const server = http.createServer((req, res) => {
  console.log('Request for ' + req.url + ' by method ' + req.method);

  if (req.method == 'GET') {
    let fileUrl;

    fileUrl = req.url == '/' ? '/index.html' : req.url;

    let filePath = path.resolve('./public' + fileUrl);
    let fileExt = path.extname(filePath);

    if (fileExt == '.html') {
      fs.exists(filePath, exists => {
        if (!exists) {
          res.writeHead(404, { 'Content-Type': 'text/html'});
          res.end('<h1>Error 404: ' + fileUrl + ' not found</h1>');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html'});
      res.end('<h1>Error 404: ' + fileUrl + ' not a HTML file</h1>');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html'});
    res.end('<h1>Error 404: ' + req.method + ' not supported</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});