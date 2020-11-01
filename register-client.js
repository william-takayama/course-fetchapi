const formRegisterClient = document.querySelector("[data-form]");

formRegisterClient.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.querySelector("[data-nome]").value;
  const cpf = event.target.querySelector("[data-cpf]").value;

  if (validateCPF(cpf)) {
    registerClient(name, cpf);
  } else {
    alert("CPF inválido");
  }
});
