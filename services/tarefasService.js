const { adicionarTarefa, listarTarefas } = require("../database/tarefasDatabase");

function criarTarefa(tarefa) {
  if (!tarefa || !tarefa.nome) return false;

  tarefa.concluida = false;

  adicionarTarefa(tarefa);
  return true;
}

function pegarTarefas() {
  return listarTarefas();
}

module.exports = {
  criarTarefa,
  pegarTarefas
};