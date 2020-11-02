import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  // Data
  const usersData = [
    {
      id: 1,
      nome: "Alexandre teste 1",
      email: "vezali@msn.com",
      cargo: "Analista",
      empresa: "AFL",
    },
    {
      id: 2,
      nome: "Alexandre teste 2",
      email: "vezali@gmail.com",
      cargo: "Estudante",
      empresa: "Univem",
    },
  ];

  const initialFormState = {
    id: null,
    nome: "",
    email: "",
    cargo: "",
    empresa: "",
  };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      nome: user.nome,
      email: user.email,
      cargo: user.cargo,
      empresa: user.empresa,
    });
  };

  return (
    <div className="container">
      <h1>Agenda do Vezali</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Editar</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Incluir</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>Cadastros</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
