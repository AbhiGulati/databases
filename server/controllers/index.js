var Promise = require('bluebird');
var models = require('../models');
Promise.promisifyAll(models.messages);
Promise.promisifyAll(models.users);

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("get request to /messages");

      models['messages'].getAsync()
      .then(function(rows) {
        //console.log(rows)
        res.send(JSON.stringify({results: rows}));
      })
      .catch(function(err){
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      models['messages'].postAsync(message.text, message.uId, message.rId).then(function(){
        res.end('your message was stored');
      })
      .catch(function(err){
        res.end();
      });
    }, // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      console.log("get request to /users");

      models['users'].getAsync()
      .then(function(rows) {
        res.send(JSON.stringify({results: rows}));
      })
      .catch(function(err){
        res.end();
      });
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var username = req.body.username;
      models['users'].postAsync(username)
      .then(function(){
        res.end('new user was stored');
      })
      .catch(function(err){
        res.end();
      });
    }, // a function which handles adding a user to the database
  }
};

