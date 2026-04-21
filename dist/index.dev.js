"use strict";

var express = require('express'),
    http = require('http');

var morgan = require('morgan');

var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/dishes', function (req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});
app.get('/dishes', function (req, res, next) {
  res.end('Will send all the dishes to you!');
});
app.post('/dishes', function (req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});
app.put('/dishes', function (req, res, next) {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});
app["delete"]('/dishes', function (req, res, next) {
  res.end('Deleting all dishes');
});
app.get('/dishes/:dishId', function (req, res, next) {
  res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
});
app.post('/dishes/:dishId', function (req, res, next) {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/' + req.params.dishId);
});
app.put('/dishes/:dishId', function (req, res, next) {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});
app["delete"]('/dishes/:dishId', function (req, res, next) {
  res.end('Deleting dish: ' + req.params.dishId);
});
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
