const mysql = require("mysql");
const config = require("../database/data");

const connection = mysql.createConnection(config);

const sql = `select * from agenda`;

connection.query(sql, (err, result, fields) => {
  if (err) throw err;
  console.log(result)
});

connection.end();