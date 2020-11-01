const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputCPF = document.querySelector("[data-cpf]");
const inputName = document.querySelector("[data-nome]");

getDetailsFromClient(id).then((data) => {
  // Get first data from array in position 0 - it's the same as doing data[0].xxxx
  const [id, name, cpf] = Object.values(data.find(Boolean));
  inputCPF.value = cpf;
  inputName.value = name;
});

const formEdition = document.querySelector("[data-form]");

const showMessage = (msg, status) => {
  const row = document.createElement("tr");

  const rowContent = `
        <div class="alert alert-${status}" role="alert">
            ${msg}
        </div>
    `;
  row.innerHTML = rowContent;

  return row;
};

formEdition.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateCPF(inputCPF.value)) {
    alert("This CPF does not exist");
    return;
  }

  editClient(id, inputCPF.value, inputName.value).then((res) => {
    if (res.status === 200) {
      formEdition.appendChild(
        showMessage("Success! Edition has been completed", "success")
      );
    } else {
      formEdition.appendChild(
        showMessage(
          "Oops... something went wrong. Please, try again",
          "warning"
        )
      );
    }
  });
});
