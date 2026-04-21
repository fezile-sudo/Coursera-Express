"use strict";

var express = require('express'),
    http = require('http');

var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;
var app = express();
app.use(morgan('dev'));
app.use(express["static"](__dirname + '/public'));
app.use(function (req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});
var server = http.createServer(app);
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
//# sourceMappingURL=index.dev.js.map
