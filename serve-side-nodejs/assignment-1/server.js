var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishesRouter = require('./dishesRouter');
var pRouter = require('./promotionRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes', dishesRouter.dishesRouter);
app.use('/promotions', pRouter.promotionRouter);

app.use(express.static(__dirname + '\\public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});