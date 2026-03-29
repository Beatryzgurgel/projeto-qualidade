const { criarTarefa, pegarTarefas } = require("../services/tarefasService");

function cadastrarTarefa(req) {
  return criarTarefa(req);
}

function listar() {
  return pegarTarefas();
}

module.exports = {
  cadastrarTarefa,
  listar
};