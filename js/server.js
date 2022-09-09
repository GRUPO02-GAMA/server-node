const http = require("http");
const fs = require("fs");
const contents = fs.readFileSync("../index.html");

http
  .createServer((req, res) => {
    res.end(contents);
  })
  .listen(8080);

console.log("Serviço disponível em: http://localhost:8080");
