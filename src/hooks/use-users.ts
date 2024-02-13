import { message } from 'antd'
import { useEffect, useState } from 'react'
import { CreateUser, GetUser } from 'shared/user'
import { useBoolean } from './use-boolean'
import {
  createUser,
  editUser,
  fetchUsers
} from 'services/userService'
import { sortUsersByName } from 'utils/sort-by-name'

export const useUsers = () => {
  const [users, setUsers] = useState<GetUser[]>([])
  const [role, setRol] = useState<number>(0)
  const [loading, setLoading] = useBoolean(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchUsers()
      .then((data: GetUser[]) => {
        setUsers(sortUsersByName(data))
      })
      .finally(() => {
        setLoading.off()
      })
  }, [])

  const getUsers = () => {
    return users.filter((user) => {
      return user.nombres?.toLowerCase().includes(search) ||
      user.apellidos?.toLowerCase().includes(search)
    }).filter(user => role === 0 ? true : user.id_rol === role)
  }

  const handleAddUser = (users: GetUser[], userToAdd: GetUser) => {
    return [userToAdd, ...users]
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
      setUsers(handleEditUser(users, userToEdit))
      message.success('Empleado editado correctamente')
    } catch(e) {
      throw e
    }
  }

  const handleFilterByRol = (rol: number) => {
    console.log(rol)
    setRol(rol)
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
    handleFilterByRol,
    onCreateUser,
    onEditUser
  }
}
