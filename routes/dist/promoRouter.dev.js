"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/').all(function (req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get(function (req, res, next) {
  res.end('Will send all the promotions to you!');
}).post(function (req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
}).put(function (req, res, next) {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
})["delete"](function (req, res, next) {
  res.end('Deleting all promotions');
});
promoRouter.route('/:promoId').get(function (req, res, next) {
  res.end('Will send details of the ' + req.params.promoId + ' promotions to you!');
}).post(function (req, res, next) {
  res.end('POST opertion is not allowed on /promotions ' + req.params.promoId);
}).put(function (req, res, next) {
  res.write('Updating the promotion: ' + req.params.promoId + '\n');
  res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})["delete"](function (req, res, next) {
  res.end('Deleting promotion' + req.body.name);
});
module.exports = promoRouter;
//# sourceMappingURL=promoRouter.dev.js.map
