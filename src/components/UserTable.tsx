import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { UserRow } from './UserRow';
import { fetchUsers } from '../services/userService'; // Asegúrate de que esta importación sea correcta
import { Table } from 'antd';

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
    const filtered = users.filter(user => 
      user.nombre_completo.toLowerCase().includes(term.toLowerCase()) // Asegúrate de que la propiedad sea correcta
    );
    setFilteredUsers(filtered);
  };

  return (
    <Table />
  )
}
