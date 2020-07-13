const express = require("express");

const routes = express.Router();
const users = {};
routes.get("/", (req, res) => {
  //listagem
  return res.json({ users });
});

module.exports = routes;
