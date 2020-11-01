const listClients = () => {
  return fetch("http://localhost:4000/clientes")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    });
};

const registerClient = (name, cpf) => {
  const json = JSON.stringify({
    nome: name,
    cpf: cpf,
  });

  return fetch("http://localhost:4000/clientes/cliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  }).then((res) => {
    if (res.status === 200) {
      alert("Success");
      window.location.href = "clientes.html";
    } else {
      alert("Error");
    }

    return res.body;
  });
};

const deleteClient = (id) => {
  console.log(id);
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE",
  });
};

const getDetailsFromClient = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "GET",
  }).then((res) => {
    return res.json();
  });
};

const editClient = (id, cpf, name) => {
  const json = JSON.stringify({
    nome: name,
    cpf: cpf,
  });

  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  });
};
