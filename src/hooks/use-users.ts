import { useEffect, useState } from 'react'
import { fetchUsers } from 'services/userService'
import { useBoolean } from './use-boolean'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useBoolean(false);

  useEffect(() => {
    setLoading.on()
    fetchUsers()
      .then(data => {
        setUsers(data)
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {
        setLoading.off()
      })
  }, [])

  return {
    users,
    loading
  }
}
