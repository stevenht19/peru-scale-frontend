import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void; // La función que se llamará cuando se busque
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Manejador para los cambios en el input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Podrías llamar a onSearch aquí si quieres buscar mientras el usuario escribe
  };

  // Manejador para cuando se envía el formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm); // o podrías llamar a onSearch aquí si solo quieres buscar cuando el usuario envía el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
