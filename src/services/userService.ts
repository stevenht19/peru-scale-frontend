import { CreateUser, GetUser } from 'shared/user';
import { HttpMethod, api } from 'utils/api';

export const fetchUsers = async () => {
  try {
    const response = await api(HttpMethod.GET, `/admin/admin_usuarios`)
    return response.data;
  } catch (error) {
    throw error
  }
};

export const createUser = async (userToCreate: CreateUser) => {
  try {
    const response = await api(HttpMethod.POST, `/admin/admin_usuarios`, userToCreate)
    return response?.user as GetUser
  } catch(e) {
    throw e
  }
}

export const editUser = async (userToEdit: CreateUser) => {
  try {
    await api(
      HttpMethod.PUT,
      `/admin/admin_usuarios/${userToEdit.id}`,
      userToEdit
    )
  } catch(e) {
    throw e
  }
}