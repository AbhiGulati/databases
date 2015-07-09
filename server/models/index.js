var db = require('../db');




module.exports = {
  messages: {
    // a function which queries the database and retrieves all the messages
    get: function (callback) {
      var queryStr = 'select m.text, (select u.name from users u where m.user_id=u.id) as username, m.room_id from messages m'
      db.query(queryStr, function(err, rows, fields) {
        if (err) throw err;
        callback(err, rows);
      })
    },
    post: function (text, username, room_id, callback) {
      var queryStr = 'insert into messages (text, user_id, room_id) \
       values(?, (select id from users where users.name = ? limit 1) ,(select id from rooms where rooms.name = ?))';
      db.query(queryStr, [text, username, room_id], function(err, rows){
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


