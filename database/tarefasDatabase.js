let tarefas = [];

function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
}

function listarTarefas() {
  return tarefas;
}

function limpar() {
  tarefas = [];
}

module.exports = {
  adicionarTarefa,
  listarTarefas,
  limpar
};