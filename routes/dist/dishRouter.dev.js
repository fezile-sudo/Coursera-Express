"use strict";

var express = require('express');

var bodyParser = require('body-parser');

http = require('http');
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/').all(function (req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get(function (req, res, next) {
  res.end('Will send all the dishes to you!');
}).post(function (req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
}).put(function (req, res, next) {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})["delete"](function (req, res, next) {
  res.end('Deleting all dishes');
});
dishRouter.route('/:dishId').get(function (req, res, next) {
  res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
}).post(function (req, res, next) {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/' + req.params.dishId);
}).put(function (req, res, next) {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})["delete"](function (req, res, next) {
  res.end('Deleting dish: ' + req.params.dishId);
});
module.exports = dishRouter;
//# sourceMappingURL=dishRouter.dev.js.map
