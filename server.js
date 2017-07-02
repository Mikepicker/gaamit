var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/gaamitModel'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator');

  const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://gaamit:hubern17@ds145312.mlab.com:45312/gaamitdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator([]));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

var routes = require('./api/routes/gaamitRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
