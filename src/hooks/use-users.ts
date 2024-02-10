import { useEffect, useState } from 'react'
import { CreateUser, GetUser } from 'shared/user'
import { useBoolean } from './use-boolean'
import { message } from 'antd'
import {
  createUser,
  editUser,
  fetchUsers
} from 'services/userService'

export const useUsers = () => {
  const [users, setUsers] = useState<GetUser[]>([])
  const [loading, setLoading] = useBoolean(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data)
      })
      .finally(() => {
        setLoading.off()
      })
  }, [])

  const getUsers = () => {
    return users.filter((user) => {
      return user.nombres?.toLowerCase().includes(search) ||
      user.apellidos?.toLowerCase().includes(search)
    })
  }

  const handleAddUser = (users: GetUser[], userToAdd: GetUser) => {
    return users.concat(userToAdd)
  }

  const handleDeleteUser = (id: number) => {
    return users.filter(user => user.id !== id)
  }

  const handleEditUser = (users: GetUser[], userToEdit: CreateUser) => {
    return users.map((user) => {
      if (user.id === userToEdit.id) {
        return {
          ...user,
          ...userToEdit
        }
      }

      return user
    })
  }

  const onCreateUser = async (userToCreate: CreateUser) => {
    const createdUser: GetUser = await createUser(userToCreate)

    if (createdUser) {
      setUsers(handleAddUser(users, createdUser))
      message.success('Empleado agregado correctamente')
    }
  }

  const onEditUser = async (userToEdit: CreateUser) => {
    try {
      await editUser(userToEdit)

      /*
      if (userToEdit.estado === 'inactivo') {
        setUsers(handleDeleteUser(userToEdit.id))
        return
      }*/

      setUsers(handleEditUser(users, userToEdit))
      message.success('Empleado editado correctamente')
    } catch(e) {
      throw e
    }
  }

  const handleSearch = (search: string) => {
    setSearch(search.toLowerCase())
  }

  return {
    users,
    loading,
    search,
    getUsers,
    handleSearch,
    onCreateUser,
    onEditUser
  }
}
