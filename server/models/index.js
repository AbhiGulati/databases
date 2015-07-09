var db = require('../db');




module.exports = {
  messages: {
    // a function which queries the database and retrieves all the messages
    get: function (callback) {
      db.query('select * from messages', function(err, rows, fields) {
        if (err) throw err;
        callback(err, rows);
      })
    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

