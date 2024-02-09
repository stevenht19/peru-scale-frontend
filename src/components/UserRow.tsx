import React from 'react';

// Asegúrate de que esta interfaz coincida con la información que utilizarás en cada fila
interface UserProps {
  id: number;
  correo: string;
  nombre_completo: string;
  direccion: string;
  telefono: string;
  dni: string;
  estado: 'activo' | 'inactivo';
  nombre_rol: string;
}

const UserRow: React.FC<{ user: UserProps }> = ({ user }) => {
  // Desestructuración de las propiedades del usuario para un acceso más fácil
  const { id, correo, nombre_completo, direccion, telefono, dni, estado, nombre_rol } = user;

  return (
    <tr>
      <td>{id}</td>
      <td>{correo}</td>
      <td>{nombre_completo}</td>
      <td>{direccion}</td>
      <td>{telefono}</td>
      <td>{dni}</td>
      <td>{estado}</td>
      <td>{nombre_rol}</td>
      {/* Agregar aquí más celdas si necesitas mostrar más información */}
    </tr>
  );
};

export default UserRow;
