import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { UserRow } from './UserRow';
import { fetchUsers } from '../services/userService'; // Asegúrate de que esta importación sea correcta

type User = {
  id: number;
  correo: string;
  nombre_completo: string; // Cambiado para coincidir con la estructura de tu API
  direccion: string;
  telefono: string;
  dni: string;
  estado: 'activo' | 'inactivo';
  nombre_rol: string; // Añadido, según la respuesta de tu API
};

export const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = users.filter(user => 
      user.nombre_completo.toLowerCase().includes(term.toLowerCase()) // Asegúrate de que la propiedad sea correcta
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Correo</th>
                <th>Nombre Completo</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>DNI</th>
                <th>Estado</th>
                <th>Rol</th>
                {/* Añade o quita encabezados según sea necesario */}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
