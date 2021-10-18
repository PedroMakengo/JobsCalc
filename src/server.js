const express = require("express");
const server = express();
const routes = require("./routes");

// Usando o template engine do javascript
server.set("view engine", "ejs");

// Habilitar arquivos statics
server.use(express.static("public"));

// routes
server.use(routes);

server.listen(3000, () => console.log("rodando"));
