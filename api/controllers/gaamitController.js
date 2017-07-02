'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  req.checkBody('username', 'Invalid postparam').notEmpty();
  req.checkBody('password', 'Invalid postparam').notEmpty();

  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      res.status(400).send('Missing parameters');
      return;
    }
    User.findOne({ 'username': username }, function(err, user) {
      if (err || user === null) {
        res.status(404).send('Username not found');
        return;
      }
      if (user.password === password) {
        res.json(user);
      } else {
        res.status(403).send("Password error");
      }
    });
  });

}

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {

  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
