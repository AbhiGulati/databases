var Promise = require('bluebird');
var models = require('../models');
Promise.promisifyAll(models.messages);
Promise.promisifyAll(models.users);

console.log(Object.keys(models.messages));

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("get request to /messages");

      models['messages'].getAsync()
      .then(function(rows) {
        console.log("hi", rows);
        res.send(JSON.stringify(rows));
      })
      .catch(function(err){
        console.log("ERROR", err);
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  }
};

