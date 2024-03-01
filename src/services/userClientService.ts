import { HttpMethod, api } from 'utils/api';
import { GetUserClient } from '../shared/user_client';
import { User } from 'models/User';


//Obtener usuarios
export const fetchClientUsers = async () => {
    try {
      const response = await api(HttpMethod.GET, `/client_usuarios`)
      return response.data as GetUserClient[];
    } catch (error) {
      throw error
    }
  };


  export const editUser = async (userClientToEdit: User) => {
    try {
      await api(
        HttpMethod.PUT,
        `/client_usuarios/${userClientToEdit.id}`,
        userClientToEdit
      )
    } catch(e) {
      throw e
    }
  }