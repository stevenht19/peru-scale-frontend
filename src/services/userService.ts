import axios from 'axios';

// Utiliza la dirección correcta de tu API.
const API_URL = 'http://localhost:3000/admin/admin_usuarios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    // Accede a la propiedad data que es lo que devuelve tu API.
    return response.data.data;
  } catch (error) {
    // Considera manejar el error o re-lanzarlo para que sea manejado en otra parte del código.
    throw error;
  }
};
