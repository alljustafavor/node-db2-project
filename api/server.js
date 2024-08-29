const express = require("express");
const router = require("./cars/cars-router")

const server = express();

server.use(express.json());

server.use('/api/cars', router)

server.use("/", (req, res) => {
  res.status(200).json({ api: "up"});
});

module.exports = server;
