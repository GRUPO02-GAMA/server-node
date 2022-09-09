const mysql = require("mysql");
const config = require("../database/config");

const connection = mysql.createConnection(config);

const sql = ``;

const data = [];

connection.query(sql, data, (err, result, fields) => {
  if (err) throw err;
  console.log(
    "Sucesso. Rows affected:",
    result.affectedRows
  );
});

connection.end();