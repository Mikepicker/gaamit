'use strict';
module.exports = function(app) {
  var gaamit = require('../controllers/gaamitController');
  const path = require('path');

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  app.route('/login')
    .post(gaamit.login);

  // gaamit Routes
  app.route('/users')
    .get(gaamit.list_all_users)
    .post(gaamit.create_a_user);

  app.route('/users/:userId')
    .get(gaamit.read_a_user)
    .put(gaamit.update_a_user)
    .delete(gaamit.delete_a_user);
};
