const config = {
  database: "nodejs",
  host: "localhost",
  user: "root",
  password: "root",
};

const mysql = require('mysql');
const db = mysql.createConnection(config);

db.connect(function(err) {
    if(err) throw err;
    console.log('DB connected!');
});

module.exports = db;