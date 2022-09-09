const mysql = require("mysql");
const config = require("../database/config");

const connection = mysql.createConnection(config);

const sql = `delete from agenda where id = ?`;

const data = [10];

connection.query(sql, data, (err, result, fields) => {
  if (err) throw err;
  console.log(
    "Sucesso. Rows affected:",
    result.affectedRows
  );
});

connection.end();