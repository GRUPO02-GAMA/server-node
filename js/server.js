const http = require("http");
const fs = require("fs");
const contents = fs.readFileSync("index.html");

require('dotenv').config();

http.createServer((req, res) => {
    res.end(contents);
}).listen(process.env.APP_PORT);

console.log(`Serviço disponível em: http://localhost:${process.env.APP_PORT}`);
