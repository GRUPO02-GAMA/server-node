const mysql = require("mysql");
const config = require("../database/config");

const connection = mysql.createConnection(config);

const sql = `UPDATE agenda
            SET name= ?, email= ?, age= ?, gender=?
            WHERE id = ?`;

const data = ["Katharina Cureton", "kcureton0@cnet.com", "56", "F", 1];

connection.query(sql, data, (err, result, fields) => {
  if (err) throw err;
  console.log(
    "Sucesso. Rows affected:",
    result.affectedRows
  );
});

connection.end();