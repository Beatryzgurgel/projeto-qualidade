const { cadastrarTarefa, listar } = require("../controllers/tarefasController");
const { limpar } = require("../database/tarefasDatabase");

beforeEach(() => {
  limpar();
});

describe("Sistema de Tarefas", () => {

  test("1. Banco começa vazio", () => {
    expect(listar().length).toBe(0);
  });

  test("2. Criar tarefa válida", () => {
    const result = cadastrarTarefa({ nome: "Estudar" });
    expect(result).toBe(true);
  });

  test("3. Não criar tarefa sem nome", () => {
    const result = cadastrarTarefa({});
    expect(result).toBe(false);
  });

  test("4. Adicionar 1 tarefa", () => {
    cadastrarTarefa({ nome: "A" });
    expect(listar().length).toBe(1);
  });

  test("5. Adicionar várias tarefas", () => {
    cadastrarTarefa({ nome: "A" });
    cadastrarTarefa({ nome: "B" });

    expect(listar().length).toBe(2);
  });

  test("6. Tarefa começa como não concluída", () => {
    cadastrarTarefa({ nome: "Estudar" });

    expect(listar()[0].concluida).toBe(false);
  });

  test("7. Estrutura da tarefa correta", () => {
    cadastrarTarefa({ nome: "Trabalhar" });

    expect(listar()[0]).toEqual({
      nome: "Trabalhar",
      concluida: false
    });
  });

  test("8. Não aceita null", () => {
    const result = cadastrarTarefa(null);
    expect(result).toBe(false);
  });

  test("9. Listar retorna array", () => {
    expect(Array.isArray(listar())).toBe(true);
  });

  test("10. Limpar funciona", () => {
    cadastrarTarefa({ nome: "Teste" });
    limpar();

    expect(listar().length).toBe(0);
  });

});