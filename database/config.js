require('dotenv').config();

const config = {
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const mysql = require('mysql');
const db = mysql.createConnection(config);

db.connect(function(err) {
    if(err) throw err;
    console.log('DB connected!');
});

module.exports = db;