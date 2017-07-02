'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'Enter the username'
  },
  password: {
    type: String,
    required: 'Enter the password'
  },
  banner: {
    type: String
  },
  postingKey: {
    type: String
  }
});

module.exports = mongoose.model('Users', UserSchema);
