const path = require("path");
const express = require("express");
const cors = require("cors");
const meaning = require("./routes/meaning");

const server = express();
server.use(express.static(path.join(__dirname, "./public")));
server.use(express.json());
server.use(cors("*"));

module.exports = server;

server.use("/meaning", meaning);
