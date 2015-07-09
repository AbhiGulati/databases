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
    post: function (text, uId, rId, callback) {
      var values = "(" + "'" + text + "'" + ", " +  "'" + uId + "'" + ", "  + "'" + rId  + "'" + ")";
      console.log(values);
      db.query('insert into messages (text, user_id, room_id) values ' + values, function(err, rows){
        if (err) throw err;
        callback(err, rows);

      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (callback) {
      callback();
    },
    post: function (callback) {

      callback();
    }
  }
};

