import React from 'react';
import { UserTable } from '../../components/UserTable';
import './UserAdmin.css'; // Asume que has creado estilos específicos para esta página

const UserAdmin = () => {
  return (
    <div className="user-admin-container">
      <h1>Administración de Usuarios</h1>
      <UserTable />
    </div>
  );
};

export default UserAdmin;
