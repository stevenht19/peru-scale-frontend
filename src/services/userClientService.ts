import { GetUserClient } from 'shared/user_client';
import { HttpMethod, api } from 'utils/api';

// Función para obtener usuarios
export const fetchClientUsers = async () => {
  try {
    const response = await api(HttpMethod.GET, `/client_usuarios`);
    return response.data as GetUserClient[];
  } catch (error) {
    throw error;
  }
};


// Función para actualizar un usuario
export const updateClientUser = async (userToEdit : GetUserClient) => {
  try {
     await api(HttpMethod.PUT, `/client_usuarios/${userToEdit.id}` , userToEdit);
  } catch (error) {
    throw error;
}
};