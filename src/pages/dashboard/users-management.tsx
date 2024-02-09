import { useUsers } from 'hooks/use-users'
import { UsersTable } from 'components/dashboard/users/users-table'

export default function UserManagement() {
  const { loading, users } = useUsers()

  return (
    <>
      <h2 className='mb-4 text-xl font-bold'>Administración de Usuarios</h2>
      <UsersTable
        users={users}
        loading={loading}
      />
    </>
  )
}
