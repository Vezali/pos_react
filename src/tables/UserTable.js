import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Cargo</th>
        <th>Empresa</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>{user.cargo}</td>
            <td>{user.empresa}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nenhum usuário selecionado</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
