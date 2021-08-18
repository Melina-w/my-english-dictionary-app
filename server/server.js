const path = require("path");
const express = require("express");
const cors = require("cors");
const meaning = require("./routes/meaning");

const server = express();
server.use(express.static(path.join(__dirname, "./public")));
server.use(express.json());
server.use(cors("*"));
const port = 3000;
server.listen(port, () => {
  console.log(`listening on https://localhost${port}`);
});

module.exports = server;

server.use("/meaning", meaning);
