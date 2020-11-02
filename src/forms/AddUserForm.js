import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    nome: "",
    email: "",
    cargo: "",
    empresa: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.nome || !user.email || !user.cargo || !user.empresa) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        required={true}
        value={user.nome}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        required="Insira seu e-mail"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Cargo</label>
      <input
        type="text"
        name="cargo"
        value={user.cargo}
        onChange={handleInputChange}
      />
      <label>Empresa</label>
      <input
        type="text"
        name="empresa"
        required={true}
        value={user.empresa}
        onChange={handleInputChange}
      />
      <button>Incluir</button>
    </form>
  );
};

export default AddUserForm;
