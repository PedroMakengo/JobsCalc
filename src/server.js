const express = require("express");
const server = express();

// request, response
server.get("/", (request, response) => {
  return response.sendFile(__dirname + "/views/index.html");
});

server.listen(3000, () => console.log("rodando"));
