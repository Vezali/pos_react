import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
      <button>Editar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditUserForm;
