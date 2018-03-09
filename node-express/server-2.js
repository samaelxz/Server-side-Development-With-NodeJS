const express = require('express');
const morgan = require('morgan');

let hostname = 'localhost';
let port = 3000;

let app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});