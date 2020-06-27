const express = require("express");

const routes = express.Router();
const users = {};
routes.get("/", (req, res) => {
  //listagem
  return res.json({ users });
});
routes.post("/", (req, res) => {
  //criacao
  const { nome, cidade, idade } = req.body;

  users[nome] = { cidade, idade, nome };

  return res.json({ message: "usuário criado" });
});

routes.put("/:nome", (req, res) => {
  //edicao
  const { nome } = req.params;
  const { cidade, idade } = req.body;

  users[nome] = { cidade, idade, nome };
  return res.json({ message: "usuario editado" });
});

routes.delete("/:nome", (req, res) => {
  const { nome } = req.params;
  delete users[nome];
  res.json({ messsage: `usuário ${nome} foi deletado com sucesso.` });
});
module.exports = routes;
