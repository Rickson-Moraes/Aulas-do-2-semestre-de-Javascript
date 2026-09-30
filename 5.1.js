// 5 Arrays paralelos com informações da Wikipédia
const siglas = ["Paciente", "Aluno", "Professor", "Tecnico"];
const Nomes = [
  "Renato Hora",
  "Nathan Fernandes",
  "Ana Beatriz",
  "Carlos Mendes",
];
const Areas = ["Paciente", "Estudante", "Professor de Psicologia", "Tecnico"];
const Idade = ["43 anos", "22 anos", "45 anos", "23 anos"];
const Agenda = ["20/10/2026", "20/10/2026", "20/10/2026", "Livre"];

// Mapeamento dos elementos da DOM
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const btnAbrirModal = document.getElementById("btnAbrirModal");
const btnCancelar = document.getElementById("btnCancelar");
const btnSalvar = document.getElementById("btnSalvar");
const modalForm = document.getElementById("modalForm");

const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// EventListener para o evento onclick do botão
btnDetalhes.addEventListener("click", function () {
  // Pega o índice selecionado na listbox (0 a 3)
  const index = selectEstados.value;

  // Se houver seleção válida
  if (index !== "") {
    // Preenche as divs usando o mesmo índice nos arrays paralelos
    divCapital.textContent = Nomes[index];
    divArea.textContent = Areas[index];
    divPopulacao.textContent = Idade[index];
    divBandeira.textContent = Agenda[index];

    // Evento de Salvar o Novo Estado
    btnSalvar.addEventListener("click", function () {
      const sigla = document.getElementById("inputSigla").value.trim();
      const Nomes = document.getElementById("inputCapital").value.trim();
      const Areas = document.getElementById("inputArea").value.trim();
      const Idade = document.getElementById("inputPopulacao").value.trim();
      const Agenda = document.getElementById("inputBandeira").value.trim();

      // Validação simples
      if (!sigla || !Nomes || !Areas || !Idade || !Agenda) {
        alert("Por favor, preencha todos os campos!");
        return;
      }
      // Controles de Abertura/Fechamento do Modal
      btnAbrirModal.addEventListener("click", function () {
        modalForm.style.display = "flex";
      });

      btnCancelar.addEventListener("click", function () {
        modalForm.style.display = "none";
        limparFormulario();
      });

      // Adiciona os novos valores ao FINAL dos 5 arrays paralelos usando .push()
      siglas.push(sigla);
      Nomes.push(Nomes);
      Idade.push(Idade);
      Areas.push(Areas);
      Agenda.push(Agenda);

      // Obtém o índice do novo elemento inserido
      const novoIndex = siglas.length - 1;

      // Cria e adiciona a nova opção na listbox
      const novaOpcao = document.createElement("option");
      novaOpcao.value = novoIndex;
      novaOpcao.textContent = sigla;
      selectEstados.appendChild(novaOpcao);

      // Seleciona o novo estado adicionado na listbox
      selectEstados.value = novoIndex;

      // Fecha o modal e limpa os campos
      modalForm.style.display = "none";
      limparFormulario();
    });

    function limparFormulario() {
      document.getElementById("inputSigla").value = "";
      document.getElementById("inputCapital").value = "";
      document.getElementById("inputArea").value = "";
      document.getElementById("inputPopulacao").value = "";
      document.getElementById("inputBandeira").value = "";
    }
  }
});
