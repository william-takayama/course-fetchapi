const tableBody = document.querySelector("[data-table-content]");

const removeClient = (id) => {
  const confirmed = confirm("Do you want to delete the client?");

  if (confirmed) {
    deleteClient(id);
  }

  setTimeout(() => {
    window.location.reload();
  }, [700]);
};

const listClient = (cpf, name, id) => {
  const row = document.createElement("tr");

  const rowContent = `
        <td>${cpf}</td>
        <td>${name}</td>
        <button type="button" class="btn btn-danger" onClick="removeClient(${id})">Excluir</button>
        <a href="edita-clientes.html?id=${id}">
          <button type="button" class="btn btn-info">Editar</button>
        </a>
    `;

  row.innerHTML = rowContent;

  return row;
};

listClients().then((show) => {
  show.forEach((index) => {
    tableBody.appendChild(listClient(index.cpf, index.nome, index.id));
  });
});
