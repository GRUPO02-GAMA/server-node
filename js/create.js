const mysql = require("mysql");
const config = require("../database/config");

const connection = mysql.createConnection(config);

const person = cadastrar();

const sql = `insert into agenda values ('?','?','?','?')`;

const data = [`${person.name}`, `${person.email}`, `${person.age}`, `${person.gender}`];

connection.query(sql, data, (err, result, fields) => {
  if (err) throw err;
  console.log(
    "Sucesso. Rows affected:",
    result.affectedRows
  );
});

connection.end();

function cadastrar() {
  let name = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('idade').value;
  let gender = document.getElementById('genero').value;
  
  const record = {
    name: name,
    email: email,
    age: age,
    gender: gender
  }

  return record;
}

module.exports = cadastrar;