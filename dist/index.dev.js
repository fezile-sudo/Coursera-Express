"use strict";

var express = require('express'),
    http = require('http');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var dishRouter = require('./routes/dishRouter');

var leaderRouter = require('./routes/leaderRouter');

var promotionRouter = require('./routes/promoRouter');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promotionRouter);
app.use(express["static"](__dirname + '/public'));
var server = http.createServer(app);
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
//# sourceMappingURL=index.dev.js.map
