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
/*   let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let idade = document.getElementById('idade');
  let genero = document.getElementById('genero'); */
  
  let name = 'Jay';
  let email = 'jay@email.com';
  let age = 23;
  let gender = 'M';

  const record = {
    name: name,
    email: email,
    age: age,
    gender: gender
  }

  return record;
}